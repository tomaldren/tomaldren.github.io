import React from "react";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import HeadsetIcon from "@material-ui/icons/Headset";

function Home(props) {
  return (
    <div className="main">
      <div className="main-container">
      <Slide
      in={true}
      direction="right"
      timeout={2000}
      >
        <Grid item sm={12} md={6}>
          <h1 className="main-title">
            we provide musical arrangements and recordings to meet your
            requirements.
          </h1>
        </Grid>
        </Slide>
        <p className="body-text home-comment">
          From the conception of your idea to its performance and production,
          we've got you covered each step of the way.
        </p>
      </div>
      <div className="fade-background">
        <hr className="dotted-line" />
        <div className="main-container">
          <h2 className="home-subtitle">Our bespoke service includes:</h2>
          <ul className="body-text home-list">
            <li>
              Composition of entirely new music, or additional instrumental lines
              for completed pieces
            </li>
            <li className="icon">
              <HeadsetIcon className="headphone-icon" fontSize="large" />
            </li>
            <li>
              Vibrant and innovative arrangements for any ensemble, from solo
              instruments to full orchestra and any combination in between
            </li>
            <li className="icon">
              <HeadsetIcon className="headphone-icon" fontSize="large" />
            </li>
            <li>
              Recording of instrumental tracks by top London-based session
              musicians
            </li>
            <li className="icon">
              <HeadsetIcon className="headphone-icon" fontSize="large" />
            </li>
            <li>
              Post-production as required - we can send raw recorded material as
              separate tracks, or mixed and packaged as a single audio file
            </li>
            <li className="icon">
              <HeadsetIcon className="headphone-icon" fontSize="large" />
            </li>
            <li>
              In order to distribute an arrangement or recording for commercial
              use, the copyright of the original musical work must be respected.
              We will contact the copyright owner as required and arrange for
              permission of any arrangements we make. Any related fees will be
              added to our quote
            </li>
          </ul>
        </div>
        <hr className="dotted-line" />
      </div>
      <div className="main-container">
        <p className="home-comment body-text">
          Every step is completed in-house and comes as a package, cutting out
          the difficulties of finding an arranger, musicians, a studio and a
          producer.
        </p>
        <div className="home-contact-container">
          <h2 className="home-subtitle">
            For pricing and more information,
            <a href="mailto:info@tractionmusic.co.uk" className="home-contact-link">
              {" "}
              contact us{" "}
            </a>
            with your project details
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
