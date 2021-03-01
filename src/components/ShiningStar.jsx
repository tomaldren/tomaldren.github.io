import React from "react";
import ViewMedia from "./ViewMedia";
import shiningStar from "../img/shining-star-score.png";

function ShiningStar(props) {
  return (
    <div>
      <ViewMedia title="shining star" composer="Earth, Wind & Fire arr. T. Aldren" image={shiningStar} url="https://www.youtube.com/watch?v=_9fcpvNYBbA" />
    </div>
  );
}

export default ShiningStar;
