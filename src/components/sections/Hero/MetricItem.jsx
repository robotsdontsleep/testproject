function MetricItem({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-ink font-sans text-small font-bold">
        {value}
      </span>
      <span className="text-muted font-mono text-eyebrow font-light">
        {label}
      </span>
    </div>
  );
}

export default MetricItem;
