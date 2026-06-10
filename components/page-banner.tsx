type PageBannerProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageBanner({ label, title, description }: PageBannerProps) {
  return (
    <section className="relative w-full border-b border-border bg-surface pt-[calc(var(--header-height)+2.5rem)] pb-12 sm:pb-14">
      <div className="page-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative">
        <p className="section-label">{label}</p>
        <h1 className="display-title mt-3 max-w-3xl">{title}</h1>
        {description && (
          <p className="section-desc mt-4 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
