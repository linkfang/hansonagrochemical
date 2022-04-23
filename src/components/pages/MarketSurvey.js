import { useEffect } from "react";
import { MARKET_SURVEY } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function MarketSurvey({ language, setBannerImg }) {
  useEffect(() => {
    setBannerImg("resources");
  }, [setBannerImg]);

  return (
    <div className="pageCtn">
      <div className="pageBGResources"></div>
      <ListSection
        title={MARKET_SURVEY.title[language]}
        description={MARKET_SURVEY.description[language]}
        items={MARKET_SURVEY}
        language={language}
      />
    </div>
  );
}
