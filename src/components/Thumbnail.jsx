import React from "react";
import { Link } from "react-router-dom";

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <Link to={props.link}>
        <img className="thumbnail-image" src={props.image} alt={props.title} />
        <div className="thumbnail-title">
          <h2>{props.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
