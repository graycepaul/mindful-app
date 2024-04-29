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
import { hausaMessages, englishMessages } from "../../messages";
import { IntlProvider, FormattedMessage } from "react-intl";

export const Features = ({ toggleLocale, locale }) => {
  const [selectedImage, setSelectedImage] = useState(OffersImg);

  const imageTexts = {
    [OffersImg]: <FormattedMessage id="OffersImg" />,
    [Community]: <FormattedMessage id="Community" />,
    [Journal]: <FormattedMessage id="Journal" />,
    [Therapy]: <FormattedMessage id="Therapy" />,
    [HelpLine]: <FormattedMessage id="HelpLine" />,
  };

  const handleButtonClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <IntlProvider
      messages={locale === "ha" ? hausaMessages : englishMessages}
      locale={locale}
      defaultLocale="en"
    >
      <main className={style.features}>
        <h2>
          <FormattedMessage id="keyBenefits" />
        </h2>
        <section className={style.featuresCards}>
          <Card
            src={UserIcon}
            title={<FormattedMessage id="Therapy" />}
            text={<FormattedMessage id="Therapy" />}
            className={style.card}
          />
          <Card
            src={SupportIcon}
            title={<FormattedMessage id="HelpLine" />}
            text={<FormattedMessage id="HelpLine" />}
            className={style.card}
          />
          <Card
            src={Resources}
            title={<FormattedMessage id="Journal" />}
            text={<FormattedMessage id="Journal" />}
            className={style.card}
          />
        </section>
        <section className={style.offers} id="offers">
          <div className={style.offersList}>
            <h2>
              <FormattedMessage id="offersHeader" />
            </h2>
            <p>
              <FormattedMessage id="offersDescription" />
            </p>
            <ul>
              <li>
                <button
                  onClick={() => handleButtonClick(OffersImg)}
                  className={style.default}
                >
                  <FormattedMessage id="Goalsbtn" />
                </button>
              </li>
              <li>
                <button onClick={() => handleButtonClick(Community)}>
                  <FormattedMessage id="Communitybtn" />
                </button>
              </li>
              <li>
                <button onClick={() => handleButtonClick(Journal)}>
                  <FormattedMessage id="Journalbtn" />
                </button>
              </li>
              <li>
                <button onClick={() => handleButtonClick(Therapy)}>
                  <FormattedMessage id="Therapybtn" />
                </button>
              </li>
              <li>
                <button onClick={() => handleButtonClick(HelpLine)}>
                  <FormattedMessage id="HelpLinebtn" />
                </button>
              </li>
            </ul>
          </div>
          <div className={style.offersImg}>
            <img src={selectedImage} alt="Selected" />
            {imageTexts[selectedImage]}
          </div>
        </section>
      </main>
    </IntlProvider>
  );
};
