import React from "react";
import food from "../../assets/food.jpg";
import "./Home.scss";

function Home() {
  return (
    <section className="main-image">
      {<img src={food} alt="food on the table" />}
    </section>
  );
}

export default Home;
