import Button from "../../ui/Button";
import Section from "../../ui/Section";

function ShowcaseDemo({
  title = "",
  subtitle = "",
  titleHighlight = "",
  description = "",
  features = [],
  className = "",
  reverse = false,
  image = "",
}) {
  return (
    <Section className={className}>
      <div className={`flex flex-col items-center gap-12 lg:gap-16 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="flex w-full justify-center lg:basis-1/2 lg:shrink-0">
          <img
            src={image}
            alt={`${titleHighlight} preview`}
            className="h-auto w-full max-w-full rounded-xl border border-slate-100 object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-6 lg:basis-1/2">
          <p className="flex items-center gap-2 text-muted font-mono text-eyebrow font-normal uppercase">
            <span className="bg-brand h-2 w-2 shrink-0 rounded-full" />
            {titleHighlight}
          </p>

          <h2 className="text-ink font-sans text-xl font-bold md:text-2xl lg:text-4xl">
            {title}
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-ink font-sans text-lg font-semibold">
              {subtitle}
            </p>
            <p className="text-muted font-sans text-base font-normal md:text-lg">
              {description}
            </p>
          </div>

          <ul className="text-muted font-sans text-base font-normal md:text-lg">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <Button className="bg-brand text-white shadow-brand hover:bg-brand-dark transition-colors">
            Mehr erfahren
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default ShowcaseDemo;
