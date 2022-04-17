import { PEST_CONTROL } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function PestControl({ language }) {
  return (
    <div className="pageCtn">
      <div className="pageBG"></div>
      <ListSection title={PEST_CONTROL.title[language]} items={PEST_CONTROL} language={language} />
    </div>
  );
}
