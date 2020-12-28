import React from "react";

function About(props) {
  return (
    <div className = "main" >
      <div className = "main-container" >
        <h1 className = "main-title" > about < /h1>
        <p className = "body-text about-comment" >
        Traction Music is run by Thomas Aldren, a London-based freelance musician.
        </p>
      </div>
      <div className="fade-background">
      <hr className="dotted-line" />
      <div className="main-container">
      <p className = "body-text about-text" >
      Tom graduated from King's College London with 1st Class Hons in 2014,
      with a particular focus on techniques of composition. Following master's
      degrees in performance in both London and Munich, he has
      combined a career as a concert violinist with providing arrangements
      for a wide range of clients, which have been performed in concerts and
      festivals across the UK and Europe. His arrangement portfolio encompasses
      an eclectic mix of styles and instrumentation, from solo string instruments
      to large scale ensembles. His focus is primarily on using the available forces
      to their full capacity in order to bring new life to the original material.
      <br />
      Tom's arrangements are influenced by his performing career, which is hugely varied.
      Performing highlights include concerts as co-leader of the BBC Symphony and
      Bergen Philharmonic Orchestras, as Principal Second Violin of the Bournemouth
      Symphony Orchestra, and chamber music performances live on Radio 3 and in major
      concert halls in the UK and Europe. He has also performed with artists such as
      Burt Bacharach, Quincy Jones, Father John Misty and Freddie McGregor in venues
      from Ronnie Scott's and Hammersmith Apollo to Glastonbury. This intimate experience
      of such a wide array of musical genres is invaluable when it comes to composition and
      arranging music.
      </p>
      </div>
      <hr className="dotted-line" />
      </div>
      <div className="main-container">
      <h2 className = "about-contact home-contact-container" >
      For more information,
      <a href = "mailto:info@tractionmusic.co.uk"
      className = "home-contact-link" >
      {" "}
      contact us
      {" "}
      </a>
      with your enquiry
      </h2>
      </div>
    </div>
  );
}

export default About;
