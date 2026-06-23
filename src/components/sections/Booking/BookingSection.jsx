import Button from "../../ui/Button";
import bg from "./background.png";
import Section from "../../ui/Section";

function BookingSection() {
  return (
    <Section className="relative overflow-hidden bg-brand text-white">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <p className="max-w-2xl font-sans text-heading-md md:text-heading-lg font-normal">
          Ein Hub. Alle Prozesse.
          <br />
          Unendliche Möglichkeiten.
        </p>
        <p className="text-white/85 font-sans text-sm font-normal leading-relaxed pt-4 pb-8">
          Erleben Sie, wie SimplyHUB Ihr Unternehmen smarter, schneller und
          effizienter macht.
        </p>
        <Button className="bg-white text-brand">
          Jetzt kostenlose Demo buchen
        </Button>
      </div>
    </Section>
  );
}

export default BookingSection;
