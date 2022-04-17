import { NEWS } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function NewsAndInterview({ language }) {
  return (
    <div className="pageCtn">
      <div className="pageBGResources"></div>
      <ListSection
        title={NEWS.title[language]}
        description={NEWS.description[language]}
        items={NEWS}
        language={language}
      />
    </div>
  );
}
