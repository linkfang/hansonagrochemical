import pdfIcon from "../../assets/icons/file-earmark-pdf.svg";
import htmlIcon from "../../assets/icons/filetype-html.svg";

export default function ListSection({
  title,
  description,
  items,
  language,
  className,
}) {
  const rowClassName = className || "";
  const renderListItems = (data) =>
    data.content[language].map((item) => {
      switch (item.type) {
        case "pdf":
          return (
            <a
              className="listItem margin-0"
              key={item.name}
              href={require(`../../assets/files/pdf/${item.url}`)}
              target="_blank"
              rel="noreferrer"
            >
              <img className="pdfIcon" src={pdfIcon} alt="PDF icon" />
              {item.name}
            </a>
          );
        case "html":
          return (
            <a
              className="listItem margin-0"
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <img className="htmlIcon" src={htmlIcon} alt="HTML icon" />
              {item.name}
            </a>
          );
        default:
          return (
            <p className="listItem margin-0" key={item.name}>
              {item.name}
            </p>
          );
      }
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
