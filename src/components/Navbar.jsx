import React from "react";
import About from "./About";
import Contact from "./Contact";
import Media from "./Media";
import Home from "./Home";
import RoadToBethlehem from "./RoadToBethlehem";
import Oblivion from "./Oblivion";
import IBelieve from "./IBelieve";
import StarryNight from "./StarryNight";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "@material-ui/core/Fade";
import logo from "../img/logo.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <BrowserRouter>
      <div>
        <Hidden smDown>
          <Link to="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>
          <div className="navigation nav-text">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/media" className="nav-link">
              Media
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="sm-nav nav-text">
            <Button
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon style={{ color: "white" }} />
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/about" className="sm-nav-link">
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/media" className="sm-nav-link">
                  Media
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/contact" className="sm-nav-link">
                  Contact
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">
                  <img src={logo} className="nav-logo" alt="logo" />
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Hidden>
        <Route path="/about" component={About} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route path="/roadtobethlehem" component={RoadToBethlehem} />
        <Route path="/oblivion" component={Oblivion} />
        <Route path="/ibelieveinfatherchristmas" component ={IBelieve} />
        <Route path="/starrynight" component={StarryNight} />
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
