import React from "react";
import { FaSpinner } from "react-icons/fa";
import "./Spinner.scss";

function Spinner() {
  return (
    <div className="spinner-container">
      <FaSpinner className="spinner" />
    </div>
  );
}

export default Spinner;
