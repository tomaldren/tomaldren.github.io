import React from "react";

function Footer(props) {
  return (
    <footer>
      <a className="footer-link" href="mailto:info@tractionmusic.co.uk">info@tractionmusic.co.uk</a>
      <p>&copy; Thomas Aldren {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
