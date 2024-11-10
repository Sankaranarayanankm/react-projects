import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
const Backdrop = ({ close }) => {
  return <div onClick={() => close()} className="backdrop" />;
};

const Overlay = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

const Modal = ({ children, close }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop close={close} />
      <Overlay>{children}</Overlay>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
