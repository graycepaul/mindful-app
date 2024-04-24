import style from "./healthtips.module.css";
import { Card } from "../Features/Cards";
import gradientCard from "../../../../assets/images/gradient.png";
import profilePicture from "../../../../assets/images/dp2.png";
export const Tips = () => {
  return (
    <div className={style.healthTips} id="health-tips">
      <h1>Healthy Tips For You</h1>
      <div className={`${style.content} ${style.content1}`}>
        <div>
          <div className={style.article}>
            <div className={style.heading}>MINDFUL TIPS</div>
            <h2>Benefits of regular exercise for addiction recovery.</h2>
            <div className={style.profile}>
              <img src={profilePicture} alt="display " />
              <div>
                <p>Loki Bright</p>
                <p className={style.timeStamp}>Oct 19, 2021 • 5min read </p>
              </div>
            </div>
            <h4>
              Regular exercise offers numerous benefits for individuals in
              addiction recovery, including improvements in physical health,
              mood enhancement, cognitive function, relapse prevention, and
              social support.
            </h4>
            <a href="#/readMore">Read More &#x2192;</a>
          </div>
        </div>
        <div className={style.gradient}>
          <img src={gradientCard} alt="purple gradient" />
        </div>
      </div>

      <div className={style.content}>
        <div>
          <Card
            stamp="Oct 19, 2021"
            title="Building healthy coping mechanisms to deal with stressors"
            text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support when needed, individuals can effectively navigate challenges and build resilience on their journey to recovery."
            btn="Read More &#x2192;"
            className={style.article}
          />
          <Card
            stamp="Oct 19, 2021"
            title="Foods that support physical and mental health"
            text="Consuming a diet rich in whole grains, fruits, vegetables, healthy fats, lean proteins, and probiotic-rich foods provides essential nutrients that support physical and mental health."
            btn="Read More &#x2192;"
            className={style.article}
          />
        </div>
        <div>
          <Card
            stamp="Oct 19, 2021"
            title="Identifying and managing emotions without turning to substances"
            text="By developing awareness of emotional experiences, exploring underlying causes, and adopting healthy coping strategies, individuals can effectively regulate their emotions, reduce the risk of relapse, and enhance their overall well-being on the..."
            btn="Read More &#x2192;"
            className={style.article}
          />
          <Card
            stamp="Oct 19, 2021"
            title="Creating a relaxing bedtime routine"
            text="This involves choosing activities that promote relaxation, consistency in performing these activities each night, creating a relaxing sleep environment, and incorporating relaxation techniques to prepare the body and mind for sleep."
            btn="Read More &#x2192;"
            className={style.article}
          />
        </div>
      </div>
    </div>
  );
};
