type IgniteXGlobeSvgProps = {
  className?: string;
};

type City = {
  id: string;
  name: string;
  lon: number;
  lat: number;
  hub?: boolean;
  label?: string;
};

const CX = 260;
const CY = 260;
const R = 198;

const CITIES: City[] = [
  { id: "brazzaville", name: "Brazzaville", lon: 15.28, lat: -4.26, hub: true },
  { id: "kinshasa", name: "Kinshasa", lon: 15.31, lat: -4.32 },
  { id: "douala", name: "Douala", lon: 9.7, lat: 4.05 },
  { id: "rabat", name: "Rabat", lon: -6.83, lat: 34.02, label: "Maroc" },
  { id: "paris", name: "Paris", lon: 2.35, lat: 48.86, label: "France" },
  { id: "london", name: "Londres", lon: -0.13, lat: 51.51, label: "R.-U." },
];

/** Paires connectées — hub central : Brazzaville */
const CONNECTIONS: [string, string][] = [
  ["brazzaville", "kinshasa"],
  ["brazzaville", "douala"],
  ["brazzaville", "rabat"],
  ["brazzaville", "paris"],
  ["brazzaville", "london"],
  ["douala", "paris"],
  ["rabat", "paris"],
  ["paris", "london"],
  ["douala", "kinshasa"],
];

function geoToSvg(lon: number, lat: number) {
  return {
    x: CX + (lon / 180) * R * 0.93,
    y: CY - (lat / 90) * R * 0.89,
  };
}

function getCity(id: string) {
  const city = CITIES.find((c) => c.id === id);
  if (!city) throw new Error(`Unknown city: ${id}`);
  return { ...city, ...geoToSvg(city.lon, city.lat) };
}

function arcPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  bend = 0.28
) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  const ctrlX = mx - (dy / dist) * dist * bend;
  const ctrlY = my + (dx / dist) * dist * bend;
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

