import React from "react";
import style from "./community.module.css";
import Likes from "../../../../assets/icons/HeartStraight.png";
import Comment from "../../../../assets/icons/HeartStraight.png";
import Share from "../../../../assets/icons/HeartStraight.png";

import LikesCount from "../../../../assets/icons/HeartStraight.png";

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

// import React, { useState } from "react";
// import { FaHeart, FaComment } from "react-icons/fa";
// import style from "./Posts.module.css";

// const Post = ({ pic, title, name, text, likes, comments, upload, onLike, onComment, onImageUpload }) => {
//   const [commentText, setCommentText] = useState("");

//   const handleCommentChange = (e) => {
//     setCommentText(e.target.value);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (commentText.trim() !== "") {
//       onComment(commentText);
//       setCommentText("");
//     }
//   };

//   return (
//     <div className={style.post}>
//       <div className={style.postHeader}>
//         <img src={pic} alt="user profile" />
//         <div>
//           <h3>{title}</h3>
//           <p>{name}</p>
//         </div>
//       </div>
//       <div className={style.postContent}>
//         <p>{text}</p>
//         {upload && <img src={upload} alt="uploaded" />}
//       </div>
//       <div className={style.postActions}>
//         <button onClick={onLike}><FaHeart /> Like ({likes})</button>
//         <button><FaComment /> Comment ({comments.length})</button>
//       </div>
//       <div className={style.comments}>
//         {comments.map((comment, index) => (
//           <div key={index} className={style.comment}>
//             <p>{comment}</p>
//           </div>
//         ))}
//       </div>
//       <form className={style.commentForm} onSubmit={handleCommentSubmit}>
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={commentText}
//           onChange={handleCommentChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export { Post };
