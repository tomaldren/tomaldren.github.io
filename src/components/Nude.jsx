import React from "react";
import ViewMedia from "./ViewMedia";
import nudeScore from "../img/nude-score.png";

function Nude(props) {
  return (
    <div>
      <ViewMedia title="nude" composer="Radiohead arr. T. Aldren" image={nudeScore} url="https://www.youtube.com/watch?v=3SIDLilQvlw" />
    </div>
  );
}

export default Nude;
