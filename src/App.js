/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classNames from 'classnames';
import YoutubeBackground from 'react-youtube-background';
import JustifiedGrid from 'react-justified-grid';

import './App.css';

import logo from './images/logo.jpg';
// import header from './images/header.jpg';

import laury from './images/laury.png';
import marki from './images/marki.png';

import portfolio1 from "./images/portfolio/1.png";
import portfolio2 from "./images/portfolio/2.png";
import portfolio3 from "./images/portfolio/3.png";
import portfolio4 from "./images/portfolio/4.png";
import portfolio5 from "./images/portfolio/5.png";
import portfolio6 from "./images/portfolio/6.png";

// import middle1 from "./images/middle/1.jpg";
// import middle2 from "./images/middle/2.jpg";
// import middle3 from "./images/middle/3.jpg";

// import foto1 from "./images/team/artur.jpg";
// import foto2 from "./images/team/kasia.jpg";
// import foto3 from "./images/team/tj.jpg";
// import foto4 from "./images/team/andy.jpg";
// import foto5 from "./images/team/ola.jpg";
// import foto6 from "./images/team/wasyl.jpg";
// import foto7 from "./images/team/rogogon.jpg";

import footer from "./images/footer.jpg";

// const MAP = [
//   {
//     "src": portfolio1,
//     "alt": "ambiwalentnie",
//   },
//   {
//     "src": portfolio2,
//     "alt": "grzech",
//   },
//   {
//     "src": portfolio3,
//     "alt": "Harnaś",
//   },
//   {
//     "src": portfolio4,
//     "alt": "knorr",
//   }
// ]

const PORTFOLIO = [
  {
    src: portfolio1,
    width: 698,
    height: 297,
    originalData: 'https://vimeo.com/388824268'
  },
  {
    src: portfolio2,
    width: 698,
    height: 297,
    originalData: 'https://vimeo.com/388824268'
  },
  {
    src: portfolio3,
    width: 698,
    height: 297,
    originalData: 'https://vimeo.com/388824268'
  },
  {
    src: portfolio4,
    width: 698,
    height: 297,
    originalData: 'https://vimeo.com/388824268'
  },
  {
    src: portfolio5,
    width: 698,
    height: 297,
    originalData: 'https://vimeo.com/399341592'
  },
  {
    src: portfolio6,
    width: 698,
    height: 297,
    originalData: 'https://vimeo.com/388825454'
  }
];

