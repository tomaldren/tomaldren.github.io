import React from "react";
import ReactPlayer from "react-player"

function ViewMedia(props) {
  return (
    <div className="main main-container">
      <h1 className="main-title">{props.title}</h1>
      <h2 className="composer">{props.composer}</h2>
      <ReactPlayer className="video"
      width="75%"
      url={props.link}
      />
    </div>
  );
}

export default ViewMedia;
