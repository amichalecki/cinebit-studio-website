/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classNames from 'classnames';
import YoutubeBackground from 'react-youtube-background';
/* import JustifiedGrid from 'react-justified-grid';
import Modal from './components/modal/modal'; */
import ImageTable from './components/imageTable/imageTable';

import logo from './images/logo.jpg';

import laury from './images/laury.png';
import marki from './images/marki.png';

import { PORTFOLIO } from './PORTFOLIO';
/* import { MODAL } from './MODAL';
import * as serviceWorker from './serviceWorker'; */

import footer from "./images/footer.jpg";

function App() {
  const [showNavDemo, setShowNavDemo] = useState(true);
  /* const [toogleModal, setToogleModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(null);
  const [modalData, setModalData] = useState({}); */

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
            {/* <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">EKIPA</a> */}
          </div>
          <div>
            {/*  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding w3-hide-small">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
          </a>
          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding w3-hide-small">
            <i className="fa fa-instagram w3-hover-opacity"></i>
          </a> */}
            <a
              href="https://vimeo.com/424483935"
              target="_blank"
              rel="noopener noreferrer"
              className="w3-bar-item w3-button w3-padding w3-hide-small"
              style={{ marginLeft: '40px' }}
            >
              <i className="fa fa-vimeo w3-hover-opacity" /> {/* style={{ marginRight: '10px' }} */}
              {/* Vimeo */}
            </a>
            <a
              href="https://www.facebook.com/cinebit.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w3-bar-item w3-button w3-padding w3-hide-small"
              /* style={{ marginLeft: '10px' }} */
            >
              <i className="fa fa-facebook w3-hover-opacity" />  {/* style={{ marginRight: '10px' }}  */}
              {/* Facebook */}
            </a>
            <a
              href="https://www.instagram.com/cinebit.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w3-bar-item w3-button w3-padding w3-hide-small"
              /* style={{ marginLeft: '10px' }} */
            >
              <i className="fa fa-instagram w3-hover-opacity" />  {/* style={{ marginRight: '10px' }} */}
              {/* Instagram */}
            </a>
            {/*  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding w3-hide-small">
            <i className="fa fa-envelope w3-hover-opacity"></i>
              </a> */}
          </div>
        </div>
      </div>

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

        <YoutubeBackground
          videoId='wjsu_7hRjj8' // 9z3feC9GMzc bCpv8y66oEY
          className='videoHeight'
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

        {/*  Laury */}

        <div className="w3-padding-16 w3-display-container w3-center w3-black">
          <img src={laury} alt="laury" style={{ maxWidth: '100%' }} />
        </div>

        {/*  Portfolio */}

        <div className="w3-display-container w3-center anchor__offset" id="portfolio">
          {/* <JustifiedGrid
            images={PORTFOLIO}
            rows={9}
            maxRowHeight={serviceWorker.calculateGridFragSize().height + 10}
            showIncompleteRow
          >
            {processedImages => {
              console.log(window.innerWidth);
              console.log(serviceWorker.calculateGridFragSize());
              return (
                <>
                  {processedImages.map((image, i) => {
                    // const image_calc_size = serviceWorker.calculateGridFragSize();
                    let { src, alt, width, height, originalData } = image;
                    if (i==0) console.log(image);
                    // width = image_calc_size.width;
                    // height = image_calc_size.height;
                    return (
                      <div
                        key={i}
                        className="img__wrap"
                        onClick={() => {
                          setToogleModal(true)
                          setModalNumber(i)
                          setModalData(originalData)
                        }}
                      >
                        <img src={src} width={width} height={height} alt={alt} />
                        <div className="img__description">
                          <p className="img__title">{alt}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            }}
          </JustifiedGrid> */}
          <ImageTable portfolio={PORTFOLIO}/>
        </div>

        {/*  The Companies Section */}
        <div className="w3-padding-16 w3-display-container w3-center w3-black">
          <img src={marki} alt="marki" style={{ maxWidth: '100%' }} />
        </div>

        {/*  The Contact Section */}
        <div className="w3-display-container anchor__offset" id="contact">
          <img src={footer} className="w3-image w3-greyscale-min" style={{ width: '100%' }} alt="" />
          <div className="display-middle w3-container w3-text-white w3-padding-32">
            <div className="w3-center contact">CONTACT</div> {/* w3-wide */}
            {/* <p className="w3-center">Zainteresowany?</p> */}
            {/* <p className="w3-center">Napisz!</p> */}
            <div className="w3-center manager-container">
              <div className="manager"> {/* w3-margin-bottom  */}
                Katarzyna Bielińska
              </div>
              <div className="manager-title"> {/* w3-margin-bottom  */}
                Kierownik produkcji
              </div>
            </div>
            <div className="w3-center">
              <div className="phone"> {/* w3-margin-bottom  */}
                {/* <i className="fa fa-phone" style={{ width: '30px' }}></i> Tel:  */}
                <a className="link" href="tel:+48731490153">
                  +48&nbsp;&nbsp;731&nbsp;&nbsp;490&nbsp;&nbsp;153 
                </a>
              </div>
              <div className="mail"> {/* w3-large w3-margin-bottom */}
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
        <a href="https://www.facebook.com/cinebit.studio" target="_blank" rel="noopener noreferrer" className="w3-padding"><i className="fa fa-facebook w3-hover-opacity" /></a>
        <a href="https://www.instagram.com/cinebit.studio" target="_blank" rel="noopener noreferrer" className="w3-padding"><i className="fa fa-instagram w3-hover-opacity" /></a>
      </footer>

      {/* {toogleModal && <Modal {...MODAL[modalNumber]} data={modalData} setToogleModal={() => setToogleModal(false)} />} */}
    </>
  );
}

export default App;
