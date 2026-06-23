function WorkflowCard({ step, title, description }) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-custom border border-slate-100 bg-white px-6 py-7 md:w-workflow-card">
      <div className="flex h-9 w-9 items-center justify-center rounded-custom border bg-brand text-white font-sans text-sm">
        {step}
      </div>
      <h2 className="text-ink font-sans text-card-title font-semibold">
        {title}
      </h2>
      <p className="text-muted font-sans text-sm font-normal">
        {description}
      </p>
    </div>
  );
}

export default WorkflowCard;
