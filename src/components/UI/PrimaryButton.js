import React, { forwardRef } from "react";
import "./PrimaryButton.scss";

const PrimaryButton = forwardRef((props, ref) => {
  const { children, type, onClick, className = "", disabled } = props;
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default PrimaryButton;
