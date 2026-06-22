function ImageComment({ title = "", description = "", className = "" }) {
  return (
    <div
      className={`inline-flex justify-center items-center absolute gap-4 px-6 py-3 rounded-custom border border-hairline bg-white/90 shadow-elevated ${className}`}
    >
      <span className="h-3 w-3 bg-brand rounded-full" />
      <div>
        <p className="text-ink font-sans text-caption font-semibold">{title}</p>
        <p className="text-muted font-mono text-sm font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ImageComment;
