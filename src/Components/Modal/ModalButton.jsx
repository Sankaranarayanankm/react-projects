import React, { useState } from "react";
import Modal from "./Modal";

const ModalButton = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <div>
      <button onClick={showModal}>Show Modal</button>
      {show && (
        <Modal close={hideModal}>
          <h1>This is the modal </h1>
          <button onClick={hideModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default ModalButton;
