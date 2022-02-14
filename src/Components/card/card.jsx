import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import avatarInfo from "../../source/data";
import "../card/cardCss.css";

class Card extends React.Component {
  render() {
    return avatarInfo.map((item) => (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
        <div className="card-box" key={item.id}>
          <div className="card-position">
            <div className="avatar">{item.avatar}</div>
            <h3 className="title">
              {item.name}
              <br />
              {item.surname}
            </h3>
            <p className="paragraph">{item.description}</p>
            <button className="card-button">
              Press
              <AiOutlineLike className="like-icon" />
            </button>
          </div>
          <div
            className="card-content-container"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.url})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          ></div>
        </div>
      </div>
    ));
  }
}

export default Card;
