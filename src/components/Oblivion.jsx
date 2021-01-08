import React from "react";
import ViewMedia from "./ViewMedia";
import oblivion from "../img/oblivion.png";

function Oblivion(props) {
  return (
    <div>
      <ViewMedia title="oblivion" composer="Piazzolla arr. T. Aldren" image={oblivion} url="https://www.youtube.com/watch?v=CWWGrdnDbPE&feature=youtu.be" />
    </div>
  );
}

export default Oblivion;
