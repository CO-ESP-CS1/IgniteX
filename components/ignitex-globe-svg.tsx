type IgniteXGlobeSvgProps = {
  className?: string;
};

/** Globe terrestre stylisé : continents sobres, graticule, hubs IgniteX™ */
export function IgniteXGlobeSvg({ className = "" }: IgniteXGlobeSvgProps) {
  return (
    <div
      className={`globe-svg-wrap ${className}`}
      role="img"
      aria-label="Globe terrestre IgniteX : présence en Afrique, en Europe et déploiements cloud internationaux"
    >
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-auto w-full max-w-lg"
      >
        <defs>
          <clipPath id="ix-globe-clip">
            <circle cx="260" cy="260" r="198" />
          </clipPath>
          <radialGradient id="ix-ocean" cx="42%" cy="38%" r="68%">
            <stop offset="0%" stopColor="#0c4a6e" />
            <stop offset="55%" stopColor="#082f49" />
            <stop offset="100%" stopColor="#041018" />
          </radialGradient>
          <radialGradient id="ix-sphere-light" cx="32%" cy="28%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ix-arc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4dcaf1" />
            <stop offset="100%" stopColor="#00aeef" stopOpacity="0.45" />
          </linearGradient>
          <filter id="ix-node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Halo extérieur */}
        <circle
          cx="260"
          cy="260"
          r="210"
          stroke="url(#ix-arc-grad)"
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        <circle cx="260" cy="260" r="198" fill="url(#ix-ocean)" />

        <g clipPath="url(#ix-globe-clip)">
          {/* Graticule */}
          <g stroke="#ffffff" strokeOpacity="0.07" strokeWidth="0.75">
            {[-60, -30, 0, 30, 60].map((lat) => {
              const y = 260 + (lat / 90) * 175;
              return (
                <ellipse
                  key={`lat-${lat}`}
                  cx="260"
                  cy="260"
                  rx={Math.cos((lat * Math.PI) / 180) * 198}
                  ry={198 * 0.28}
                  transform={`translate(0 ${y - 260})`}
                  fill="none"
                />
              );
            })}
            {[-120, -90, -60, -30, 0, 30, 60, 90, 120].map((lon) => {
              const x = 260 + (lon / 180) * 198;
              return (
                <line key={`lon-${lon}`} x1={x} y1="62" x2={x} y2="458" />
              );
            })}
          </g>

          {/* Continents — projection équirectangulaire dans le cercle */}
          <g transform="translate(62 62) scale(0.396)">
            {/* Amérique du Nord */}
            <path
              d="M 72 88 L 118 62 L 168 58 L 210 72 L 248 98 L 262 128 L 248 168 L 218 198 L 178 212 L 138 205 L 98 188 L 72 158 L 62 122 Z"
              fill="#4a6274"
              fillOpacity="0.92"
              stroke="#6b8496"
              strokeWidth="2"
              strokeOpacity="0.5"
            />
            {/* Amérique du Sud */}
            <path
              d="M 168 228 L 198 218 L 218 238 L 228 278 L 218 328 L 192 368 L 168 382 L 148 352 L 142 298 L 152 248 Z"
              fill="#3f5f4a"
              fillOpacity="0.9"
              stroke="#5a7d64"
              strokeWidth="2"
              strokeOpacity="0.45"
            />
            {/* Europe */}
            <path
              d="M 268 98 L 298 88 L 328 92 L 348 108 L 352 128 L 338 148 L 312 158 L 282 152 L 262 132 Z"
              fill="#5c6678"
              fillOpacity="0.92"
              stroke="#7a8496"
              strokeWidth="2"
              strokeOpacity="0.45"
            />
            {/* Afrique */}
            <path
              d="M 278 168 L 312 158 L 342 168 L 358 198 L 362 248 L 352 298 L 328 338 L 298 358 L 272 348 L 258 308 L 262 258 L 268 198 Z"
              fill="#2f6b5c"
              fillOpacity="0.95"
              stroke="#4d8f7c"
              strokeWidth="2.5"
              strokeOpacity="0.55"
            />
            {/* Moyen-Orient / Asie occidentale */}
            <path
              d="M 352 128 L 388 118 L 418 128 L 432 158 L 422 188 L 392 198 L 362 188 L 352 158 Z"
              fill="#6b5d52"
              fillOpacity="0.88"
              stroke="#8a7c70"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            {/* Asie */}
            <path
              d="M 388 108 L 458 88 L 528 98 L 578 128 L 598 168 L 588 218 L 548 248 L 498 258 L 448 238 L 408 208 L 388 168 Z"
              fill="#5a5048"
              fillOpacity="0.9"
              stroke="#756a60"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
            {/* Océanie */}
            <path
              d="M 498 298 L 538 288 L 568 308 L 572 338 L 548 358 L 512 352 L 492 328 Z"
              fill="#4a6358"
              fillOpacity="0.85"
              stroke="#628078"
              strokeWidth="2"
              strokeOpacity="0.4"
            />
          </g>

          {/* Lumière sphère */}
          <circle cx="260" cy="260" r="198" fill="url(#ix-sphere-light)" />
        </g>

        {/* Arcs de connexion (au-dessus du globe) */}
        <g stroke="url(#ix-arc-grad)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M 198 312 Q 230 220 302 198" />
          <path d="M 198 312 Q 160 240 128 208" />
          <path d="M 302 198 Q 360 160 388 148" />
          <path d="M 198 312 Q 248 280 278 268" />
        </g>

        {/* Nœuds hubs */}
        <g filter="url(#ix-node-glow)">
          <circle className="globe-node-pulse" cx="198" cy="312" r="5.5" fill="#00aeef" />
          <circle cx="302" cy="198" r="4.5" fill="#4dcaf1" />
          <circle cx="128" cy="208" r="4" fill="#4dcaf1" />
          <circle cx="388" cy="148" r="4" fill="#38bdf8" />
          <circle cx="278" cy="268" r="3.5" fill="#007bab" />
        </g>

        {/* Labels */}
        <g fontFamily="var(--font-outfit), system-ui, sans-serif" fill="currentColor">
          <text x="198" y="336" textAnchor="middle" fontSize="11" fontWeight="700" opacity="0.95">
            Brazzaville
          </text>
          <text x="302" y="188" textAnchor="middle" fontSize="10" fontWeight="600" opacity="0.8">
            Kinshasa
          </text>
          <text x="128" y="198" textAnchor="end" fontSize="10" fontWeight="600" opacity="0.8">
            Paris
          </text>
          <text x="388" y="138" textAnchor="start" fontSize="10" fontWeight="600" opacity="0.75">
            Cloud
          </text>
          <text x="278" y="286" textAnchor="middle" fontSize="9.5" opacity="0.7">
            Douala
          </text>
        </g>

        {/* Badge IgniteX */}
        <g transform="translate(400 400)">
          <circle r="28" fill="#082f49" stroke="#00aeef" strokeWidth="1.5" strokeOpacity="0.6" />
          <path
            d="M -2 -10 L 4 -10 L 10 2 L 4 14 L -2 14 L 2 2 Z"
            fill="#4dcaf1"
          />
          <text
            y="24"
            textAnchor="middle"
            fill="currentColor"
            fontSize="9"
            fontWeight="700"
            fontFamily="var(--font-outfit), sans-serif"
            opacity="0.9"
          >
            IgniteX™
          </text>
        </g>
      </svg>
    </div>
  );
}
