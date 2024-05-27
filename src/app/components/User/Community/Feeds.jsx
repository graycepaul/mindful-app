import React from "react";
import style from "./community.module.css";
import { FaUser } from "react-icons/fa";

export const Feed = ({ pic, title, text, className }) => {
  return (
    <div className={style.feedsContainer}>
      <div>
        <div className={className}>
          <img src={pic} alt="user id" />
          <div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </div>
        <div className={`${className} ${style.followers}`}>
          <a href="#/followers">
            <FaUser className={style.followersIcon} />
          </a>
          <p className={style.followersCount}>10k</p>
          <div>
            <a href="/#">View</a>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};
