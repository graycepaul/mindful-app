import React, { useState, useEffect } from "react";
import { Feed } from "./Feeds";
import minionDp from "../../../../assets/images/minionDp.png";
import foodDp from "../../../../assets/images/foodDp.png";
import landscapeDp from "../../../../assets/images/landscapeDp.png";
import seaDp from "../../../../assets/images/seaDp.png";
import abstractDp from "../../../../assets/images/abstractDp.png";
import postImg from "../../../../assets/images/postImg.png";
import feedsDp from "../../../../assets/images/feedsDp.png";
import coverPhoto from "../../../../assets/images/coverPhoto.png";
import { FaUser } from "react-icons/fa";
import style from "./community.module.css";
import { Post } from "./Posts";
import { UserNav } from "../UserNav";
import { CustomModal } from "./Modal";

export const Community = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={style.userPage}>
      <UserNav className={style.navBar} />
      <div className={`${style.communities} ${style.flexContainer}`}>
        <div className={style.myCommunity}>
          <h2>&#60; My Feeds</h2>
          <button onClick={openModal}>+ Post</button>
          <CustomModal isOpen={modalIsOpen} closeModal={closeModal} />{" "}
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
        </div>{" "}
        <div className={style.UserFeeds}>
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
            <div className={`${style.newPost} ${style.flexContainer}`}>
              <span id={style.userIcon}>
                <FaUser />
              </span>
              <input
                type="text"
                name="new-feed"
                id="new-feed"
                placeholder='Post "anonymously"'
              />
            </div>
            <div className={style.postsHistory}>
              <Post
                pic={feedsDp}
                title="Safe space"
                name="Young boi"
                text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support... read more"
              />
              <Post
                pic={feedsDp}
                title="Safe space"
                name="Young boi"
                text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support... read more"
              />{" "}
              <Post
                pic={feedsDp}
                title="Safe space"
                name="Young boi"
                text="By understanding stress, identifying triggers, developing healthy coping strategies, practicing persistence, and seeking professional support... read more"
                upload={postImg}
              />
            </div>
          </div>
        </div>{" "}
        <div className={style.forYou}>
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
        </div>
      </div>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa";
// import style from "./userPage.module.css";
// import { Post } from "./Posts";
// import { UserNav } from "./UserNav";

// export const UserPage = () => {
//   const [newChat, setNewChat] = useState("");
//   const [posts, setPosts] = useState([]);

//   // Load posts from localStorage on component mount
//   useEffect(() => {
//     const storedPosts = JSON.parse(localStorage.getItem("posts"));
//     console.log("Retrieved posts from localStorage:", storedPosts);
//     if (storedPosts) {
//       setPosts(storedPosts);
//     }
//   }, []);

//   // Save posts to localStorage whenever posts state changes
//   useEffect(() => {
//     console.log("Saving posts to localStorage:", posts);
//     localStorage.setItem("posts", JSON.stringify(posts));
//   }, [posts]);

//   const handleNewChat = (e) => {
//     setNewChat(e.target.value);
//   };

//   const handleNewChatSubmit = () => {
//     if (newChat.trim() !== "") {
//       const newPost = {
//         id: Date.now(),
//         pic: feedsDp,
//         title: "Safe Space",
//         name: "Anonymous",
//         text: newChat,
//         likes: 0,
//         comments: [],
//         upload: null,
//         timestamp: new Date().toLocaleString(), // Add timestamp
//       };
//       setPosts([newPost, ...posts]);
//       setNewChat("");
//     }
//   };

//   const handleLike = (postId) => {
//     const updatedPosts = posts.map((post) =>
//       post.id === postId ? { ...post, likes: post.likes + 1 } : post
//     );
//     setPosts(updatedPosts);
//   };

//   const handleComment = (postId, comment) => {
//     const updatedPosts = posts.map((post) =>
//       post.id === postId
//         ? { ...post, comments: [...post.comments, comment] }
//         : post
//     );
//     setPosts(updatedPosts);
//   };

//   const handleImageUpload = (postId, image) => {
//     const updatedPosts = posts.map((post) =>
//       post.id === postId ? { ...post, upload: image } : post
//     );
//     setPosts(updatedPosts);
//   };

//   return (
//     <div className={style.userPage}>
//       <UserNav className={style.navBar} />
//       <div className={style.communities}>
//         <div className={style.myCommunity}>
//           <button>+ Post</button>
//           <div className={style.members}>
//             <h3>My Community</h3>
//             <div>
//               <img src={feedsDp} alt="user id" />
//               <p>Safe space</p>{" "}
//             </div>
//             <div>
//               <img src={feedsDp} alt="user id" />
//               <p>Safe space</p>
//             </div>
//             <div>
//               <img src={feedsDp} alt="user id" />
//               <p>Safe space</p>
//             </div>
//           </div>
//         </div>
//         <div className={style.UserFeeds}>
//           <input
//             type="text"
//             placeholder="Start a new chat"
//             value={newChat}
//             onChange={handleNewChat}
//           />
//           <button onClick={handleNewChatSubmit}>Submit</button>
//           <div className={style.userPosts}>
//             {/* User posts section */}
//             {posts.map((post) => (
//               <Post
//                 key={post.id}
//                 pic={post.pic}
//                 title={post.title}
//                 name={post.name}
//                 text={post.text}
//                 likes={post.likes}
//                 comments={post.comments}
//                 upload={post.upload}
//                 timestamp={post.timestamp}
//                 onLike={() => handleLike(post.id)}
//                 onComment={(comment) => handleComment(post.id, comment)}
//                 onImageUpload={(image) => handleImageUpload(post.id, image)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className={style.forYou}>
//           <h2>Communities for you</h2>
//           <h4>Explore All</h4>
//           {/* Placeholder content for Communities for you section */}
//           <div>
//             <img src={minionDp} alt="Community" />
//             <p>The Work-life Family</p>
//           </div>
//           <div>
//             <img src={foodDp} alt="Community" />
//             <p>The Work-life Family</p>
//           </div>
//           <div>
//             <img src={landscapeDp} alt="Community" />
//             <p>The Work-life Family</p>
//           </div>
//           <div>
//             <img src={seaDp} alt="Community" />
//             <p>The Work-life Family</p>
//           </div>
//           <div>
//             <img src={abstractDp} alt="Community" />
//             <p>The Work-life Family</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
