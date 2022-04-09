import plantBG from "../../assets/bg/plants.svg";
import { PESTICIDE_SALES } from "../../constants/language";
import pdfIcon from "../../assets/icons/file-earmark-pdf.svg";

export default function PesticideSales({ language }) {
  const renderListItems = (data) =>
    data.content[language].map((item) => {
      if (item.type === "url") {
        return (
          <a
            className="listItem margin-0"
            key={item.name}
            href={require(`../../assets/files/pdf/${item.url}`)}
            target="_blank"
          >
            <img className="pdfIcon" src={pdfIcon} alt="PDF icon" />
            {item.name}
          </a>
        );
      }
      return (
        <p className="listItem margin-0" key={item.name}>
          {item.name}
        </p>
      );
    });

  return (
    <>
      <div className="pageBG"></div>

      <div className="pageCtn">
        <div className="row">
          <div className="titleBorderTop">
            <div className="colorRectangle"></div>
            {PESTICIDE_SALES.distributors.title[language]}
          </div>
          <div className="listCtn">{renderListItems(PESTICIDE_SALES.distributors)}</div>
        </div>

        <div className="row mt-100">
          <div className="titleBorderTop">
            <div className="colorRectangle"></div>
            {PESTICIDE_SALES.partnersFromChina.title[language]}
          </div>
          <div className="listCtn">{renderListItems(PESTICIDE_SALES.partnersFromChina)}</div>
        </div>

        <div className="row mt-100">
          <div className="titleBorderTop">
            <div className="colorRectangle"></div>
            {PESTICIDE_SALES.distributedProducts.title[language]}
          </div>
          <div className="listCtn">{renderListItems(PESTICIDE_SALES.distributedProducts)}</div>
        </div>
      </div>
    </>
  );
}
