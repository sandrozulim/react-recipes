import React from "react";
import food from "../../assets/food.jpg";
import "./Home.scss";

function Home() {
  return (
    <figure className="main-image">
      <img src={food} alt="food on the table" />
    </figure>
  );
}

export default Home;
