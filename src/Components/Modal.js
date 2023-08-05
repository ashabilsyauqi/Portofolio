import React, { useState } from "react";
import Modal from 'react-modal';
import { AiFillQuestionCircle } from "react-icons/ai";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "400px",
    height: "400px",
    padding: "20px",
    border: "2px solid #292929",
    borderRadius: "15px",
    boxShadow: "15px 15px 0px #292929",
    backgroundColor: "#fff",
    margin: "auto", // To center the modal horizontally
  },
};

export default function MyModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="modal-button">
        <AiFillQuestionCircle />
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >


        <h2>Welcome to My Website</h2>
        <p>This is a modal popup displayed when the button is clicked.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>



        
      </Modal>
    </div>
  );
}
