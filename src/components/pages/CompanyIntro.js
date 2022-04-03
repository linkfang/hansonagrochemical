import missionIcon from "../../assets/icons/bullseye.svg";
import visionIcon from "../../assets/icons/vision.svg";
import aboutIcon from "../../assets/icons/about.svg";
import meListIcon from "../../assets/icons/me-list.svg";
import { COMPANY_INTRO } from "../../constants/language";

export default function CompanyIntro({ language }) {
  return (
    <div className="pageCtn">
      <div className="row">
        <div className="card col-12">
          <img className="intro-icon" src={missionIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.mission[language]}</h1>
          <p className="margin-0">
            Founded in 2014, the mission of Hanson Agrochemical Consulting is to
            provide customers with quality services on the innovation,
            registration, promotion, and market penetration of agrochemical
            products, thus bridging the product suppliers to the end-users.
          </p>
        </div>
        <div className="card col-12">
          <img className="intro-icon" src={visionIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.vision[language]}</h1>
          <p className="margin-0">
            Our vision is to bring the farmers in North America with an
            alternative, competitive, feasible, and affordable tool, such as
            generic herbicides, to tackle crop protection issues, with the aim
            to boom and robust agricultural industries.
          </p>
        </div>
        <div className="card col-12">
          <img className="intro-icon" src={aboutIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.aboutHanson[language]}</h1>
          <p className="margin-0 mb-15">
            Hanson Agrochemical Consulting is a subsidiary of the Hanson
            Industry Company and located Ottawa, Ontario, Canada. Hanson
            currently has seven staff members, four of whom are responsible for
            product registration and three for pesticide sales.
          </p>
          <p className="margin-0 mb-15">
            Hanson's business covers agrochemical (pesticide and fertilizer)
            product registration, agrochemical product sales, agrochemical and
            GM crop market consulting, new pesticide compounds (pre-marketing
            new active ingredients) tracking and introduction, and pesticide
            news, interviews, and global crop biotechnology patent watch and so
            on.
          </p>
          <p className="margin-0 mb-15">
            Hanson is well versed in the processes and procedures for pesticide
            registration in North America, especially in data compensation. At
            present, more than 30 product registrations have been submitted, and
            8 product registrations have been approved. Hanson Agrochemical
            Consulting has been widely recognized and highly praised by the
            industry for its commitment to contracts, keeping promises, being
            accountable to customers, registering products in a timely manner
            and saving data compensation fees for customers.
          </p>
          <p className="margin-0 mb-15">
            Hanson attaches great importance to the construction of North
            American product sales channels. At present, Hanson has established
            a good strategic partnership with major distributors in Canada. More
            importantly, Hanson has mastered many terminal farmer customers and
            is practicing a new concept from port to farm, paving the way for
            smooth and sustainable entry into the end-user market.
          </p>
        </div>
        <div className="card col-12">
          <img className="intro-icon" src={meListIcon} alt="Mission icon" />
          <h1>{COMPANY_INTRO.aboutMe[language]}</h1>
          <div className="row">
            <p className="margin-0">
              Working experience: <br />
              <ul>
                <li>Correspondent/Freelancer at Agrow journal for 7 years</li>
                <li>Director at Hanson Agrochemical Consulting for 5 years</li>
                <li>Consultant to Phillips McDougall for 5 years</li>
                <li>Consultant to Arysta Global Licencing Team for 5 years</li>
                <li>
                  Technical support manager (Asia) at Arysta LifeScience for 3
                  years
                </li>
                <li>
                  Sales manager (Central China) at Ciba-Geigy, Novartis,
                  Syngenta for 5 years
                </li>
              </ul>
            </p>
            <p className="margin-0">
              Educational background: <br />
              <ul>
                <li>
                  PhD degree at University of Ottawa, majored in plant
                  biotechnology
                </li>
                <li>
                  Master's degree at Carleton University, majored in plant
                  molecular biology
                </li>
                <li>
                  Master's degree at Fujian Agricultural University, majored in
                  Entomology
                </li>
                <li>
                  Bachelor's degree at Huazhong Agricultural University, majored
                  in crop protection
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
