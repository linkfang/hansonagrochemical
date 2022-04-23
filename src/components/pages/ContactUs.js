import weChatIcon from "../../assets/icons/wechat.svg";
import ContactUsIcon from "../../assets/icons/contact-us.svg";

export default function ContactUs() {
  return (
    <div className="pageCtn contactPageCtn">
      <div className="pageBGContact"></div>
      <div className="contactCard">
        <div className="contactUsIconCtn">
          <img width={60} src={ContactUsIcon} alt="Contact Us" />
        </div>
        <div className="contactListCtn">
          <div className="contactItem">
            <i className="bi bi-telephone-fill"></i>
            <p>+1-519-702-2185</p>
          </div>
          <a className="contactItem" href="mailto:hanshuyou@gmail.com">
            <i className="bi bi-envelope-fill"></i>
            <p>hanshuyou@gmail.com</p>
          </a>
          <div className="contactItem">
            <img className="weChatIcon" width={28} src={weChatIcon} alt="WeChat icon" />
            <p>hanshuyoucan</p>
          </div>
          <div className="contactItem">
            <i className="bi bi-skype"></i>
            <p>hanshuyoucan</p>
          </div>
          <a className="contactItem" target='_blank' href="https://twitter.com/ShuyouHan">
            <i className="bi bi-twitter"></i>
            <p>ShuyouHan</p>
          </a>
          <a className="contactItem" target='_blank' href="https://www.linkedin.com/in/shuyou-han-30b47853/">
            <i className="bi bi-linkedin"></i>
            <p>Shuyou Han</p>
          </a>
        </div>
        <div className="contactAddress">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.6028405384186!2d-75.84438408420017!3d45.17489176072156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfa75c9d26549%3A0x69c15fe17c37e0c0!2s400%20Sangeet%20Pl%2C%20Richmond%2C%20ON%20K0A%202Z0!5e0!3m2!1sen!2sca!4v1650224898484!5m2!1sen!2sca"
            style={{ width: "100%", height: "100%", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
