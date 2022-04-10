import "./App.css";
import { HashRouter , Routes, Route, Link } from "react-router-dom";
import CompanyIntro from "./components/pages/CompanyIntro";
import PesticideRegistration from "./components/pages/PesticideRegistration";
import PesticideSales from "./components/pages/PesticideSales";
import MarketSurvey from "./components/pages/MarketSurvey";
import Talks from "./components/pages/Talks";
import NewsAndInterview from "./components/pages/NewsAndInterview";
import PestControl from "./components/pages/PestControl";
import OnlineResources from "./components/pages/OnlineResources";
import ContactUs from "./components/pages/ContactUs";
import logo from "./assets/logo.svg";
import { useState } from "react";
import { NAV_MENU } from "./constants/language";

function App() {
  const [showPesticideSubMenu, setShowPesticideSubMenu] = useState(false);
  const [willHidePesticideSubMenu, setWillHidePesticideSubMenu] = useState("");
  const [showResourcesSubMenu, setShowResourceSubMenu] = useState(false);
  const [willHideResourcesSubMenu, setWillHideResourcesSubMenu] = useState("");
  const [language, setLanguage] = useState("en");
  const [showOverlay, setShowOverlay] = useState(false);
  const [shouldExpandPesticide, setShouldExpandPesticide] = useState(false);
  const [shouldExpandResource, setShouldExpandResource] = useState(false);

  const hidePesticideSubMenu = () => {
    const timer = setTimeout(() => setShowPesticideSubMenu(false), 250);
    setWillHidePesticideSubMenu(timer);
  };
  const hideResourcesSubMenu = () => {
    const timer = setTimeout(() => setShowResourceSubMenu(false), 250);
    setWillHideResourcesSubMenu(timer);
  };
  return (
    <HashRouter  basename={window.location.hostname.includes("localhost") ? "/" : "/hansonAgrochemicalPreview/"}>
      <div className="banner"></div>

      <div className="navBarCtn displayCenter">
        <div className="navBarCtnBlur"></div>
        <nav className="navBar">
          <img className="logo" src={logo} alt="Hanson Agrochemical Consulting logo" />
          <div className="navItems">
            <div className="navBtnCtn">
              <Link className="navBtn" to="/">
                {NAV_MENU.companyIntro[language]}
              </Link>
            </div>

            <div className="navBtnCtn">
              <a
                className="navBtn"
                onMouseEnter={() => {
                  setShowPesticideSubMenu(true);
                  clearTimeout(willHidePesticideSubMenu);
                }}
                onMouseLeave={hidePesticideSubMenu}
              >
                {NAV_MENU.pesticide[language]} <i className="bi bi-chevron-down"></i>
              </a>

              <div
                className={showPesticideSubMenu ? "subMenu" : "subMenu hide"}
                onMouseEnter={() => clearTimeout(willHidePesticideSubMenu)}
                onMouseLeave={hidePesticideSubMenu}
              >
                <Link className="navBtn" to="/pesticide-registration">
                  {NAV_MENU.pesticideRegistration[language]}
                </Link>
                <Link className="navBtn" to="/pesticide-sales">
                  {NAV_MENU.pesticideSales[language]}
                </Link>
              </div>
            </div>

            <div className="navBtnCtn">
              <Link className="navBtn" to="/pest-control">
                {NAV_MENU.pestControl[language]}
              </Link>
            </div>

            <div className="navBtnCtn">
              <a
                className="navBtn"
                onMouseEnter={() => {
                  setShowResourceSubMenu(true);
                  clearTimeout(willHideResourcesSubMenu);
                }}
                onMouseLeave={hideResourcesSubMenu}
              >
                {NAV_MENU.resources[language]} <i className="bi bi-chevron-down"></i>
              </a>
              <div
                className={showResourcesSubMenu ? "subMenu" : "subMenu hide"}
                onMouseEnter={() => clearTimeout(willHideResourcesSubMenu)}
                onMouseLeave={hideResourcesSubMenu}
              >
                <Link className="navBtn" to="/market-survey">
                  {NAV_MENU.marketSurvey[language]}
                </Link>
                <Link className="navBtn" to="/talks">
                  {NAV_MENU.talks[language]}
                </Link>
                <Link className="navBtn" to="/news-and-interview">
                  {NAV_MENU.newsAndInterview[language]}
                </Link>
                <Link className="navBtn" to="/online-resources">
                  {NAV_MENU.onlineResources[language]}
                </Link>
              </div>
            </div>

            <div className="navBtnCtn">
              <Link className="navBtn" to="/contact">
                {NAV_MENU.contactUs[language]}
              </Link>
            </div>
          </div>

          <div className="langSwitchCtn">
            <p onClick={() => (language === "en" ? setLanguage("zh") : setLanguage("en"))}>
              {language === "en" ? "中文" : "EN"}
            </p>
          </div>
        </nav>

        <div className="hamburgerMenuIcon">
          <i
            className={showOverlay ? "bi bi-list" : "bi bi-list active"}
            onClick={() => setShowOverlay(!showOverlay)}
          ></i>
          <i
            className={showOverlay ? "bi bi-x-lg active" : "bi bi-x-lg"}
            onClick={() => setShowOverlay(!showOverlay)}
          ></i>
        </div>
      </div>

      <div className={showOverlay ? "hamburgerMenu active" : "hamburgerMenu"}>
        <Link className="navBtnHumbergur" to="/" onClick={() => setShowOverlay(false)}>
          {NAV_MENU.companyIntro[language]}
        </Link>
        <div
          className={shouldExpandPesticide ? "navBtnAccordion active margin-0" : "navBtnAccordion margin-0"}
          onClick={() => setShouldExpandPesticide(!shouldExpandPesticide)}
        >
          <div className="accordionTitle">
            {NAV_MENU.pesticide[language]}
            <i className={shouldExpandPesticide ? "bi bi-chevron-down active" : "bi bi-chevron-down"}></i>
          </div>
          <div className="accordionItemsCtn">
            <Link
              className={shouldExpandPesticide ? "navBtnHumbergur active" : "navBtnHumbergur"}
              to="/pesticide-registration"
              onClick={() => setShowOverlay(false)}
            >
              {NAV_MENU.pesticideRegistration[language]}
            </Link>
            <Link
              className={shouldExpandPesticide ? "navBtnHumbergur active" : "navBtnHumbergur"}
              to="/pesticide-sales"
              onClick={() => setShowOverlay(false)}
            >
              {NAV_MENU.pesticideSales[language]}
            </Link>
          </div>
        </div>
        <Link className="navBtnHumbergur" to="/pest-control" onClick={() => setShowOverlay(false)}>
          {NAV_MENU.pestControl[language]}
        </Link>

        <div
          className={shouldExpandResource ? "navBtnAccordion active margin-0" : "navBtnAccordion margin-0"}
          onClick={() => setShouldExpandResource(!shouldExpandResource)}
        >
          <div className="accordionTitle">
            {NAV_MENU.resources[language]}
            <i className={shouldExpandResource ? "bi bi-chevron-down active" : "bi bi-chevron-down"}></i>
          </div>
          <div className="accordionItemsCtn">
            <Link
              className={shouldExpandResource ? "navBtnHumbergur active" : "navBtnHumbergur"}
              to="/market-survey"
              onClick={() => setShowOverlay(false)}
            >
              {NAV_MENU.marketSurvey[language]}
            </Link>
            <Link
              className={shouldExpandResource ? "navBtnHumbergur active" : "navBtnHumbergur"}
              to="/talks"
              onClick={() => setShowOverlay(false)}
            >
              {NAV_MENU.talks[language]}
            </Link>
            <Link
              className={shouldExpandResource ? "navBtnHumbergur active" : "navBtnHumbergur"}
              to="/news-and-interview"
              onClick={() => setShowOverlay(false)}
            >
              {NAV_MENU.newsAndInterview[language]}
            </Link>
            <Link
              className={shouldExpandResource ? "navBtnHumbergur active" : "navBtnHumbergur"}
              to="/online-resources"
              onClick={() => setShowOverlay(false)}
            >
              {NAV_MENU.onlineResources[language]}
            </Link>
          </div>
        </div>
        <Link className="navBtnHumbergur" to="/contact" onClick={() => setShowOverlay(false)}>
          {NAV_MENU.contactUs[language]}
        </Link>
      </div>

      <div className="mainContent">
        <Routes>
          <Route path="/" element={<CompanyIntro language={language} />} exact></Route>
          <Route path="/pesticide-registration" element={<PesticideRegistration language={language} />} exact></Route>
          <Route path="/pesticide-sales" element={<PesticideSales language={language} />} exact></Route>
          <Route path="/market-survey" element={<MarketSurvey />} exact></Route>
          <Route path="/talks" element={<Talks />} exact></Route>
          <Route path="/news-and-interview" element={<NewsAndInterview />} exact></Route>
          <Route path="/pest-control" element={<PestControl />} exact></Route>
          <Route path="/online-resources" element={<OnlineResources />} exact></Route>
          <Route path="/contact" element={<ContactUs />} exact></Route>
        </Routes>
      </div>
      <footer>© Hanson Agrochemical Consulting® 2022</footer>

      <div id="overlay" className={showOverlay && "active"} onClick={() => setShowOverlay(false)}></div>
    </HashRouter >
  );
}

export default App;