/** Globe terrestre stylisé : continents détaillés, réseau IgniteX™ */
export function IgniteXGlobeSvg({ className = "" }: IgniteXGlobeSvgProps) {
  const cityMap = Object.fromEntries(CITIES.map((c) => [c.id, getCity(c.id)]));

  return (
    <div
      className={`globe-svg-wrap ${className}`}
      role="img"
      aria-label="Globe terrestre IgniteX : réseau connectant Brazzaville, Kinshasa, Douala, le Maroc, la France et le Royaume-Uni"
    >
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-auto w-full max-w-xl"
      >
        <defs>
          <clipPath id="ix-globe-clip">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>

          <radialGradient id="ix-ocean" cx="38%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#0e5a82" />
            <stop offset="45%" stopColor="#083552" />
            <stop offset="100%" stopColor="#020a12" />
          </radialGradient>

          <radialGradient id="ix-sphere-light" cx="28%" cy="22%" r="58%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#7dd3fc" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ix-atmosphere" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="#00aeef" stopOpacity="0" />
            <stop offset="92%" stopColor="#4dcaf1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00aeef" stopOpacity="0.35" />
          </radialGradient>

          <linearGradient id="ix-land-af" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d6b55" />
            <stop offset="100%" stopColor="#1a4538" />
          </linearGradient>

          <linearGradient id="ix-land-eu" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a6278" />
            <stop offset="100%" stopColor="#2f4050" />
          </linearGradient>

          <linearGradient id="ix-land-am" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d6b58" />
            <stop offset="100%" stopColor="#2a4a3e" />
          </linearGradient>

          <linearGradient id="ix-arc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#f5c842" />
            <stop offset="100%" stopColor="#e8a820" />
          </linearGradient>

          <linearGradient id="ix-arc-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4dcaf1" />
            <stop offset="100%" stopColor="#00aeef" />
          </linearGradient>

          <filter id="ix-glow-gold" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ix-glow-blue" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ix-label-shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.55" />
          </filter>
        </defs>

        {/* Anneaux atmosphère */}
        <circle cx={CX} cy={CY} r={R + 14} stroke="#00aeef" strokeWidth="0.5" strokeOpacity="0.12" />
        <circle cx={CX} cy={CY} r={R + 8} stroke="#4dcaf1" strokeWidth="0.75" strokeOpacity="0.2" />
        <circle cx={CX} cy={CY} r={R + 2} stroke="url(#ix-arc-blue)" strokeWidth="1" strokeOpacity="0.35" />

        <circle cx={CX} cy={CY} r={R} fill="url(#ix-ocean)" />

        <g clipPath="url(#ix-globe-clip)">
          {/* Graticule */}
          <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.6">
            {[-60, -30, 0, 30, 60].map((lat) => {
              const y = CY - (lat / 90) * R * 0.89;
              const rx = Math.cos((lat * Math.PI) / 180) * R * 0.96;
              return (
                <ellipse
                  key={`lat-${lat}`}
                  cx={CX}
                  cy={y}
                  rx={rx}
                  ry={R * 0.045 + Math.abs(lat) * 0.01}
                  fill="none"
                />
              );
            })}
            {[-120, -90, -60, -30, 0, 30, 60, 90, 120].map((lon) => {
              const x = CX + (lon / 180) * R * 0.93;
              return <line key={`lon-${lon}`} x1={x} y1={CY - R} x2={x} y2={CY + R} />;
            })}
          </g>

          {/* ——— Continents ——— */}
          <g>
            {/* Amérique du Nord */}
            <path
              d="M 58 108 L 88 78 L 128 68 L 168 72 L 208 88 L 238 108 L 252 138 L 248 168 L 228 198 L 198 218 L 158 228 L 118 218 L 88 198 L 68 168 L 58 138 Z"
              fill="url(#ix-land-am)"
              stroke="#5a8a72"
              strokeWidth="1.2"
              strokeOpacity="0.45"
            />
            {/* Amérique du Sud */}
            <path
              d="M 168 248 L 198 238 L 218 258 L 228 298 L 222 348 L 202 388 L 178 408 L 158 388 L 148 338 L 152 288 L 162 258 Z"
              fill="#2a5244"
              stroke="#4a7560"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
            {/* Europe */}
            <path
              d="M 248 118 L 278 108 L 308 112 L 328 128 L 338 148 L 332 168 L 308 178 L 278 172 L 252 158 L 242 138 Z"
              fill="url(#ix-land-eu)"
              stroke="#6a8298"
              strokeWidth="1.2"
              strokeOpacity="0.45"
            />
            {/* Royaume-Uni / îles */}
            <path
              d="M 238 128 L 246 122 L 252 128 L 248 138 L 240 140 Z"
              fill="#556878"
              stroke="#7a92a8"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />
            {/* Asie */}
            <path
              d="M 338 98 L 388 82 L 448 88 L 498 108 L 518 138 L 512 178 L 488 208 L 448 228 L 398 222 L 358 198 L 338 168 L 332 128 Z"
              fill="#3a4848"
              stroke="#5a6868"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
            {/* Moyen-Orient */}
            <path
              d="M 328 148 L 358 138 L 378 148 L 382 168 L 368 188 L 342 192 L 328 172 Z"
              fill="#4a4038"
              stroke="#6a6058"
              strokeWidth="1"
              strokeOpacity="0.35"
            />
            {/* Océanie */}
            <path
              d="M 428 298 L 458 288 L 478 302 L 482 328 L 462 348 L 432 342 L 418 318 Z"
              fill="#2a4840"
              stroke="#4a6860"
              strokeWidth="1"
              strokeOpacity="0.35"
            />

            {/* Afrique — masse continentale */}
            <path
              d="M 248 178 L 278 168 L 308 172 L 338 188 L 358 218 L 368 258 L 362 298 L 348 338 L 322 368 L 288 382 L 258 372 L 242 338 L 238 298 L 242 258 L 248 218 Z"
              fill="url(#ix-land-af)"
              stroke="#4d9a82"
              strokeWidth="1.5"
              strokeOpacity="0.55"
            />

            {/* Pays africains — teintes drapeau (style carte référence) */}
            {/* Maroc */}
            <path
              d="M 228 188 L 252 182 L 258 198 L 252 212 L 232 210 L 224 198 Z"
              fill="#c1272d"
              fillOpacity="0.55"
              stroke="#e04050"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            {/* Sénégal / côte ouest */}
            <path
              d="M 218 218 L 238 212 L 242 228 L 232 242 L 216 238 Z"
              fill="#00853f"
              fillOpacity="0.4"
              stroke="#00a050"
              strokeWidth="0.6"
              strokeOpacity="0.35"
            />
            {/* Cameroun (Douala) */}
            <path
              d="M 252 228 L 272 222 L 278 238 L 268 252 L 252 248 Z"
              fill="#007a5e"
              fillOpacity="0.5"
              stroke="#fcd116"
              strokeWidth="0.8"
              strokeOpacity="0.45"
            />
            {/* Congo Brazzaville */}
            <path
              d="M 268 268 L 284 262 L 290 278 L 280 292 L 266 288 Z"
              fill="#009543"
              fillOpacity="0.55"
              stroke="#fbde4a"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />
            {/* RDC Kinshasa */}
            <path
              d="M 284 262 L 302 258 L 308 278 L 298 298 L 280 292 L 276 272 Z"
              fill="#007fff"
              fillOpacity="0.45"
              stroke="#fcd116"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            {/* Gabon */}
            <path
              d="M 268 292 L 282 288 L 286 302 L 274 312 L 262 306 Z"
              fill="#009e60"
              fillOpacity="0.4"
              stroke="#3a9a78"
              strokeWidth="0.6"
              strokeOpacity="0.35"
            />

            {/* Frontières intérieures Afrique */}
            <g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.12" fill="none">
              <path d="M 248 218 L 358 218" />
              <path d="M 242 258 L 362 258" />
              <path d="M 238 298 L 348 298" />
              <path d="M 258 178 L 268 382" />
              <path d="M 298 172 L 308 372" />
            </g>
          </g>

          {/* Labels continents */}
          <g
            fontFamily="var(--font-outfit), system-ui, sans-serif"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.18em"
            fill="#ffffff"
            fillOpacity="0.18"
          >
            <text x="288" y="248" textAnchor="middle">
              AFRIQUE
            </text>
            <text x="288" y="142" textAnchor="middle">
              EUROPE
            </text>
            <text x="148" y="168" textAnchor="middle">
              AMÉRIQUES
            </text>
            <text x="428" y="168" textAnchor="middle">
              ASIE
            </text>
          </g>

          {/* Lumière sphère */}
          <circle cx={CX} cy={CY} r={R} fill="url(#ix-sphere-light)" />

          {/* ——— Réseau de connexion ——— */}
          <g fill="none" strokeLinecap="round">
          {CONNECTIONS.map(([fromId, toId], i) => {
            const from = cityMap[fromId];
            const to = cityMap[toId];
            const isHub = fromId === "brazzaville" || toId === "brazzaville";
            const isLocal =
              ["brazzaville", "kinshasa", "douala"].includes(fromId) &&
              ["brazzaville", "kinshasa", "douala"].includes(toId);
            const path = arcPath(from, to, isLocal ? 0.12 : 0.32);
            const stroke = isHub && !isLocal ? "url(#ix-arc-gold)" : "url(#ix-arc-blue)";
            const width = isLocal ? 1.2 : isHub ? 2.2 : 1.5;
            const opacity = isLocal ? 0.55 : isHub ? 0.92 : 0.72;

            return (
              <g key={`${fromId}-${toId}`}>
                <path
                  d={path}
                  stroke={stroke}
                  strokeWidth={width + 2}
                  strokeOpacity={opacity * 0.25}
                  filter="url(#ix-glow-blue)"
                />
                <path
                  d={path}
                  stroke={stroke}
                  strokeWidth={width}
                  strokeOpacity={opacity}
                  className="globe-line-flow"
                  style={{ animationDelay: `${i * 0.35}s` }}
                  strokeDasharray={isLocal ? "4 6" : "8 10"}
                />
              </g>
            );
          })}
        </g>

        {/* Nœuds */}
        <g filter="url(#ix-glow-blue)">
          {CITIES.map((city) => {
            const pos = cityMap[city.id];
            const r = city.hub ? 7 : city.id === "kinshasa" ? 5 : 4.5;
            const fill = city.hub ? "#f5c842" : "#4dcaf1";
            const offsetX = city.id === "kinshasa" ? 8 : 0;
            const offsetY = city.id === "kinshasa" ? 6 : 0;

            return (
              <g key={city.id} transform={`translate(${offsetX} ${offsetY})`}>
                {city.hub && (
                  <>
                    <circle
                      className="globe-node-ring"
                      cx={pos.x - offsetX}
                      cy={pos.y - offsetY}
                      r={14}
                      stroke="#f5c842"
                      strokeWidth="1"
                      fill="none"
                      strokeOpacity="0.35"
                    />
                    <circle
                      className="globe-node-ring globe-node-ring--delay"
                      cx={pos.x - offsetX}
                      cy={pos.y - offsetY}
                      r={20}
                      stroke="#f5c842"
                      strokeWidth="0.75"
                      fill="none"
                      strokeOpacity="0.2"
                    />
                  </>
                )}
                <circle
                  className={city.hub ? "globe-node-pulse" : undefined}
                  cx={pos.x - offsetX}
                  cy={pos.y - offsetY}
                  r={r}
                  fill={fill}
                  filter={city.hub ? "url(#ix-glow-gold)" : undefined}
                />
                <circle
                  cx={pos.x - offsetX}
                  cy={pos.y - offsetY}
                  r={r * 0.35}
                  fill="#ffffff"
                  fillOpacity="0.85"
                />
              </g>
            );
          })}
        </g>

        {/* Labels villes */}
        <g
          fontFamily="var(--font-outfit), system-ui, sans-serif"
          fill="#ffffff"
          filter="url(#ix-label-shadow)"
        >
          {CITIES.map((city) => {
            const pos = cityMap[city.id];
            const offsetX = city.id === "kinshasa" ? 8 : 0;
            const offsetY = city.id === "kinshasa" ? 6 : 0;
            const x = pos.x + offsetX;
            const y = pos.y + offsetY;
            const isHub = city.hub;
            const isLeft = city.id === "douala" || city.id === "rabat";
            const isRight = city.id === "kinshasa";

            return (
              <g key={`label-${city.id}`}>
                <text
                  x={x + (isLeft ? -10 : isRight ? 10 : 0)}
                  y={y + (isHub ? 22 : city.id === "paris" || city.id === "london" ? -10 : 16)}
                  textAnchor={isLeft ? "end" : isRight ? "start" : "middle"}
                  fontSize={isHub ? 12 : 10.5}
                  fontWeight={isHub ? 800 : 600}
                  fill={isHub ? "#fde68a" : "#e2f4fc"}
                >
                  {city.name}
                </text>
                {city.label && (
                  <text
                    x={x + (isLeft ? -10 : 0)}
                    y={y + (city.id === "paris" || city.id === "london" ? 4 : -6)}
                    textAnchor={isLeft ? "end" : "middle"}
                    fontSize="8.5"
                    fontWeight="500"
                    fill="#94a3b8"
                  >
                    {city.label}
                  </text>
                )}
              </g>
            );
          })}
        </g>
        </g>

        {/* Atmosphère finale */}
        <circle cx={CX} cy={CY} r={R} fill="url(#ix-atmosphere)" pointerEvents="none" />

        {/* Badge IgniteX */}
        <g transform="translate(408 412)">
          <circle r="30" fill="#041018" fillOpacity="0.92" stroke="#00aeef" strokeWidth="1.5" strokeOpacity="0.55" />
          <circle r="26" stroke="#f5c842" strokeWidth="0.5" strokeOpacity="0.35" fill="none" />
          <path d="M -2 -11 L 5 -11 L 11 1 L 5 13 L -2 13 L 3 1 Z" fill="#4dcaf1" />
          <text
            y="26"
            textAnchor="middle"
            fill="#e2f4fc"
            fontSize="9"
            fontWeight="700"
            fontFamily="var(--font-outfit), sans-serif"
            opacity="0.95"
          >
            IgniteX™
          </text>
        </g>
      </svg>
    </div>
  );
}
