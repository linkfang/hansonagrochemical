import { PESTICIDE_REGISTRATION } from "../../constants/language";
import ListCardSection from "../UI/ListCardSection";
import ListSection from "../UI/ListSection";

export default function PesticideRegistration({ language }) {
  return (
    <>
      <div className="pageBG"></div>
      <div className="pageCtn">
        <ListSection
          title={PESTICIDE_REGISTRATION.pesticidesPMRA.title[language]}
          description={PESTICIDE_REGISTRATION.pesticidesPMRA.description[language]}
          items={PESTICIDE_REGISTRATION.pesticidesPMRA}
          language={language}
        />
        {/* need to add new compoent/style for this section */}
        <ListCardSection
          title={PESTICIDE_REGISTRATION.promisingPesticides.title[language]}
          items={PESTICIDE_REGISTRATION.promisingPesticides.subSections}
          language={language}
          className="mt-100"
        />

        <ListSection
          className="mt-100"
          title={PESTICIDE_REGISTRATION.glpTechnicalPMRA.title[language]}
          items={PESTICIDE_REGISTRATION.glpTechnicalPMRA}
          language={language}
        />
        <ListSection
          className="mt-100"
          title={PESTICIDE_REGISTRATION.glpFormulatedPMRA.title[language]}
          items={PESTICIDE_REGISTRATION.glpFormulatedPMRA}
          language={language}
        />
      </div>
    </>
  );
}
