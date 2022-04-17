import weChatIcon from "../../assets/icons/wechat.svg";

export default function ContactUs() {
  return (
    <div className="pageCtn">
      <div className="pageBGContact"></div>
      <div className="">
        <h1>Contact Us</h1>

        <div className="listCtn contactListCtn">
          <div className="contactItem">
            <i class="bi bi-telephone-fill"></i>
            <p>+1-519-702-2185</p>
          </div>
          <div className="contactItem">
            <p>
              <i class="bi bi-envelope-fill"></i> <a href="mailto:hanshuyou@gmail.com">hanshuyou@gmail.com</a>
            </p>
          </div>
          <div className="contactItem">
            <img width={35} src={weChatIcon} />
            <p>
              <strong>Wechat:</strong> hanshuyoucan
            </p>
          </div>
          <div className="contactItem">
            <i class="bi bi-skype"></i>
          </div>
          <div className="contactItem">
            <a href="https://twitter.com/ShuyouHan">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
          <div className="contactItem">
            <a href="https://www.linkedin.com/in/shuyou-han-30b47853/">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="contactItem">
            <p>Address: 400 Sangeet Place, Richmond, Ontario K0A 2Z0 </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.6028405384186!2d-75.84438408420017!3d45.17489176072156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfa75c9d26549%3A0x69c15fe17c37e0c0!2s400%20Sangeet%20Pl%2C%20Richmond%2C%20ON%20K0A%202Z0!5e0!3m2!1sen!2sca!4v1650224898484!5m2!1sen!2sca"
              style={{ width: "100%", height: "300px", border: 0, borderRadius: "6px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
