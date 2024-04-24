import mobileApp from "../../../assets/images/mobileApp.png";
import map from "../../../assets/images/map.png";
import style from "./map.module.css";
export const Location = () => {
  return (
    <div className={style.location}>
      <div className={style.googleMap}>
        <img src={map} alt="city map" />
      </div>
      <div className={style.mobile}>
        <img
          src={mobileApp}
          alt="Two iphones displaying the mobile view of the app"
        />
        <h1>
          Sign Up <br />
          <span> in 60Secs </span>
          <br />
          <span id={style.easyPeasy}>Easy! Peasy!</span>
        </h1>
      </div>
    </div>
  );
};
