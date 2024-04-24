import { FaBars, FaHeartbeat, FaList } from "react-icons/fa";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Switch from "react-switch"; // Import the Switch component
import { useState } from "react";

export function Header({ className, toggleTheme, theme, dp }) {
  const [checked, setChecked] = useState(false); // Corrected state declaration

  const handleChange = (checked) => {
    setChecked(checked); // Corrected state update
  };

  return (
    <div className={style.header}>
      <div className={style.logoAndMenu}>
        <Logo />
        <span className={style.menuWrapper}>
          <FaBars className={style.menuIcon} />
          <nav className={style.navigation}>
            <ul className={style.navList}>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#offers">Ours Services</a>
              </li>
              <li>
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
            <div className={style.userAuth}>
              <Link
                to="/signin"
                className={`${style.login} ${style.actionBtn}`}
              >
                Login
              </Link>
              <Link to="/signup" className={style.actionBtn}>
                Sign Up
              </Link>
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
              />
            </div>
          </nav>
        </span>
      </div>
    </div>
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
