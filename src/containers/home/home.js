import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="row start-xs">
        <div className="col-xs-12 position-center">
          <h1 className="intro-title-center">
            Par kopā būšanu ar Draugiem un Ģimeni
          </h1>
          <p className="intro-paragraph-align">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical
            <br /> Latin literature from 45 BC, making it over 2000 years old.
            <br />
            <a href="www.google.lv" className="hero-btn">
              Sanākam
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
