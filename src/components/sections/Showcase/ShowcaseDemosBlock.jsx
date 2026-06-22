import ShowcaseCard from "./ShowcaseCard";
import { showcasesImages } from "./images";
import Section from "../../ui/Section";

const SHOWCASES = [
  {
    src: showcasesImages.cms,
    title: "SimplyHUB CMS",
    description:
      "Websites, Portale, Events & E-Learning per Drag & Drop — ohne eine Zeile Code.",
  },
  {
    src: showcasesImages.media,
    title: "SimplyHUB Media",
    description:
      "KI-gestützte Videobearbeitung mit Speech-to-Text und Transkription in 16 Sprachen.",
  },
  {
    src: showcasesImages.mam,
    title: "SimplyHUB MAM",
    description: "Medien & Rechte zentral verwalten — plattformübergreifend.",
  },
  {
    src: showcasesImages.redaktion,
    title: "SimplyHUB Redaktion",
    description:
      "Echtzeit-Logging & Metadaten für Live- und Reality-Produktionen.",
  },
  {
    src: showcasesImages.workflows,
    title: "SimplyHUB Workflows",
    description: "Prozesse automatisieren und Systeme per API verbinden.",
  },
];

function ShowcaseDemosBlock() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-6">
        <p className="inline-flex items-center gap-2 text-brand font-mono text-eyebrow font-normal uppercase text-center">
          <span className="h-2 w-2 bg-brand rounded-full shrink-0" />
          Entdecken Sie die SimplyHUB-Tools
        </p>

        <h2 className="text-ink font-sans sm:text-4xl md:text-large lg:text-display-md font-bold text-center">
          Für jedes Team das passende Modul.
        </h2>

        <p className="text-muted font-sans text-base md:text-body-lg font-normal text-center max-w-text">
          Einzeln nutzbar, zusammen ein System. Wählen Sie, was Sie brauchen —
          der Hub verbindet den Rest.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-areas:'module1_module1_module1_module2_module2_module2'_'module3_module3_module4_module4_module5_module5']">
          {SHOWCASES.map((module, index) => (
            <div
              key={module.title}
              className="w-full flex justify-center"
              style={{ gridArea: `module${index + 1}` }}
            >
              <ShowcaseCard {...module} className="max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ShowcaseDemosBlock;
