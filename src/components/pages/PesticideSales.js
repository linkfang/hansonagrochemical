import { Button, Table } from "antd";
import { useEffect } from "react";
import { PESTICIDE_SALES } from "../../constants/language";
import ListSection from "../UI/ListSection";

const dataSource = [
  {
    key: "1",
    products: "FREEDOM GLYPHOSATE POTASSIUM SALT 540 LIQUID HERBICIDE",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/freedom-glyphosate-540-reg-33976-view_label.pdf"),
    msds: require("../../assets/files/msds/freedom-msds.pdf"),
  },
  {
    key: "2",
    products: "STORM GLYPHOSATE POTASSIUM SALT 540 LIQUID HERBICIDE",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/storm-glyphosate-540-liquid.pdf"),
    msds: require("../../assets/files/msds/storm-glyphosate-540-msds.pdf"),
  },
  {
    key: "3",
    products: "FOISON GLYPHOSATE IPA 41% SL",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/foison-glyphosate-ipa-41-sl.pdf"),
    msds: require("../../assets/files/msds/foison-glyphosate-41-msds.pdf"),
  },
  {
    key: "4",
    products: "FOISON GLUFOSINATE AMMONIUM 150 SN",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/foison-glufosinate-ammonium-150-sn-reg-34467-view_label.pdf"),
    msds: require("../../assets/files/msds/fosion-glufosinate-ammonium-150-msds.pdf"),
  },
  {
    key: "5",
    products: "FOISON GLUFOSINATE AMMONIUM 200 SN",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/foison-glufosinate-ammonium-200-sn.pdf"),
    msds: require("../../assets/files/msds/foison-glufosinate-200-sn-msds.pdf"),
  },
  {
    key: "6",
    products: "LIER GLUFOSINATE AMMONIUM 150 SN",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/lier-glufosinate-150-sn-english-label.pdf"),
    msds: require("../../assets/files/msds/lier-glufosinate-ammonium-150-msds.pdf"),
  },
  {
    key: "7",
    products: "KQ PYRACLOSTROBIN 250 EC",
    formulation_types: "Formulated",
    class: "Herbicide",
    labels: require("../../assets/files/labels/kq-pyraclostrobin-250-ec-reg-34601-view_label.pdf"),
    msds: require("../../assets/files/msds/daco-0.9.1-pyraclostrobin-250-ec_msds.pdf"),
  },
  {
    key: "8",
    products: "BRASSINOLIDE 0.01%",
    formulation_types: "Formulated",
    class: "PGR",
    labels: require("../../assets/files/labels/brassinolide-1.pdf"),
    msds: "",
  },
  {
    key: "9",
    products: "Glyphosate",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/gh-glyphosate-98-technical.pdf"),
    msds: "",
  },
  {
    key: "10",
    products: "Glufosinate",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/lier-glufosinate-ammonium-95-technical.pdf"),
    msds: "",
  },
  {
    key: "11",
    products: "Clethodim",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/hongze-clethodim-technical.pdf"),
    msds: "",
  },
  {
    key: "12",
    products: "Diquat",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/lier-diquat-technical.pdf"),
    msds: "",
  },
  {
    key: "13",
    products: "Pinoxaden",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/lier-pinoxaden-technical.pdf"),
    msds: "",
  },
  {
    key: "14",
    products: "Cloquintocet-mexyl",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/lier-cloquintocet-mexyl-tc-9.pdf"),
    msds: "",
  },
  {
    key: "15",
    products: "Clopyralid",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/lier-clopyralid-technical.pdf"),
    msds: "",
  },
  {
    key: "16",
    products: "Mesotrione",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/maxunitech-mesotrione-technical.pdf"),
    msds: "",
  },
  {
    key: "17",
    products: "Florasulam",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/zhongshan-florasulam-technical-98.pdf"),
    msds: "",
  },
  {
    key: "18",
    products: "S-metolachlor",
    formulation_types: "Technical",
    class: "Herbicide",
    labels: require("../../assets/files/labels/zhongshan-s-metolachlor-technical-99.pdf"),
    msds: "",
  },
  {
    key: "19",
    products: "Pyraclostrobin",
    formulation_types: "Technical",
    class: "Fungicide",
    labels: require("../../assets/files/labels/kq-pyraclostrobin-98-technical-label.pdf"),
    msds: "",
  },
  {
    key: "20",
    products: "Prothioconazole",
    formulation_types: "Technical",
    class: "Fungicide",
    labels: require("../../assets/files/labels/hailir-prothioconazole-tc.pdf"),
    msds: "",
  },
  {
    key: "21",
    products: "Tebuconazole",
    formulation_types: "Technical",
    class: "Fungicide",
    labels: require("../../assets/files/labels/tebustar-tebuconazole-technical-98.pdf"),
    msds: "",
  },
  {
    key: "22",
    products: "Boscalid",
    formulation_types: "Technical",
    class: "Fungicide",
    labels: require("../../assets/files/labels/zhongshan-boscalid-technical-98.pdf"),
    msds: "",
  },
];

const columns = [
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
    width: "50%",
    sorter: (a, b) => a.products.localeCompare(b.products),
  },
  {
    title: "Formulation Types",
    dataIndex: "formulation_types",
    key: "formulation_types",
    filters: [
      { text: "Formulated", value: "Formulated" },
      { text: "Technical", value: "Technical" },
    ],
    onFilter: (value, record) => record?.formulation_types === value,
    sorter: (a, b) => a.formulation_types.localeCompare(b.formulation_types),
  },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
    filters: [
      { text: "Herbicide", value: "Herbicide" },
      { text: "PGR", value: "PGR" },
      { text: "Fungicide", value: "Fungicide" },
    ],
    onFilter: (value, record) => record?.class === value,
    sorter: (a, b) => a.class.localeCompare(b.class),
  },
  {
    title: "Labels (En)",
    dataIndex: "labels",
    key: "labels",
    render: (value) => (
      <a href={value} target="_blank" rel="noreferrer">
        <Button>View</Button>
      </a>
    ),
  },
  {
    title: "MSDS",
    dataIndex: "msds",
    key: "msds",
    render: (value) =>
      value ? (
        <a href={value} target="_blank" rel="noreferrer">
          <Button>View</Button>
        </a>
      ) : null,
  },
];

export default function PesticideSales({ language, setBannerImg }) {
  useEffect(() => {
    setBannerImg("pesticide");
  }, [setBannerImg]);

  return (
    <>
      <div className="pageBG"></div>

      <div className="pageCtn">
        <div>
          <div className="">
            <div className="colorRectangle"></div>
            <h1 style={{ marginTop: 10 }}>
              Crop Protection Products We are Selling
            </h1>
          </div>
          <div className="listCtn">
            <Table
              dataSource={dataSource}
              columns={columns}
              style={{
                marginTop: 10,
                flex: 1,
                boxShadow: "0 0 20px rgba(0,0,0,0.05)",
              }}
            />
          </div>
        </div>

        <ListSection
          title={PESTICIDE_SALES.distributors.title[language]}
          items={PESTICIDE_SALES.distributors}
          language={language}
          className="mt-100"
        />
        <ListSection
          title={PESTICIDE_SALES.partnersFromChina.title[language]}
          items={PESTICIDE_SALES.partnersFromChina}
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
