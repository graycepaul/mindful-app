import style from "./footer.module.css";
import { Card } from "../Features/Cards";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaHeartbeat,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import appleLogo from "../../../../assets/icons/Apple logo.png";
import playStore from "../../../../assets/icons/Google Play logo.png";

export const Footer = () => {
  return (
    <footer className={style.footer} id="footer">
      <div className={style.footerContent}>
        <div>
          <h2>
            <FaHeartbeat /> Mindful
          </h2>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to={"./blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"./community"}>Community</Link>
            </li>
            <li>Careers</li>
            <li>We're hiring!</li>
            <li>Contact Us</li>
            <li>Press</li>
          </ul>
        </div>
        <div className={style.appDownload}>
          <h3>Download the app</h3>
          <div className={style.download}>
            <div className={style.appStore}>
              <img src={appleLogo} alt="apple logo" />
              <p>
                Download on the <br /> <strong>App Store</strong>
              </p>
            </div>
            <div className={style.appStore}>
              <img src={playStore} alt="google play store" />
              <p>
                Get it on <br />
                <strong>Google Play</strong>
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      <hr />
      <div className={style.footNote}>
        <div>
          <a href="facebook.com" target="blank">
            {" "}
            <FaFacebook />
          </a>
          <a href="twitter.com" target="blank">
            {" "}
            <FaTwitter />
          </a>
          <a href="instagram.com" target="blank">
            {" "}
            <FaInstagram />
          </a>
          <a href="linkedin.com" target="blank">
            {" "}
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="#/terms">Terms of Service</a>
          <a href="#/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
