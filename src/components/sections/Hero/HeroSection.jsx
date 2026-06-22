import video from "./video.png";
import Button from "../../ui/Button";
import Section from "../../ui/Section";
import Separator from "../../ui/Separator";
import ImageComment from "./ImageComment";
import MetricItem from "./MetricItem";

function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center lg:items-start w-full max-w-text gap-6  md:gap-8 text-center lg:text-left">
          <p className="inline-flex w-max justify-center items-center gap-2 rounded-full border border-slate-200 py-2 px-2 text-brand font-sans text-caption font-bold">
            Neu
            <span className="text-brand font-mono text-micro font-medium rounded-full border border-slate-200 py-2 px-2">
              SimplyHUB Suite 2026
            </span>
          </p>

          <h1 className="text-ink font-sans text-3xl sm:text-4xl md:text-large lg:text-large-lg font-bold">
            Ein Hub für alles, was Ihr{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Business
            </span>{" "}
            braucht.
          </h1>

          <p className="text-muted font-sans text-base md:text-body-lg font-normal">
            Von Medienmanagement über Websites bis CRM — SimplyHUB verbindet alle
            Prozesse in einer Plattform. Modular, schnell, ohne Reibung.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
            <Button className="bg-brand text-white shadow-brand hover:bg-brand-dark">
              Jetzt Demo buchen
            </Button>
            <Button className="border border-slate-200 text-ink hover:bg-slate-50">
              Tools entdecken
            </Button>
          </div>

          <div className="flex items-stretch gap-6">
            <MetricItem value="6" label="Module" />
            <Separator />
            <MetricItem value="15" label="Sprachen" />
            <Separator />
            <MetricItem value="1" label="Plattform" />
          </div>
        </div>

        <div className="w-full max-w-image shrink-0 relative">
          <img
            src={video}
            alt="video dashboard overview"
            className="rounded-xl w-full h-auto border border-slate-100"
          />
          <ImageComment
            title="CMS"
            description="Seite veröffentlicht"
            className="top-8 right-2 md:right-[-40px]"
          />
          <ImageComment
            title="Media"
            description="16 Sprachen · transkribiert"
            className="bottom-12 left-2 md:left-[-40px]"
          />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
