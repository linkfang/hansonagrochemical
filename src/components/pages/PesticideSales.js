import plantBG from "../../assets/bg/plants.svg";
import { PESTICIDE_SALES } from "../../constants/language";

export default function PesticideSales({ language }) {
  const renderDistributors = PESTICIDE_SALES.distributors.content[language].map((item) => (
    <p className="listItem margin-0">{item}</p>
  ));

  const renderListItems = (data) => data.content[language].map((item) => <p className="listItem margin-0">{item}</p>);
  return (
    <div className="pageCtn">
      <img className="pageBG" src={plantBG} alt="Plant background" />
      <div className="row">
        <div className="titleBorderTop mr-80">
          <div className="colorRectangle"></div>
          {PESTICIDE_SALES.distributors.title[language]}
        </div>
        <div className="listCtn">{renderListItems(PESTICIDE_SALES.distributors)}</div>
      </div>

      <div className="row mt-100">
        <div className="titleBorderTop mr-80">
          <div className="colorRectangle"></div>
          {PESTICIDE_SALES.partnersFromChina.title[language]}
        </div>
        <div className="listCtn">{renderListItems(PESTICIDE_SALES.partnersFromChina)}</div>
      </div>
    </div>
  );
}
