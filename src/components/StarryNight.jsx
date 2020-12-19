import React from "react";
import ViewMedia from "./ViewMedia";
import starryNight from "../img/starry-night.png";

function StarryNight(props) {
  return (
    <div>
      <ViewMedia title="it was on a starry night" composer="Webb arr. T. Aldren" image={starryNight} link="https://www.youtube.com/watch?v=Hw9uMcIqIuk" />
    </div>
  );
}

export default StarryNight;
