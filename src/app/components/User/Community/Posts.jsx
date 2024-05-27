import React from "react";
import style from "./community.module.css";
import feedsDp from "../../../../assets/images/feedsDp.png";

import { FaHeart, FaComment, FaShare } from "react-icons/fa";

export const Post = ({ text, className, upload, post }) => {
  return (
    <div className={className}>
      <div className={`${style.postHeader} ${style.flexContainer}`}>
        <img src={feedsDp} alt="user id" />
        <div className={style.postTitle}>
          <h4>Safe space</h4>
          <h5>Young boi</h5>
        </div>
        <p className={style.timeStamp}>1d</p>
      </div>
      <div className={style.postContent}>
        <p>{text}</p>
        {upload && <img src={upload} alt="uploaded" />}
      </div>
      <div className={`${style.PostAnalytics} ${style.flexContainer}`}>
        <button>
          <FaHeart /> Like
        </button>
        <button>
          <FaComment /> Comment
        </button>
        <button>
          <FaShare /> Share
        </button>
      </div>
    </div>
  );
};
