import React from "react";

function ViewAudio(props) {
return (
<div className="main main-container">
<h1 className="main-title">{props.title}</h1>
<h2 className="composer">{props.composer}</h2>
<audio className="audio-player" controls src={props.audio}>
  Your browser does not support the
  <code>audio</code> element.
</audio>
</div>
)
}

export default ViewAudio;
