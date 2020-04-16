import React from 'react';
import Iframe from 'react-iframe'

function Modal(props) {
  return (
    <div id="portfolio" className="w3-modal" onClick={() => props.setToogleModal()}>
      <div className="w3-modal-content w3-animate-top w3-card-4">
        <Iframe
          title="ambiwalentie"
          src={props.src}
          width="640"
          height="272"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
        <div className="portfolio__box">

          {props.production && <>
            <p className="portfolio__title">
              {props.title}
            </p>
            <ul>
              {props.production.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </>}

          {props.cast && <>
            <p className="portfolio__title">
              Wystąpili:
          </p>
            <ul>
              {props.cast.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </>}

          {props.special && <>
            <p className="portfolio__title">
              Szczególne podziękowania:
            </p>
            <ul>
              {props.special.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </>}

        </div>
      </div>
    </div>
  )
}

export default Modal;
