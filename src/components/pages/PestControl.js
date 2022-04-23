import { useEffect } from "react";
import { PEST_CONTROL } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function PestControl({ language, setBannerImg }) {
  useEffect(() => {
    setBannerImg("pestControl");
  }, [setBannerImg]);
  return (
    <div className="pageCtn">
      <div className="pageBG"></div>
      <ListSection title={PEST_CONTROL.title[language]} items={PEST_CONTROL} language={language} />
    </div>
  );
}