function App() {
  const [showNavDemo, setShowNavDemo] = useState(true);

  // Used to toggle the menu on small screens when clicking on the menu button
  function handleMenuToogle() {
    setShowNavDemo(!showNavDemo)
  }

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card menu">
          <a
            className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            href="#"
            onClick={() => handleMenuToogle()}
          >
            <i className="fa fa-bars"></i>
          </a>
          <a href="#" className="w3-bar-item logo">
            <img src={logo} alt="logo" />
          </a>
          <div>
            <a href="#portfolio" className="w3-bar-item w3-button w3-padding-large w3-hide-small">PORTFOLIO</a>
            {/* <a href="#who" className="w3-bar-item w3-button w3-padding-large w3-hide-small">KIM JESTEŚMY</a> */}
            {/* <a href="#team" className="w3-bar-item w3-button w3-padding-large w3-hide-small">EKIPA</a> */}
            <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
          </div>
          <div>
            {/*  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding w3-hide-small">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
          </a>
          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding w3-hide-small">
            <i className="fa fa-instagram w3-hover-opacity"></i>
          </a> */}
            <a
              href="https://vimeo.com/cinebitstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="w3-bar-item w3-button w3-padding w3-hide-small"
              style={{ marginLeft: '120px' }}
            >
              <i className="fa fa-vimeo w3-hover-opacity" style={{ marginRight: '10px' }}/>
              Vimeo
            </a>
            {/*  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding w3-hide-small">
            <i className="fa fa-envelope w3-hover-opacity"></i>
          </a> */}
          </div>
        </div>
      </div>

      {/*  Navbar on small screens (remove the onClick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
      <div
        id="navDemo"
        className={classNames(
          "w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top",
          {
            'w3-show': !showNavDemo,
            'w3-hide': showNavDemo,
          }
        )}
        style={{ marginTop: '84px' }}
      >
        <a href="#portfolio" className="w3-bar-item w3-button w3-padding-large" onClick={() => handleMenuToogle()}>PORTFOLIO</a>
        {/* <a href="#who" className="w3-bar-item w3-button w3-padding-large" onClick={() => handleMenuToogle()}>KIM JESTEŚMY</a> */}
        {/* <a href="#team" className="w3-bar-item w3-button w3-padding-large" onClick={() => handleMenuToogle()}>EKIPA</a> */}
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large" onClick={() => handleMenuToogle()}>CONTACT</a>
      </div>

      {/*  Page content */}
      <div className="w3-content" style={{ maxWidth: '2000px', marginTop: '84px' }}>

        {/* <img
            src={header}
            alt="header"
            style={{ width: '100%' }}
          /> */}

        <YoutubeBackground
          videoId='9z3feC9GMzc'
          className='videoHeight'
        // style={{ width: '100px' }}
        >
          <div className="w3-center w3-display-container w3-padding-32">
            <div className="w3-container w3-text-white w3-padding-32 w3-hide-small">
              <h1>CINEBIT STUDIO</h1>
              <h2>A BIT OF CINEMA.</h2>
            </div>
            <div className="w3-container w3-text-white showreel--button-container">
              <a
                href="https://vimeo.com/cinebitstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w3-bar-item w3-button w3-padding-large showreel--button"
              >
                WATCH SHOWREEL
                </a>
            </div>
          </div>

        </YoutubeBackground>

        {/*  Automatic Slideshow Images */}

        <div className="w3-padding-16 w3-display-container w3-center w3-black">
          <img src={laury} alt="laury" style={{ maxWidth: '100%' }} />
        </div>

        {/*  The Portfolio Section */}


        {/* TUTAJ PORTFOLIO */}
        <div className="w3-display-container" id="portfolio">
          <JustifiedGrid
            images={PORTFOLIO}
            rows={10}
            maxRowHeight={400}
            showIncompleteRow
            gutter={5}
          >
            {processedImages => {
              return (
                <>
                  {processedImages.map(image => {
                    const { src, width, height, originalData } = image;
                    // console.log(image)
                    return (
                      <a key={src} alt="lol" href={originalData.originalData} target="_blank" rel="noopener noreferrer">
                        <img src={src} width={width} height={height} alt="" />
                      </a>
                    );
                  })}
                </>
              );
            }}
          </JustifiedGrid>
        </div>

        <div className="w3-padding-16 w3-display-container w3-center w3-black">
          <img src={marki} alt="marki" style={{ maxWidth: '100%' }} />
        </div>

        {/*  The Contact Section */}
        <div className="w3-display-container" id="contact">
          <img src={footer} className="w3-image w3-greyscale-min" style={{ width: '100%' }} alt="" />
          <div className="w3-display-middle w3-container w3-text-white w3-padding-32">
            <h2 className="w3-wide w3-center">CONTACT</h2>
            {/* <p className="w3-center">Zainteresowany?</p> */}
            {/* <p className="w3-center">Napisz!</p> */}
            <div className="w3-center">
              <div className="w3-margin-bottom">
                {/* <i className="fa fa-phone" style={{ width: '30px' }}></i> Tel:  */}
                <a className="link" href="tel:+48660696558">
                  +48 660696558
                  </a>
              </div>
              <div className="w3-large w3-margin-bottom">
                {/* <i className="fa fa-envelope" style={{ width: '30px' }}> </i> Email:  */}
                <a className="link" href="mailto:info@cinebitstudio.pl">
                  info@cinebitstudio.pl
                  </a>
              </div>
            </div>
          </div>
        </div>
        {/*  End Page Content */}

      </div>

      {/*  Footer */}
      <footer className="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
        <a href="#" className="w3-bar-item logo">
          <img src={logo} alt="logo" />
        </a>
        {/*  <a href="javascript:void(0)" className="w3-padding"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
      <a href="javascript:void(0)" className="w3-padding"><i className="fa fa-instagram w3-hover-opacity"></i></a> */}
        <a href="https://vimeo.com/cinebitstudio" target="_blank" rel="noopener noreferrer" className="w3-padding"><i className="fa fa-vimeo w3-hover-opacity"></i></a>
      </footer>
    </>
  );
}

export default App;
