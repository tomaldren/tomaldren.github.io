import React from "react";
import ViewMedia from "./ViewMedia";
import roadToBethlehem from "../img/road-to-bethlehem.png";

function RoadToBethlehem(props) {
  return (
    <div>
      <ViewMedia title="road to bethlehem" composer="Head & Rose arr. T. Aldren" image={roadToBethlehem} url="https://www.youtube.com/watch?v=VX7ZGXm2FzU" />
    </div>
  );
}

export default RoadToBethlehem;
