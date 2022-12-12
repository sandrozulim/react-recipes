import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

function Backdrop({ onClose }) {
  return <div onClick={onClose} className="backdrop"></div>;
}

function Overlay({ children }) {
  return <div className="modal">{children}</div>;
}

function Modal({ children, onClose }) {
  const overlayEl = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, overlayEl)}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, overlayEl)}
    </>
  );
}

export default Modal;
