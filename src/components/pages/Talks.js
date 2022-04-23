import { useEffect } from "react";
import { TALKS } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function Talks({ language, setBannerImg }) {
  useEffect(() => {
    setBannerImg("resources");
  }, [setBannerImg]);
  return (
    <div className="pageCtn">
      <div className="pageBGResources"></div>
      <ListSection
        title={TALKS.title[language]}
        description={TALKS.description[language]}
        items={TALKS}
        language={language}
      />
    </div>
  );
}
