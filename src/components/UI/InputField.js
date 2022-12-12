import React from "react";
import "./InputField.scss";

function InputField({
  className = "",
  type,
  placeholder,
  value,
  onChange,
  icon,
}) {
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
        />
      </div>
    </>
  );
}

export default InputField;
