import { FaBell, FaQuestion, FaBars } from "react-icons/fa";
import style from "./Community/community.module.css";
import { Link } from "react-router-dom";
import { Logo } from "../Home/Header/Header";
import { FaGear } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import feedsDp from "../../../assets/images/feedsDp.png";

export function UserNav() {
  return (
    <header className={style.header}>
      <nav className={`${style.navigation} ${style.flexContainer}`}>
        <Logo />
        <div className={style.mobile}>
          <span className={style.hidden}>
            <FaBars className={style.menuIcon} />
          </span>
          <ul className={`${style.navList} ${style.flexContainer}`}>
            <li>
              <NavLink exact to="/" activeClassName={style.activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" activeClassName={style.activeLink}>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/tips" activeClassName={style.activeLink}>
                Health Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName={style.activeLink}>
                Blog
              </NavLink>
            </li>
          </ul>{" "}
        </div>
        <div className={`${style.icons} ${style.flexContainer}`}>
          <input
            type="search"
            name="searchPage"
            id="searchPage"
            placeholder="Search here..."
          />
          <Link>
            <FaBell />
          </Link>
          <Link>
            <FaQuestion />
          </Link>
          <Link>
            <FaGear />
          </Link>
          <Link>
            <img src={feedsDp} alt="user" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
