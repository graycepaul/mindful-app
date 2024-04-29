import style from "./articles.module.css";
import { Card } from "../Features/Cards";
import gradientCard from "../../../../assets/images/gradient.png";
import profilePicture from "../../../../assets/images/dp2.png";
import { FormattedMessage } from "react-intl";
import { hausaMessages, englishMessages } from "../../messages";

export const Articles = ({ locale }) => {
  const messages = locale === "ha" ? hausaMessages : englishMessages;

  return (
    <main className={style.healthTips} id="health-tips">
      <h1>
        <FormattedMessage
          id="articlesHeader"
          defaultMessage={messages.articlesHeader}
        />
      </h1>
      <div className={`${style.content} ${style.content1}`}>
        <div>
          <article className={style.article}>
            <div className={style.heading}>
              <FormattedMessage
                id="mindfulTips"
                defaultMessage={messages.mindfulTips}
              />
            </div>
            <h2>
              <FormattedMessage
                id="exerciseBenefitsTitle"
                defaultMessage={messages.exerciseBenefitsTitle}
              />
            </h2>
            <div className={style.profile}>
              <img src={profilePicture} alt="display " />
              <div>
                <p>Loki Bright</p>
                <p className={style.timeStamp}>
                  {messages.articleTimeStamp} • 5min read{" "}
                </p>
              </div>
            </div>
            <h4>
              <FormattedMessage
                id="exerciseBenefitsText"
                defaultMessage={messages.exerciseBenefitsText}
              />
            </h4>
            <a href="#/readMore">
              <FormattedMessage
                id="readMore"
                defaultMessage={messages.readMore}
              />
              &#x2192;
            </a>
          </article>
        </div>
        <div className={style.gradient}>
          <img src={gradientCard} alt="purple gradient" />
        </div>
      </div>
      <article className={style.content}>
        <div>
          <Card
            stamp={messages.articleTimeStamp}
            title={messages.copingMechanismsTitle}
            text={messages.copingMechanismsText}
            btn="Read More &#x2192;"
            className={style.article}
          />
          <Card
            stamp={messages.articleTimeStamp}
            title={messages.foodsTitle}
            text={messages.foodsText}
            btn="Read More &#x2192;"
            className={style.article}
          />
        </div>
        <div>
          <Card
            stamp={messages.articleTimeStamp}
            title={messages.emotionsTitle}
            text={messages.emotionsText}
            btn="Read More &#x2192;"
            className={style.article}
          />
          <Card
            stamp={messages.articleTimeStamp}
            title={messages.bedtimeRoutineTitle}
            text={messages.bedtimeRoutineText}
            btn="Read More &#x2192;"
            className={style.article}
          />
        </div>
      </article>
    </main>
  );
};
