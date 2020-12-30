import React from "react";
import Welcome from "./Welcome";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";
import Footer from "./Footer";
import usePersistedState from "./usePersistedState";

function App() {

  const [clicked, setClicked] = usePersistedState("clicked", false);

  function handleClick() {
    setClicked(true);
  }

  if (clicked === false) {
    return (
      <div className="welcome main">
        <Welcome />
        <Box display="flex" justifyContent="center">
          <Zoom in={true} style={{ transitionDelay: 9000 }} timeout={2000}>
          <Fab
            variant="extended"
            className="continue"
            size="medium"
            onClick={handleClick}
          >
            <p className="button-text">Continue to site </p>
          </Fab>
          </Zoom>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
