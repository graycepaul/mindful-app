import React from "react";
import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import missionImg from "../../../../assets/images/Rectangle 39463.png";
import missionImg2 from "../../../../assets/images/Rectangle 39464.png";
import stripes from "../../../../assets/images/pinkStripes.png";
import bubbleImg1 from "../../../../assets/images/dp1.png";
import bubbleImg2 from "../../../../assets/images/dp2.png";
import bubbleImg3 from "../../../../assets/images/dp3.png";
import horizontalImg from "../../../../assets/images/Rectangle-peach.png";
import { FormattedMessage } from "react-intl";

export function LandingPage() {
  return (
    <div className={style.landingPage}>
      <section className={style.landingPageCont}>
        <div className={style.leftChatBubble}>
          <img src={bubbleImg2} alt="user profile" />
          <p className={`${style.chatBubble}`}>
            <FormattedMessage id="landingPageTestimonial2" />
          </p>
        </div>
        <div className={style.middleChatBubble}>
          <img src={bubbleImg1} alt="user profile" />
          <p className={`${style.chatBubble}`}>
            <FormattedMessage id="landingPageTestimonial1" />
          </p>
        </div>
        <div className={style.hero}>
          <h1>
            <FormattedMessage id="landingPageTitle" />
            <span>
              <FormattedMessage id="landingPageTitleSpan" />
            </span>
          </h1>
          <p>
            <FormattedMessage id="landingPageDescription" />
          </p>
          <Link to="./signup" className={style.callToAction}>
            <FormattedMessage id="landingPageCTA" /> &#x2192;
          </Link>
        </div>
        <div className={style.rightChatBubble}>
          <p className={`${style.chatBubble}`}>
            <FormattedMessage id="landingPageTestimonial3" />
          </p>
          <img src={bubbleImg3} alt="user profile" />
        </div>
      </section>
      <section className={style.description}>
        <div className={style.descriptionContent} id="about">
          <div className={style.mission}>
            <h2>
              <FormattedMessage id="landingPageWhyMindful" />
            </h2>
            <p>
              <FormattedMessage id="landingPageMissionDescription" />
            </p>
            <Link to="./about">
              <FormattedMessage id="aboutUs" />
            </Link>
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
      </section>
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
