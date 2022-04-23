import { useEffect } from "react";
import { NEWS } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function NewsAndInterview({ language, setBannerImg }) {
  useEffect(() => {
    setBannerImg("resources");
  }, [setBannerImg]);
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
