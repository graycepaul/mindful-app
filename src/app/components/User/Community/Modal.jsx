import React from "react";
import ReactModal from "react-modal";
import style from "./community.module.css";

export const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      contentLabel="Example Modal"
      className={style.modal} // Assign class to modal content
      overlayClassName={style.overlay} // Assign class to overlay
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
          cols="300"
          rows="4"
          placeholder="How do i get over the urge of smoking please?"
        ></textarea>
        <br />
        <button>POST</button>
      </form>
    </ReactModal>
  );
};
