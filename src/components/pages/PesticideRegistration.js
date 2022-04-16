import { PESTICIDE_REGISTRATION } from "../../constants/language";
import ListCardSection from "../UI/ListCardSection";
import ListSection from "../UI/ListSection";
import plantVideo from "../../assets/videos/plant-video.mp4";
import pesticideInCanada from "../../assets/videos/pesticide-in-canada.mp4";

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
        {language === "zh" && (
          <>
            <div className="row mt-100">
              <div className="titleBorderTop">
                <div className="colorRectangle"></div>
                <h1>世界上, 排在前30位的植保化合物 (演讲片段)</h1>
              </div>
              <div className="listCtn">
                <video width="100%" controls>
                  <source src={plantVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="row mt-100">
              <div className="titleBorderTop">
                <div className="colorRectangle"></div>
                <h1>加拿大农药市场与中国农药出口</h1>
              </div>
              <div className="listCtn">
                <video width="100%" controls>
                  <source src={pesticideInCanada} type="video/mp4" />
                </video>
              </div>
            </div>
          </>
        )}

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
