import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import missionImg from "../../../../assets/images/Rectangle 39463.png";
import missionImg2 from "../../../../assets/images/Rectangle 39464.png";
import stripes from "../../../../assets/images/pinkStripes.png";
import bubbleImg1 from "../../../../assets/images/dp1.png";
import bubbleImg2 from "../../../../assets/images/dp2.png";
import bubbleImg3 from "../../../../assets/images/dp3.png";
import horizontalImg from "../../../../assets/images/Rectangle-peach.png";

export function LandingPage() {
  return (
    <div className={style.landingPage}>
      <div className={style.landingPageCont}>
        <div className={style.leftChatBubble}>
          <img src={bubbleImg2} alt="user profile" />
          <p className={`${style.chatBubble}`}>
            Mindful app was my guiding light in recovery. Daily meditations and
            kept me focused
          </p>
        </div>
        <div className={style.middleChatBubble}>
          <img src={bubbleImg1} alt="user profile" />
          <p className={`${style.chatBubble}`}>
            Mindful app changed my game in battling addiction.
          </p>
        </div>
        <div className={style.hero}>
          <h1>
            Revolutionizing Mental <span>Wellness</span>
          </h1>
          <p>Cultivating Supportive Community for Sustainable Recovery</p>
          <Link to="./signup" className={style.callToAction}>
            Get started for free &#x2192;
          </Link>
        </div>
        <div className={style.rightChatBubble}>
          <p className={`${style.chatBubble}`}>
            Grateful for the community and empowerment it brings to my recovery
            journey.
          </p>
          <img src={bubbleImg3} alt="user profile" />
        </div>
      </div>
      <div className={style.description}>
        <div className={style.descriptionContent} id="about">
          <div className={style.mission}>
            <h2>Why Mindful?</h2>
            <p>
              Mindful is an innovative initiative focused on addressing drug
              addiction and health issues in the North-West region of Nigeria,
              particularly Katsina State
            </p>
            <Link to="./about">About Us</Link>
          </div>
          <div className={style.imageCards}>
            <img src={missionImg} alt="support group" />
            <div className={style.missionImg}>
              <img
                src={stripes}
                alt="decoration"
                className={style.ImgDecoration}
              />
              <img src={missionImg2} alt="smiling lady" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={horizontalImg}
          alt="orange rectangle"
          className={style.rectangle}
        />
      </div>
    </div>
  );
}
