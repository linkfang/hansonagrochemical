import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CompanyIntro from "./components/pages/CompanyIntro";
import PesticideRegistration from "./components/pages/PesticideRegistration";
import PesticideSales from "./components/pages/PesticideSales";
import MarketSurvey from "./components/pages/MarketSurvey";
import Talks from "./components/pages/Talks";
import NewsAndInterview from "./components/pages/NewsAndInterview";
import PestControl from "./components/pages/PestControl";
import Resources from "./components/pages/Resources";
import ContactUs from "./components/pages/ContactUs";
import logo from "./assets/logo.svg";

function App() {
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
            <Link className="navBtn" to="/">
              Company Intro
            </Link>
            <Link className="navBtn" to="/">
              Pesticide
            </Link>
            <Link className="navBtn" to="/">
              Pest Control
            </Link>
            {/* <Link className="navBtn" to="/">
              Pesticide Registration
            </Link>
            <Link className="navBtn" to="/">
              Pesticide Sales
            </Link>
            <Link className="navBtn" to="/">
              Market Survey
            </Link>
            <Link className="navBtn" to="/">
              Talks at Conferences
            </Link>
            <Link className="navBtn" to="/">
              News and Interview
            </Link>
            <Link className="navBtn" to="/">
              Pest Control in Backyard and Garden
            </Link> */}
            <Link className="navBtn" to="/">
              Resources
            </Link>
            <Link className="navBtn" to="/">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<CompanyIntro />}></Route>
          <Route
            path="/pesticide-registration"
            element={PesticideRegistration}
          ></Route>
          <Route path="/pesticide-sales" element={<PesticideSales />}></Route>
          <Route path="/market-survey" element={<MarketSurvey />}></Route>
          <Route path="/talks" element={<Talks />}></Route>
          <Route
            path="/news-and-interview"
            element={<NewsAndInterview />}
          ></Route>
          <Route path="/pest-control" element={<PestControl />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
