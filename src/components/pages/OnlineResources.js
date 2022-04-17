import { INFO_SOURCES } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function OnlineResources({ language }) {
  return (
    <div className="pageCtn">
      <div className="pageBGResources"></div>
      <ListSection
        title={INFO_SOURCES.productRegistration.title[language]}
        items={INFO_SOURCES.productRegistration}
        language={language}
      />
      <ListSection
        className="mt-100"
        title={INFO_SOURCES.cropProtectionMarket.title[language]}
        items={INFO_SOURCES.cropProtectionMarket}
        language={language}
      />
      <ListSection
        className="mt-100"
        title={INFO_SOURCES.resistanceManagement.title[language]}
        items={INFO_SOURCES.resistanceManagement}
        language={language}
      />
      <ListSection
        className="mt-100"
        title={INFO_SOURCES.pesticideIndustry.title[language]}
        items={INFO_SOURCES.pesticideIndustry}
        language={language}
      />
            <ListSection
        className="mt-100"
        title={INFO_SOURCES.pesticideResearch.title[language]}
        items={INFO_SOURCES.pesticideResearch}
        language={language}
      />
    </div>
  );
}
