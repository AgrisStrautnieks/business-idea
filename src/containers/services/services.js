import React from "react";
import Card from "../../Components/card/card";
import "./services.css";

const Services = () => {
  return (
    <div className="gradient-background">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className="services-main-title">Produkti</h1>
        </div>
      </div>
      <div className="row center-xs">
        <Card />
      </div>
    </div>
  );
};

export default Services;
