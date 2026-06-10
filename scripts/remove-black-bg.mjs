import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SOURCE = path.join(root, "public", "images", "ignitex-logo-source.png");

const LOGO_OUT = path.join(root, "public", "images", "ignitex-logo.png");
const LOGO_DARK_OUT = path.join(root, "public", "images", "ignitex-logo-dark.png");
const ICON_OUT = path.join(root, "app", "icon.png");

const BLACK_THRESHOLD = 35;

function isBackgroundBlack(data, pixelIndex, channels) {
  const r = data[pixelIndex];
  const g = data[pixelIndex + 1];
  const b = data[pixelIndex + 2];
  return r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;
}

async function removeBlackBackground(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];

  const trySeed = (x, y) => {
    const idx = y * width + x;
    const pi = idx * channels;
    if (!visited[idx] && isBackgroundBlack(data, pi, channels)) {
      visited[idx] = 1;
      queue.push(idx);
    }
  };

  for (let x = 0; x < width; x++) {
    trySeed(x, 0);
    trySeed(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    trySeed(0, y);
    trySeed(width - 1, y);
  }

  while (queue.length > 0) {
    const idx = queue.pop();
    const x = idx % width;
    const y = Math.floor(idx / width);
    const pi = idx * channels;
    data[pi + 3] = 0;

    const neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
      const ni = ny * width + nx;
      if (visited[ni]) continue;
      const npi = ni * channels;
      if (isBackgroundBlack(data, npi, channels)) {
        visited[ni] = 1;
        queue.push(ni);
      }
    }
  }

  return { pipeline: sharp(data, { raw: { width, height, channels } }).png(), data, info: { width, height, channels } };
}

function toDarkVariant(data, channels) {
  const out = Buffer.from(data);

  for (let i = 0; i < out.length; i += channels) {
    const a = out[i + 3];
    if (a === 0) continue;

    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const isCyan = b > 110 && b > r + 25 && g > r + 10;
    const isLight = r > 185 && g > 185 && b > 185;

    if (isCyan || isLight) continue;

    if (r < 95 && g < 95 && b < 95) {
      out[i] = 244;
      out[i + 1] = 244;
      out[i + 2] = 245;
    } else if (r < 170 && g < 170 && b < 170) {
      out[i] = Math.min(255, r + 90);
      out[i + 1] = Math.min(255, g + 90);
      out[i + 2] = Math.min(255, b + 90);
    }
  }

  return out;
}

async function main() {
  const { pipeline, data, info } = await removeBlackBackground(SOURCE);

  await pipeline.clone().toFile(LOGO_OUT);
  console.log("Logo:", LOGO_OUT);

  const darkData = toDarkVariant(data, info.channels);
  await sharp(darkData, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toFile(LOGO_DARK_OUT);
  console.log("Logo dark:", LOGO_DARK_OUT);

  const meta = await sharp(SOURCE).metadata();
  const cropWidth = Math.round(meta.width * 0.38);
  const cropHeight = Math.round(meta.height * 0.72);
  const left = Math.round(meta.width * 0.04);
  const top = Math.round(meta.height * 0.14);

  const { pipeline: icon } = await removeBlackBackground(SOURCE);
  await icon
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toFile(ICON_OUT);

  console.log("Favicon:", ICON_OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
