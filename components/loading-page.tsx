type LoadingPageProps = {
  className?: string;
};

const DOT_COUNT = 5;

export function LoadingPage({ className = "" }: LoadingPageProps) {
  return (
    <div
      className={`loading-page bg-ignitex-500 ${className}`}
      role="status"
      aria-live="polite"
      aria-label="Chargement en cours"
    >
      <div className="loading-page-inner">
        <p className="loading-page-brand text-left text-white">
          <span className="block text-[8px] font-medium uppercase tracking-[0.16em] text-white/75 sm:text-[9px]">
            Propulsé par
          </span>
          <span className="mt-1 block text-2xl font-medium tracking-[0.06em] sm:text-[1.75rem]">
            Ignite
            <span className="loading-page-x">X</span>™
          </span>
        </p>

        <div className="loading-dots" aria-hidden="true">
          {Array.from({ length: DOT_COUNT }, (_, index) => (
            <span
              key={index}
              className="loading-dot"
              style={{ animationDelay: `${index * 0.16}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
