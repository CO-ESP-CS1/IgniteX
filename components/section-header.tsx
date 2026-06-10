type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className={`section-title ${label ? "mt-2" : ""}`}>{title}</h2>
      {description && (
        <p className={`section-desc ${label || title ? "mt-3" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
