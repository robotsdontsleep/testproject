import HeroSection from "../sections/Hero/HeroSection";
import ShowcaseDemosBlock from "../sections/Showcase/ShowcaseDemosBlock";
import ShowcaseSections from "../sections/Showcase/ShowcaseSections";
import PartnersSection from "../sections/Partners/PartnersSection";
import WorkflowSection from "../sections/Workflow/WorkflowSection";
import BookingSection from "../sections/Booking/BookingSection";

function Main() {
  return (
    <main className="bg-ambient-glow flex w-full flex-col">
      <HeroSection />
      <PartnersSection />
      <ShowcaseDemosBlock />
      <ShowcaseSections />
      <WorkflowSection />
      <BookingSection />
    </main>
  );
}

export default Main;
