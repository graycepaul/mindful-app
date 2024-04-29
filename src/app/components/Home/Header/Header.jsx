import { FaBars, FaHeartbeat } from "react-icons/fa";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { useState } from "react";
import { hausaMessages, englishMessages } from "../../messages";

import { IntlProvider, FormattedMessage } from "react-intl";

export function Header({ toggleTheme, theme, toggleLocale, locale }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <IntlProvider
      messages={locale === "ha" ? hausaMessages : englishMessages}
      locale={locale}
      defaultLocale="en"
    >
      <header className={style.header}>
        <div className={style.logoAndMenu}>
          <Logo />
          <span className={style.menuWrapper}>
            <FaBars className={style.menuIcon} />
            <nav className={style.navigation}>
              <ul className={style.navList}>
                <li>
                  <FormattedMessage id="aboutUs" defaultMessage="About Us" />
                </li>
                <li>
                  <a href="#offers">
                    <FormattedMessage
                      id="ourServices"
                      defaultMessage="Our Services"
                    />
                  </a>
                </li>
                <li>
                  <a href="#footer">
                    <FormattedMessage
                      id="contactUs"
                      defaultMessage="Contact Us"
                    />
                  </a>
                </li>
              </ul>
              <div className={style.userAuth}>
                <Link
                  to="/signin"
                  className={`${style.login} ${style.actionBtn}`}
                >
                  <FormattedMessage id="login" defaultMessage="Login" />
                </Link>
                <Link to="/signup" className={style.actionBtn}>
                  <FormattedMessage id="signUp" defaultMessage="Sign Up" />
                </Link>
                <button onClick={toggleLocale} className={style.toggleLang}>
                  {locale === "en" ? "Hausa" : "English"} &#9660;
                </button>
                <Switch
                  checked={theme === "light"}
                  onChange={toggleTheme}
                  onColor="#a9a7a759"
                  onHandleColor="#000"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={10}
                  width={40}
                  className="react-switch"
                  id="material-switch"
                  aria-labelledby="switch-label"
                />
              </div>
            </nav>
          </span>
        </div>
      </header>
    </IntlProvider>
  );
}

export function Logo() {
  return (
    <div className={style.logo}>
      <h2 className={style.logo}>
        <FaHeartbeat className={style.logoImg} /> Mindful
      </h2>
    </div>
  );
}
