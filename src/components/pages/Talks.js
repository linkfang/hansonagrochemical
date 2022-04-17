import { TALKS } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function Talks({language}) {
  return (
    <div className="pageCtn">
      <div className="pageBG"></div>
      <ListSection
        title={TALKS.title[language]}
        description={TALKS.description[language]}
        items={TALKS}
        language={language}
      />
    </div>
  );
}
