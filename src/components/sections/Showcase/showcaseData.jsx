import { showcasesImages } from "./images";

export const showcaseSections = [
  {
    title: (
      <span className="lg:whitespace-nowrap">
        Erstellen war noch nie so{" "}
        <span className="bg-brand-gradient bg-clip-text text-transparent">
          einfach
        </span>
        .
      </span>
    ),
    subtitle: "Websites, Landingpages & Events per Drag & Drop.",
    titleHighlight: "SimplyHUB CMS",
    description:
      "Gestalten Sie direkt im Browser — ohne Programmierkenntnisse. Module ziehen, Layouts live anpassen, mit einem Klick veröffentlichen. Vom einfachen Landingpage-Builder bis zum interaktiven 3D-Event.",
    features: [
      "Drag-&-Drop-WebBuilder",
      "Events in 2D & 3D",
      "Ein-Klick-Veröffentlichung",
    ],
    className: "bg-surface",
    image: showcasesImages.cms,
  },
  {
    title: (
      <>
        KI-Schnitt, der die
        <br className="hidden lg:block" />
        <span className="bg-brand-gradient bg-clip-text text-transparent">
          Sprache versteht
        </span>
        .
      </>
    ),
    subtitle: "Speech-to-Text in 16 Sprachen — automatisch.",
    titleHighlight: "SimplyHUB Media",
    description:
      "SimplyHUB Media wandelt Sprache in Echtzeit in Text um: präzise, mehrsprachig und direkt editierbar. Raw-Cut, Transkription und Export nach Avid, Premiere und DaVinci in einem Workflow.",
    features: [
      "Speech-to-Text & Untertitel",
      "Raw-Cut-Editor",
      "Export: AAF · ALE · SRT",
    ],
    reverse: true,
    image: showcasesImages.media,
  },
  {
    title: (
      <>
        Alle Medien. Ein{" "}
        <span className="bg-brand-gradient bg-clip-text text-transparent">
          Ort
        </span>
        .
      </>
    ),
    subtitle: "Medienmanagement mit Rechten & Versionen.",
    titleHighlight: "SimplyHUB MAM",
    description:
      "Organisieren Sie digitale Assets effizient, sichern Sie Versionen und behalten Sie Kontrolle über alle Beteiligten. Inklusive Avid-Integration und granularer Zugriffsrechte — für Teams jeder Größe.",
    features: [
      "Rechte- & Versionsverwaltung",
      "Avid-Integration",
      "Granulare Zugriffe",
    ],
    className: "bg-surface",
    image: showcasesImages.mam,
  },
];
