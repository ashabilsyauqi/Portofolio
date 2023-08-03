import React, { useState } from "react";
import Modal from 'react-modal';
import bootstrap from '../Images/bootstrap.png'

export default function ModalCard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      width: "400px", // Ganti ukuran modal di sini
      height: "450px", // Ganti ukuran modal di sini
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
        padding:"0",
        margin:"0"
    },
  };
  return (
    <div>
      <button onClick={openModal} className="closeSymbol">Click me!</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false} // tambahkan properti ini untuk meningkatkan aksesibilitas
        style={customStyles}
      >

      <div className="p-3 d-flex justify-content-center align-items-center h-modal  text-center bg-warnin flex-column gap-5">
      <h2>This is React Modal Components</h2>
      {/* <a href="https://getbootstrap.com/" rel="noreferrer" target='_blank' >
            <img src={bootstrap} alt="promo" width={300}/>
         
        </a> */}
      </div>
    

      </Modal>
    </div>
  );
}
