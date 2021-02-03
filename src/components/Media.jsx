import React from "react";
import Grid from "@material-ui/core/Grid";
import Thumbnail from "./Thumbnail";
import roadToBethlehem from "../img/road-to-bethlehem.png";
import piazzolla from "../img/piazzolla.jpg";
import iBelieve from "../img/father-christmas-thumb.png";
import starryNight from "../img/starry-night-thumb.png";
import nude from "../img/nude.png"
import Zoom from "@material-ui/core/Zoom";

function Media(props) {
  return (
    <div className="main">
      <div className="main-container">
        <h1 className="main-title">media</h1>
      </div>
      <Grid container className="media-grid">
        <Zoom in={true} timeout={250}>
          <Grid item xs={12} sm={6} lg={4}>
            <Thumbnail
              link="/nude"
              image={nude}
              title="radiohead: nude"
            />
          </Grid>
        </Zoom>
        <Zoom in={true} timeout={500}>
          <Grid item xs={12} sm={6} lg={4}>
            <Thumbnail
              link="/roadtobethlehem"
              image={roadToBethlehem}
              title="road to bethlehem"
            />
          </Grid>
        </Zoom>
        <Zoom in={true} timeout={750}>
          <Grid item xs={12} sm={6} lg={4}>
            <Thumbnail
              link="/oblivion"
              image={piazzolla}
              title="piazzolla: oblivion"
            />
          </Grid>
          </Zoom>
          <Zoom in={true} timeout={1000}>
          <Grid item xs={12} sm={6} lg={4}>
            <Thumbnail
              link="/ibelieveinfatherchristmas"
              image={iBelieve}
              title='i believe in father christmas'
            />
          </Grid>
          </Zoom>
          <Zoom in={true} timeout={1250}>
          <Grid item xs={12} sm={6} lg={4}>
            <Thumbnail
              link="/starrynight"
              image={starryNight}
              title="it was on a starry night"
            />
          </Grid>
          </Zoom>
      </Grid>
    </div>
  );
}

export default Media;
