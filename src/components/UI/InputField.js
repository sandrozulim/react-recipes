import React, { forwardRef } from "react";
import "./InputField.scss";

const InputField = forwardRef((props, ref) => {
  const { className = "", type, placeholder, value, onChange, icon } = props;
  return (
    <>
      <div className={`input-field ${className}`}>
        <span className="input-field__icon">{icon}</span>
        <input
          className="input-field__input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
        />
      </div>
    </>
  );
});

export default InputField;
