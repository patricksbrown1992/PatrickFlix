import React from "react";
import { Link } from "react-router-dom";

const DetailRowForm = ({ vid }) => {
  return (
    <div className="detail-row-show">
      <div className="left-show-div">
        <Link to={`/player/${vid.id}`}>
          <i className="fas fa-play" id="play-button-detail"></i>
        </Link>
        <h1 className="hidden-video-h1">{vid.title}</h1>
        <h3 className="hidden-video-h3">{vid.description}</h3>
      </div>

      <div
        className="left-div-hidden"
        style={{
          backgroundImage: `url(${vid.image_link}), linear-gradient(to right,#000,transparent)`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
};
export default DetailRowForm;
