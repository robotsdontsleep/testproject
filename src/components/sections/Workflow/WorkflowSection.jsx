import Section from "../../ui/Section";
import WorkflowCard from "./WorkflowCard";

const WORKFLOW = [
  {
    step: 1,
    title: "Erstellen",
    description: "Landingpage, Event oder Content-Kampagne im Hub anlegen.",
  },
  {
    step: 2,
    title: "Gestalten",
    description: "Mit dem WebBuilder das Design per Drag & Drop umsetzen.",
  },
  {
    step: 3,
    title: "Verknüpfen",
    description: "Media, MAM und Logger nahtlos integrieren.",
  },
  {
    step: 4,
    title: "Veröffentlichen",
    description: "Inhalte und Events live schalten — ohne Entwicklung.",
  },
];

function WorkflowSection() {
  return (
    <Section className="bg-section">
      <div className="flex flex-col items-center gap-6">
        <p className="inline-flex items-center gap-2 text-brand font-mono text-eyebrow font-normal uppercase text-center">
          <span className="h-2 w-2 bg-brand rounded-full shrink-0" />
          Von der Idee zur erlebbaren Plattform
        </p>
        <h2 className="text-ink font-sans text-2xl md:text-medium lg:text-display-md font-bold text-center">
          Ein Workflow, vier Schritte.
        </h2>
        <p className="text-muted font-sans text-base md:text-body-lg font-normal text-center max-w-text">
          Erstellung, Design und Ausspielung in einem Prozess — für schnellere
          Go-Lives und mehr Kreativität im Team.
        </p>

        <ul className="flex w-full flex-col justify-center gap-6 md:flex-row md:flex-wrap">
          {WORKFLOW.map((w) => (
            <li
              key={w.step}
              className="w-full md:w-auto"
            >
              <WorkflowCard {...w} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default WorkflowSection;
