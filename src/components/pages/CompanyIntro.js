import missionIcon from "../../assets/icons/bullseye.svg";
import visionIcon from "../../assets/icons/vision.svg";
import aboutIcon from "../../assets/icons/about.svg";
import { COMPANY_INTRO } from "../../constants/language";

export default function CompanyIntro({ language }) {
  return (
    <div className="pageCtn">
      <div className="row">
        <div className="card col-12">
          <img className="intro-icon" src={missionIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.mission.title[language]}</h1>
          <p className="margin-0">{COMPANY_INTRO.mission.content[language]}</p>
        </div>
        <div className="card col-12">
          <img className="intro-icon" src={visionIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.vision.title[language]}</h1>
          <p className="margin-0">{COMPANY_INTRO.vision.content[language]}</p>
        </div>
        <div className="card col-24">
          <img className="intro-icon" src={aboutIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.aboutHanson.title[language]}</h1>
          <p className="margin-0 mb-15">{COMPANY_INTRO.aboutHanson.content1[language]}</p>
          <p className="margin-0 mb-15">{COMPANY_INTRO.aboutHanson.content2[language]}</p>
          {COMPANY_INTRO.aboutHanson.content3[language] && (
            <p className="margin-0 mb-15">{COMPANY_INTRO.aboutHanson.content3[language]}</p>
          )}
          <p className="margin-0 mb-15">
            <strong>{COMPANY_INTRO.aboutHanson.content4[language]}</strong>
          </p>
          <p className="margin-0 mb-15">{COMPANY_INTRO.aboutHanson.content5[language]}</p>
        </div>
      </div>
    </div>
  );
}
