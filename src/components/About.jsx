import React from "react";
import HeadsetIcon from "@material-ui/icons/Headset";

function About(props) {
  return (
    <div className="main">
      <div className="main-container">
        <h1 className="main-title">about</h1>
        <p className="body-text about-comment">
          Traction Music is run by Thomas Aldren, a London-based freelance
          musician.
        </p>
        <p className="icon">
          <HeadsetIcon className="headphone-icon" fontSize="large" />
        </p>
        <p className="body-text about-text">
          Tom graduated from King's College London with 1st Class Hons in 2014,
          with a particular focus on techniques of composition. Following
          master's degrees in performance in both London and Munich, he has
          combined a career as a concert violinist with providing arrangements
          for a wide range of clients, which have been performed in concerts and
          festivals across the UK and Europe. <br />
          Performing highlights include concerts as co-leader of the BBC
          Symphony and Bergen Philharmonic Orchestras, as Principal Second
          Violin of the Bournemouth Symphony Orchestra, and chamber music
          performances live on Radio 3 and in major concert halls in the UK and
          Europe. He has also performed with artists such as Burt Bacharach,
          Quincy Jones, Father John Misty and Freddie McGregor in venues from
          Ronnie Scott's and Hammersmith Apollo to Glastonbury. His experience
          across a huge range of musical genres gives him huge versatility when
          it comes to arranging music, and his portfolio encompasses an eclectic
          mix of styles and instrumentation.
        </p>
        <p className="icon">
          <HeadsetIcon className="headphone-icon" fontSize="large" />
        </p>
        <h2 className="home-contact-container about-contact home-subtitle">
          For more information,
          <a href="mailto:info@tractionmusic.co.uk" className="home-contact-link">
            {" "}
            contact us{" "}
          </a>
          with your enquiry
        </h2>
      </div>
    </div>
  );
}

export default About;
