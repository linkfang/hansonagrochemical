import pdfIcon from "../../assets/icons/file-earmark-pdf.svg";

export default function ListSection({ title, description, items, language, className }) {
  const rowClassName = className || "";
  const renderListItems = (data) =>
    data.content[language].map((item) => {
      if (item.type === "pdf") {
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
    <div className={`row ${rowClassName}`}>
      <div className="titleBorderTop">
        <div className="colorRectangle"></div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      <div className="listCtn">{renderListItems(items)}</div>
    </div>
  );
}
