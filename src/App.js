import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

function App() {
  const [showPesticideSubMenu, setShowPesticideSubMenu] = useState(false);
  const [willHidePesticideSubMenu, setWillHidePesticideSubMenu] = useState("");
  const [showResourcesSubMenu, setShowResourceSubMenu] = useState(false);
  const [willHideResourcesSubMenu, setWillHideResourcesSubMenu] = useState("");
  return (
    <BrowserRouter
      basename={
        window.location.hostname.includes("localhost")
          ? "/"
          : "/hansonAgrochemicalPreview/"
      }
    >
      <div className="banner"></div>

      <div className="navBarCtn displayCenter">
        <nav className="navBar">
          <img
            className="logo"
            src={logo}
            alt="Hanson Agrochemical Consulting logo"
          />
          <div className="navItems">
            <div className="navBtnCtn">
              <Link className="navBtn" to="/">
                Company Intro
              </Link>
            </div>

            <div className="navBtnCtn">
              <a
                className="navBtn"
                onMouseEnter={() => setShowPesticideSubMenu(true)}
                onMouseLeave={() => {
                  const timer = setTimeout(
                    () => setShowPesticideSubMenu(false),
                    250
                  );
                  setWillHidePesticideSubMenu(timer);
                }}
              >
                Pesticide <i className="bi bi-chevron-down"></i>
              </a>

              <div
                className={showPesticideSubMenu ? "subMenu" : "subMenu hide"}
                onMouseEnter={() => clearTimeout(willHidePesticideSubMenu)}
                onMouseLeave={() => setShowPesticideSubMenu(false)}
              >
                <Link className="navBtn" to="/pesticide-registration">
                  Pesticide Registration
                </Link>
                <Link className="navBtn" to="/pesticide-sales">
                  Pesticide Sales
                </Link>
              </div>
            </div>

            <div className="navBtnCtn">
              <Link className="navBtn" to="/pest-control">
                Pest Control
              </Link>
            </div>

            <div className="navBtnCtn">
              <a
                className="navBtn"
                onMouseEnter={() => setShowResourceSubMenu(true)}
                onMouseLeave={() => {
                  const timer = setTimeout(
                    () => setShowResourceSubMenu(false),
                    250
                  );
                  setWillHideResourcesSubMenu(timer);
                }}
              >
                Resources <i className="bi bi-chevron-down"></i>
              </a>
              <div
                className={showResourcesSubMenu ? "subMenu" : "subMenu hide"}
                onMouseEnter={() => clearTimeout(willHideResourcesSubMenu)}
                onMouseLeave={() => setShowResourceSubMenu(false)}
              >
                <Link className="navBtn" to="/market-survey">
                  Market Survey
                </Link>
                <Link className="navBtn" to="/talks">
                  Talks at Conferences
                </Link>
                <Link className="navBtn" to="/news-and-interview">
                  News and Interview
                </Link>
                <Link className="navBtn" to="/online-resources">
                  Online Resources
                </Link>
              </div>
            </div>

            <div className="navBtnCtn">
              <Link className="navBtn" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<CompanyIntro />}></Route>
          <Route
            path="/pesticide-registration"
            element={<PesticideRegistration />}
          ></Route>
          <Route path="/pesticide-sales" element={<PesticideSales />}></Route>
          <Route path="/market-survey" element={<MarketSurvey />}></Route>
          <Route path="/talks" element={<Talks />}></Route>
          <Route
            path="/news-and-interview"
            element={<NewsAndInterview />}
          ></Route>
          <Route path="/pest-control" element={<PestControl />}></Route>
          <Route path="/online-resources" element={<OnlineResources />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
