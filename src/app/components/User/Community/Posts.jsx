import React from "react";
import style from "./community.module.css";
// import Likes from "../../../../assets/icons/HeartStraight.png";
// import Comment from "../../../../assets/icons/HeartStraight.png";
// import Share from "../../../../assets/icons/HeartStraight.png";

// import LikesCount from "../../../../assets/icons/HeartStraight.png";

import { FaUser, FaHeart, FaComment, FaShare } from "react-icons/fa";

export const Post = ({ pic, title, text, name, className, upload }) => {
  return (
    <div className={className}>
      <div className={`${style.postHeader} ${style.flexContainer}`}>
        <img src={pic} alt="user id" />
        <div className={style.postTitle}>
          <h4>{title}</h4>
          <h5>{name}</h5>
        </div>
        <p>1d</p>
      </div>
      <div className={style.postContent}>
        <p>{text}</p>
        {upload && <img src={upload} alt="uploaded" />}{" "}
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
