import mobileApp from "../../../../assets/images/mobileApp.png";
import { hausaMessages, englishMessages } from "../../messages";
import map from "../../../../assets/images/map.png";
import style from "./map.module.css";
import { FormattedMessage } from "react-intl";

export const Location = () => {
  return (
    <div className={style.location}>
      <section className={style.googleMap}>
        <img src={map} alt="city map" />
      </section>
      <section className={style.mobile}>
        <img
          src={mobileApp}
          alt="Two iphones displaying the mobile view of the app"
        />
        <h1>
          <FormattedMessage id="signupIn60Secs" /> <br />
          <span id={style.easyPeasy}>
            <FormattedMessage id="easy" />
          </span>
        </h1>
      </section>
    </div>
  );
};
