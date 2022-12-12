import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton(props) {
  const { children, type, onClick, className = "" } = props;
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
