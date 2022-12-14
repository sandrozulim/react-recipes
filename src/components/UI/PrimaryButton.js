import React, { forwardRef } from "react";
import "./PrimaryButton.scss";

const PrimaryButton = forwardRef((props, ref) => {
  const { children, type, onClick, className = "" } = props;
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default PrimaryButton;
