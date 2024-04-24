import React, { useState } from "react";
import style from "./features.module.css";
import { Card } from "./Cards";
import UserIcon from "../../../../assets/icons/Users.png";
import SupportIcon from "../../../../assets/icons/Headset.png";
import Resources from "../../../../assets/icons/BriefcaseMetal.png";
import OffersImg from "../../../../assets/images/offers.png";
import Community from "../../../../assets/images/friendlyCommunity.png";
import Journal from "../../../../assets/images/MentalJournal.png";
import Therapy from "../../../../assets/images/therapySession.png";
import HelpLine from "../../../../assets/images/helpLine.png";
import ChatBubble from "../../../../assets/icons/chat.png";

export const Features = () => {
  const [selectedImage, setSelectedImage] = useState(OffersImg); // Default to OffersImg

  const imageTexts = {
    [OffersImg]:
      "Set daily, weekly or monthly achievable goals and track your progress",
    [Community]: "Connect with peers, share experiences, and offer support.",
    [Journal]: "Document thoughts and feelings for self-reflection",
    [Therapy]: "Access virtual therapy sessions with licensed professionals",
    [HelpLine]: "Get immediate support from trained crisis counselors",
  };

  const handleButtonClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={style.features}>
      <h2>Key Benefits</h2>
      <div className={style.featuresCards}>
        <Card
          src={UserIcon}
          title="Virtual Therapy Sessions"
          text="Access licensed therapists through video calls or chat for personalized support, anytime, anywhere."
          className={style.card}
        />
        <Card
          src={SupportIcon}
          title="24/7 Support"
          text="Get round-the-clock assistance, guidance, and empathy whenever needed, ensuring you're never alone in your journey."
          className={style.card}
        />
        <Card
          src={Resources}
          title="Personalized Resources"
          text="Receive tailored recommendations, including guided meditations, coping strategies, and educational materials, based on your unique needs and preferences."
          className={style.card}
        />
      </div>
      <div className={style.offers} id="offers">
        <div className={style.offersList}>
          <h2>What Mindful Offers</h2>
          <p>Where Learning Transforms into Success Stories</p>
          <ul>
            <li>
              <button
                onClick={() => handleButtonClick(OffersImg)}
                className={style.default}
              >
                Goal
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick(Community)}>
                Friendly Community
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick(Journal)}>
                Mental Journal
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick(Therapy)}>
                Therapy Session
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick(HelpLine)}>
                24/7 Helpline
              </button>
            </li>
          </ul>
        </div>
        <div className={style.offersImg}>
          <img src={selectedImage} alt="Selected" />
          {selectedImage === OffersImg && <span>{imageTexts[OffersImg]}</span>}
          {selectedImage === Community && <span>{imageTexts[Community]}</span>}
          {selectedImage === Journal && <span>{imageTexts[Journal]}</span>}
          {selectedImage === Therapy && <span>{imageTexts[Therapy]}</span>}
          {selectedImage === HelpLine && <span>{imageTexts[HelpLine]}</span>}
        </div>{" "}
      </div>
    </div>
  );
};
