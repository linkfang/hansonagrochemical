import { useEffect } from "react";
import { PESTICIDE_SALES } from "../../constants/language";
import ListSection from "../UI/ListSection";

export default function PesticideSales({ language, setBannerImg }) {
  useEffect(() => {
    setBannerImg("pesticide");
  }, [setBannerImg]);

  return (
    <>
      <div className="pageBG"></div>

      <div className="pageCtn">
        <ListSection
          title={PESTICIDE_SALES.distributors.title[language]}
          items={PESTICIDE_SALES.distributors}
          language={language}
        />
        <ListSection
          title={PESTICIDE_SALES.partnersFromChina.title[language]}
          items={PESTICIDE_SALES.partnersFromChina}
          language={language}
          className="mt-100"
        />
        <ListSection
          title={PESTICIDE_SALES.distributedProducts.title[language]}
          items={PESTICIDE_SALES.distributedProducts}
          language={language}
          className="mt-100"
        />
        <div className="row mt-100">
          <p>{PESTICIDE_SALES.summary[language]}</p>
        </div>
      </div>
    </>
  );
}
