import React, { useState } from "react";
import ReactModal from "react-modal";
import style from "./community.module.css";

export const CustomModal = ({ isOpen, closeModal, addPost }) => {
  const [userInput, setUserInput] = useState("");

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    addPost(userInput);
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      contentLabel="Example Modal"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <button className={style.modalButton} onClick={closeModal}>
        X
      </button>
      <h1 className={style.modalTitle}>Create a post</h1>
      <hr />
      <form>
        <label htmlFor="visibility">Posting in:</label>
        <select name="visibility" id="visibility">
          <option value="general">general</option>
        </select>
        <br />
        <textarea
          name="post"
          id="post"
          cols="40"
          rows="9"
          onChange={handleInput}
          placeholder="How do i get over the urge of smoking please?..."
        ></textarea>
        <br />
        <button type="submit" onClick={handleAddPost}>
          POST
        </button>
      </form>
    </ReactModal>
  );
};
