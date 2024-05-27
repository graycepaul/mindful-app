import React, { useState, useEffect } from "react";
import { Feed } from "./Feeds";
import minionDp from "../../../../assets/images/minionDp.png";
import foodDp from "../../../../assets/images/foodDp.png";
import feedsDp from "../../../../assets/images/feedsDp.png";
import landscapeDp from "../../../../assets/images/landscapeDp.png";
import seaDp from "../../../../assets/images/seaDp.png";
import abstractDp from "../../../../assets/images/abstractDp.png";
import postImg from "../../../../assets/images/postImg.png";
import coverPhoto from "../../../../assets/images/coverPhoto.png";
import { FaUser } from "react-icons/fa";
import style from "./community.module.css";
import { Post } from "./Posts";
import { UserNav } from "../UserNav";
import { CustomModal } from "./Modal";

export const Community = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={style.userPage}>
      <header>
        <UserNav className={style.navBar} />
      </header>
      <main className={`${style.communities} ${style.flexContainer}`}>
        <section className={style.myCommunity}>
          <h2>&#60; My Feeds</h2>
          <button onClick={openModal}>+ Post</button>
          <CustomModal
            isOpen={modalIsOpen}
            closeModal={closeModal}
            addPost={addPost}
          />{" "}
          <div className={style.communityTopics}>
            <h3>My Community</h3>
            <div className={`${style.communityList} ${style.flexContainer}`}>
              <img src={feedsDp} alt="user id" />
              <p>Safe space</p>
            </div>
            <div className={`${style.communityList} ${style.flexContainer}`}>
              <img src={feedsDp} alt="user id" />
              <p>Soda Overcomers</p>
            </div>
            <div className={`${style.communityList} ${style.flexContainer}`}>
              <img src={feedsDp} alt="user id" />
              <p>Soda Overcomers</p>
            </div>
          </div>
        </section>
        <section className={style.UserFeeds}>
          <div className={style.userPosts}>
            <div>
              <img
                src={coverPhoto}
                alt="flower portrait"
                className={style.coverPhoto}
              />
              <div className={`${style.userProfile} ${style.flexContainer}`}>
                <div>
                  <h2>Safe Space</h2>
                  <p>30K members</p>
                </div>
                <button>Leave</button>
              </div>
            </div>
            <div className={style.postsHistory}>
              {posts.length > 0
                ? posts.map((post, index) => <Post key={index} text={post} />)
                : ""}
              <Post text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support... read more" />
              <Post text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support... read more" />
              <Post
                text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support... read more"
                upload={postImg}
              />
            </div>
          </div>
        </section>
        <section className={style.forYou}>
          <div className={style.forYouHeader}>
            <h2>Communities for you</h2>
            <h4>Explore All &#x2192;</h4>
          </div>
          <div className={style.feeds}>
            <Feed
              pic={minionDp}
              title="The Work-life Family"
              text="By understanding stress, identify triggers, developing healthy and t..."
              className={`${style.forYouPost} ${style.flexContainer}`}
            />
            <Feed
              pic={foodDp}
              title="The Work-life Family"
              text="By understanding stress, identify triggers, developing healthy and t..."
              className={`${style.forYouPost} ${style.flexContainer}`}
            />{" "}
            <Feed
              pic={landscapeDp}
              title="The Work-life Family"
              text="By understanding stress, identify triggers, developing healthy and t..."
              className={`${style.forYouPost} ${style.flexContainer}`}
            />
            <Feed
              pic={seaDp}
              title="The Work-life Family"
              text="By understanding stress, identify triggers, developing healthy and t..."
              className={`${style.forYouPost} ${style.flexContainer}`}
            />
            <Feed
              pic={abstractDp}
              title="The Work-life Family"
              text="By understanding stress, identify triggers, developing healthy and t..."
              className={`${style.forYouPost} ${style.flexContainer}`}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
