function ShowcaseCard({ src, title, description, className = "" }) {
  return (
    <div
      className={`w-full max-w-image border border-slate-100 rounded-custom overflow-hidden bg-white ${className}`}
    >
      <img src={src} alt={title} className="w-full h-auto object-cover" />

      <div className="flex flex-col gap-3 p-5">
        <h3 className="inline-flex items-center gap-2 text-ink font-sans text-base font-semibold">
          <span className="h-2 w-2 bg-brand rounded-full shrink-0" />
          {title}
        </h3>
        <p className="text-muted font-sans text-sm font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ShowcaseCard;
