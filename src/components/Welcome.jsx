import React from "react";
import altTitle from "../img/alt-title-img.png";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";

function Welcome(props) {
  return (
    <Fade in={true} timeout={6000}>
    <div className="welcome-container">
      <Fade in={true} timeout={5000} style={{ transitionDelay: 1000 }}>
      <h1 className="title">traction.</h1>
      </Fade>
      <div className="crop-title-img">
        <img src={altTitle} alt="title" className="title-img" />
      </div>
      <Slide
          in={true}
          direction="left"
          style={{ transitionDelay: 4000 }}
          timeout={4000}
        >
      <h2 className="subtitle">
        Bespoke musical arrangements from conception to post-production
      </h2>
      </Slide>
    </div>
    </Fade>
  );
}

export default Welcome;
