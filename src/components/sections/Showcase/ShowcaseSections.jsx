import ShowcaseDemo from "./ShowcaseDemo";
import { showcaseSections } from "./showcaseData";

function ShowcaseSections() {
  return (
    <>
      {showcaseSections.map((section) => (
        <ShowcaseDemo key={section.titleHighlight} {...section} />
      ))}
    </>
  );
}

export default ShowcaseSections;
