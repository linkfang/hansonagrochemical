import { MARKET_SURVEY, PESTICIDE_SALES } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function MarketSurvey({ language }) {
  return (
    <div className="pageCtn">
      <div className="pageBG"></div>
      <ListSection
        title={MARKET_SURVEY.title[language]}
        description={MARKET_SURVEY.description[language]}
        items={MARKET_SURVEY}
        language={language}
      />
    </div>
  );
}
