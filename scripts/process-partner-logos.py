"""Normalize partner logos: clean background, uniform canvas, consistent output size."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps

ASSETS = Path(r"C:\Users\juven\.cursor\projects\e-PROJECTS-IGNITEX-ignitex\assets")
OUT_DIR = Path(r"e:\PROJECTS\IGNITEX\ignitex\public\images\partenaires")

# Source glob patterns -> output filename
SOURCES: list[tuple[str, str]] = [
    ("*148e825c*", "report-ccb.png"),
    ("*ChatGPT_Image_22_avr*", "ccb-connect.png"),
    ("*CCB_LOGO2_NEW*", "ccb-communaute.png"),
    ("*WhatsApp_Image_2026-06-11_at_18.36*", "harmathon-congo.png"),
    ("*WhatsApp_Image_2026-06-11_at_18.37*", "loatekombo.png"),
    ("*soleil-bb8d6e9c*", "soleil-d-afrik.png"),
]

CANVAS_W, CANVAS_H = 480, 300
PADDING = 28
BG = (255, 255, 255, 255)


def find_asset(pattern: str) -> Path:
    matches = sorted(ASSETS.glob(pattern))
    if not matches:
        raise FileNotFoundError(f"No asset for pattern: {pattern}")
    return matches[-1]


def detect_bg_mode(img: Image.Image) -> str:
    """Return 'light' or 'dark' based on corner pixels."""
    rgb = img.convert("RGB")
    w, h = rgb.size
    corners = [
        rgb.getpixel((2, 2)),
        rgb.getpixel((w - 3, 2)),
        rgb.getpixel((2, h - 3)),
        rgb.getpixel((w - 3, h - 3)),
    ]
    avg = sum(sum(c) for c in corners) / (len(corners) * 3)
    return "dark" if avg < 110 else "light"


def remove_background(img: Image.Image) -> Image.Image:
    """Remove near-uniform light or dark background, return RGBA."""
    rgba = img.convert("RGBA")
    mode = detect_bg_mode(rgba)

    if mode == "light":
        # Flood from corners: replace near-white with transparent
        data = rgba.load()
        w, h = rgba.size
        visited = set()
        stack = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]

        def is_bg(r: int, g: int, b: int, a: int) -> bool:
            if a < 20:
                return True
            return r > 235 and g > 235 and b > 235

        while stack:
            x, y = stack.pop()
            if (x, y) in visited or x < 0 or y < 0 or x >= w or y >= h:
                continue
            visited.add((x, y))
            r, g, b, a = data[x, y]
            if not is_bg(r, g, b, a):
                continue
            data[x, y] = (r, g, b, 0)
            stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    else:
        # Dark background: make near-black transparent
        data = rgba.load()
        w, h = rgba.size
        visited = set()
        stack = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]

        def is_bg(r: int, g: int, b: int, a: int) -> bool:
            if a < 20:
                return True
            return r < 45 and g < 45 and b < 45

        while stack:
            x, y = stack.pop()
            if (x, y) in visited or x < 0 or y < 0 or x >= w or y >= h:
                continue
            visited.add((x, y))
            r, g, b, a = data[x, y]
            if not is_bg(r, g, b, a):
                continue
            data[x, y] = (r, g, b, 0)
            stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    return rgba


def trim_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img


def upscale_if_small(img: Image.Image, min_side: int = 180, source_min: int | None = None) -> Image.Image:
    w, h = img.size
    short = min(w, h)
    target = min_side
    if source_min is not None and source_min < 280:
        target = max(min_side, 320)
    if short >= target:
        return img
    scale = target / short
    nw, nh = int(w * scale), int(h * scale)
    upscaled = img.resize((nw, nh), Image.Resampling.LANCZOS)
    if source_min is not None and source_min < 280:
        upscaled = ImageEnhance.Sharpness(upscaled).enhance(1.6)
        upscaled = upscaled.filter(
            ImageFilter.UnsharpMask(radius=1.2, percent=140, threshold=3)
        )
    return upscaled


def fit_on_canvas(content: Image.Image, source_min: int) -> Image.Image:
    content = trim_transparent(content)
    content = upscale_if_small(content, source_min=source_min)

    avail_w = CANVAS_W - PADDING * 2
    avail_h = CANVAS_H - PADDING * 2
    content.thumbnail((avail_w, avail_h), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), BG)
    x = (CANVAS_W - content.width) // 2
    y = (CANVAS_H - content.height) // 2
    canvas.paste(content, (x, y), content)
    return canvas.convert("RGBA")


def fit_on_canvas_branded(content: Image.Image, source_min: int) -> Image.Image:
    """Conserve le fond de marque ; cadre blanc uniforme autour."""
    content = upscale_if_small(content.convert("RGBA"), source_min=source_min)
    avail_w = CANVAS_W - PADDING * 2
    avail_h = CANVAS_H - PADDING * 2
    content.thumbnail((avail_w, avail_h), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), BG)
    x = (CANVAS_W - content.width) // 2
    y = (CANVAS_H - content.height) // 2
    canvas.paste(content, (x, y), content if content.mode == "RGBA" else None)
    return canvas.convert("RGBA")


def process_one(pattern: str, out_name: str) -> None:
    src = find_asset(pattern)
    print(f"Processing {src.name} -> {out_name}")

    with Image.open(src) as raw:
        print(f"  source: {raw.size} {raw.mode}")
        source_min = min(raw.size)

        # Logos avec fond de marque intégré (ex. Soleil d'Afrik) : pas de détourage
        if out_name == "soleil-d-afrik.png":
            rgba = raw.convert("RGBA")
            result = fit_on_canvas_branded(rgba, source_min)
        else:
            cleaned = remove_background(raw)
            result = fit_on_canvas(cleaned, source_min)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / out_name
    result.save(out_path, "PNG", optimize=True)
    print(f"  saved: {out_path} ({result.size})")


def main() -> None:
    for pattern, out_name in SOURCES:
        process_one(pattern, out_name)
    print("Done.")


if __name__ == "__main__":
    main()
