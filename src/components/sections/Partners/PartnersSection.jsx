import Section from "../../ui/Section";

const partners = [
  "neyroo",
  "EndemolShine",
  "Riot Games",
  "Henkel",
  "24/25",
  "RTL Studios",
  "AIM Solutions",
];

function PartnersSection() {
  return (
    <Section className="bg-surface">
      <div className="flex flex-col items-center gap-6">
        <p className="inline-flex items-center gap-2 text-brand font-mono text-eyebrow font-normal uppercase text-center">
          <span className="h-2 w-2 bg-brand rounded-full shrink-0" />
          Gemeinsam erfolgreich mit SimplyHUB
        </p>
        <h2 className="text-ink font-sans text-2xl md:text-medium font-bold text-center">
          Vertraut von führenden Produktionen & Marken.
        </h2>
        <ul className="flex flex-wrap justify-center md:justify-around gap-x-8 gap-y-4 w-full">
          {partners.map((partner) => (
            <li
              key={partner}
              className="text-gray-light font-sans text-lg md:text-partner font-extrabold"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default PartnersSection;
