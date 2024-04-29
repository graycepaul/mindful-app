import style from "./footer.module.css";
import { Link } from "react-router-dom";
import appleLogo from "../../../../assets/icons/Apple logo.png";
import playStore from "../../../../assets/icons/Google Play logo.png";
import { IntlProvider, FormattedMessage } from "react-intl";
import { hausaMessages, englishMessages } from "../../messages";
import {
  FaFacebook,
  FaInstagram,
  FaHeartbeat,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = ({ locale }) => {
  return (
    <IntlProvider
      messages={locale === "ha" ? hausaMessages : englishMessages}
      locale={locale}
      defaultLocale="en"
    >
      <footer className={style.footer} id="footer">
        <div className={style.footerContent}>
          <div>
            <h2>
              <FaHeartbeat /> Mindful
            </h2>
            <ul>
              <li>
                <a href="#about">
                  <FormattedMessage id="about" />
                </a>
              </li>
              <li>
                <Link to={"./blog"}>
                  <FormattedMessage id="blog" />
                </Link>
              </li>
              <li>
                <Link to={"./community"}>
                  <FormattedMessage id="community" />
                </Link>
              </li>
              <li>
                <FormattedMessage id="careers" />
              </li>
              <li>
                <FormattedMessage id="hiring" />
              </li>
              <li>
                <FormattedMessage id="contactUs" />
              </li>
              <li>
                <FormattedMessage id="press" />
              </li>
            </ul>
          </div>
          <div className={style.appDownload}>
            <h3>
              <FormattedMessage id="downloadApp" />
            </h3>
            <div className={style.download}>
              <div className={style.appStore}>
                <img src={appleLogo} alt="apple logo" />
                <p>
                  <FormattedMessage id="appStore" />
                </p>
              </div>
              <div className={style.appStore}>
                <img src={playStore} alt="google play store" />
                <p>
                  <FormattedMessage id="googlePlay" />
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
            <a href="#/terms">
              <FormattedMessage id="terms" />
            </a>
            <a href="#/privacy">
              <FormattedMessage id="privacy" />
            </a>
          </div>
        </div>
      </footer>
    </IntlProvider>
  );
};
