export default function ListCardSection({ title, items, language, className }) {
  const rowClassName = className || "";

  const renderListCardItems = (data) =>
    data.content[language].map((item) => {
      return (
        <div key={item.title} className="listItem listItemCard">
          <p>
            <strong>{item.title}</strong>
          </p>
          <p className="mt-0 listItemCardContent">{item.content}</p>
        </div>
      );
    });

  const renderlistCardSections = items.map((item) => (
    <div key={item.title.en} className="cardSection mb-30">
      <p className="mt-0 mb-30 cardSectionTitle">
        <strong>{item.title[language]}</strong>
      </p>
      <div className="cardsCtn">{renderListCardItems(item)}</div>
    </div>
  ));
  return (
    <div className={`${rowClassName}`}>
      <div className="titleBorderTop">
        <div className="colorRectangle"></div>
        <h1>{title}</h1>
      </div>
      <div className="listCtn">{renderlistCardSections}</div>
    </div>
  );
}
