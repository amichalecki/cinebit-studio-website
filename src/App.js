/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

import logo from './images/logo.jpg';
import header from './images/header.jpg';

import laury from './images/laury.png';
import marki from './images/marki.png';

import portfolio1 from "./images/portfolio/1.png";
import portfolio2 from "./images/portfolio/2.png";
import portfolio3 from "./images/portfolio/3.png";
import portfolio4 from "./images/portfolio/4.png";

import middle1 from "./images/middle/1.jpg";
import middle2 from "./images/middle/2.jpg";
import middle3 from "./images/middle/3.jpg";

import foto1 from "./images/team/artur.jpg";
import foto2 from "./images/team/kasia.jpg";
import foto3 from "./images/team/tj.jpg";
import foto4 from "./images/team/andy.jpg";
import foto5 from "./images/team/ola.jpg";
import foto6 from "./images/team/wasyl.jpg";
import foto7 from "./images/team/rogogon.jpg";

import footer from "./images/footer.jpg";

function App() {
  return (
    <>
      <div class="w3-top">
        <div class="w3-bar w3-black w3-card menu">
          <a
            class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            href="javascript:void(0)"
            onclick="myFunction()"
            title="Toggle Navigation Menu"
          >
            <i class="fa fa-bars"></i>
          </a>
          <a href="#" class="w3-bar-item logo">
            <img src={logo} alt="logo" />
          </a>
          <div>
            <a href="#portfolio" class="w3-bar-item w3-button w3-padding-large">PORTFOLIO</a>
            <a href="#who" class="w3-bar-item w3-button w3-padding-large w3-hide-small">KIM JESTEŚMY</a>
            <a href="#team" class="w3-bar-item w3-button w3-padding-large w3-hide-small">EKIPA</a>
            <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">KONTAKT</a>
          </div>
          {/*  <div class="w3-dropdown-hover w3-hide-small">
          <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>
          <div class="w3-dropdown-content w3-bar-block w3-card-4">
            <a href="#" class="w3-bar-item w3-button">Merchandise</a>
            <a href="#" class="w3-bar-item w3-button">Extras</a>
            <a href="#" class="w3-bar-item w3-button">Media</a>
          </div>
        </div> */}
          <div>
            {/*  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding w3-hide-small">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
          </a>
          <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding w3-hide-small">
            <i class="fa fa-instagram w3-hover-opacity"></i>
          </a> */}
            <a href="https://vimeo.com/cinebitstudio" target="_blank" rel="noopener noreferrer"
              class="w3-bar-item w3-button w3-padding w3-hide-small">
              <i class="fa fa-vimeo w3-hover-opacity"></i>
            </a>
            {/*  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding w3-hide-small">
            <i class="fa fa-envelope w3-hover-opacity"></i>
          </a> */}
          </div>
        </div>
      </div>

      {/*  Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
      <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{ marginTop: '46px' }}>
        <a href="#portfolio" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">PORTFOLIO</a>
        <a href="#who" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">KIM JESTEŚMY</a>
        <a href="#team" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">EKIPA</a>
        <a href="#contact" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">KONTAKT</a>
      </div>

      {/*  Page content */}
      <div class="w3-content" style={{ maxWidth: '2000px', marginTop: '84px' }}>

        <div class="w3-center w3-display-container">
          <img
            src={header}
            alt=""
            style={{ width: '100' }}
          />

          {/*  <div style={{"z-index: -99; width: 100%; height: 315px">
          <iframe frameborder="0" height="100%" width="100%"
            src="https://youtube.com/embed/9z3feC9GMzc?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&modestbranding=1&rel=0&showinfo=0">
          </iframe>
        </div> */}

          <div class="w3-display-middle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h1>CINEBIT STUDIO</h1>
            <h2>A BIT OF CINEMA.</h2>
          </div>
        </div>

        {/*  Automatic Slideshow Images */}

        <div class="mySlides w3-display-container w3-center w3-black">
          <img src={laury} alt="laury" style={{ maxWidth: '100%' }} />
        </div>
        <div class="mySlides w3-display-container w3-center w3-black">
          <img src={marki} alt="marki" style={{ maxWidth: '100%' }} />
        </div>

        {/*  The Portfolio Section */}
        <div class="w3-black" id="show-reel">
          <div class="w3-container w3-content" style={{ maxWidth: '800px' }} >
            <h2 class="w3-wide w3-left">SHOWREEL</h2>

            <div class="w3-row-padding w3-padding-32" style={{ textAlign: 'center' }}>
              <iframe title="showreel" width="560" height="220" src="https://www.youtube.com/embed/9z3feC9GMzc" frameborder="0" showinfo="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                modestbranding></iframe>
            </div>
          </div>
        </div>

        {/*  The Portfolio Section */}
        <div class="w3-black" id="portfolio">
          <div class="w3-container w3-content w3-padding-64" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 class="w3-wide w3-left">PORTFOLIO</h2>

            <div class="w3-row-padding w3-padding-32" style={{ margin: '0 -16px' }}>
              <div class="w3-half w3-margin-bottom">
                <img src={portfolio1} alt="ambiwalentnie" style={{ width: '100%' }} class="w3-hover-opacity"
                  onclick="document.getElementById('portfolio1').style.display='block'" />
              </div>
              <div class="w3-half w3-margin-bottom">
                <img src={portfolio2} alt="grzech" style={{ width: '100%' }} class="w3-hover-opacity"
                  onclick="document.getElementById('portfolio2').style.display='block'" />
              </div>
              <div class="w3-half w3-margin-bottom">
                <img src={portfolio3} alt="Harnaś" style={{ width: '100%' }} class="w3-hover-opacity"
                  onclick="document.getElementById('portfolio3').style.display='block'" />
              </div>
              <div class="w3-half w3-margin-bottom">
                <img src={portfolio4} alt="knorr" style={{ width: '100%' }} class="w3-hover-opacity"
                  onclick="document.getElementById('portfolio4').style.display='block'" />
              </div>
            </div>

            <a
              href="https://vimeo.com/cinebitstudio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: 'auto' }}
              class="w3-button w3-xlarge"
            >
              Więcej
          </a>
          </div>
        </div>

        {/*  The Who Section */}
        <div class="w3-container w3-content w3-center w3-padding-64 w3-black" style={{ maxWidth: '800px' }} id="who" >
          <h2 class="w3-wide text-left">O NAS</h2>
          <p class="w3-justify">
            Cinebit Studio to ekipa pasjonatów kinematografii, która jednocześnie jest grupą wspaniałych
            znajomych. To co nas połączyło, to właśnie miłość do filmu i opowiadania historii. Większość z nas ma
            wykształcenie techniczne, co w połączeniu z talentem artystycznym stanowi niepowtarzalną mieszankę. Niezwykle
            skrupulatnie organizujemy nasze plany filmowe, dbając o każdy detal na wszystkich etapach produkcji. Ale przede
            wszystkim po prostu świetnie się też bawimy!
        </p>
          <div class="w3-row w3-padding-32">
            <div class="w3-third">
              <img src={middle1} class="w3-round w3-margin-bottom" alt="Random Name" style={{ width: '60%' }} />
            </div>
            <div class="w3-third">
              <img src={middle2} class="w3-round w3-margin-bottom" alt="Random Name" style={{ width: '60%' }} />
            </div>
            <div class="w3-third">
              <img src={middle3} class="w3-round" alt="Random Name" style={{ width: '60%' }} />
            </div>
          </div>
          <h2 class="w3-wide text-left">SIŁA HISTORII</h2>
          <p class="w3-justify">
            Ludzi kochają oglądać dobre historie! Dlatego też, stawiamy niezwykle duży nacisk na pomysłowość w naszych
            projektach. Piszemy odważne scenariusze, często trochę szalone i nieszablonowe. Posiadające nagłe zwroty akcji i
            nieoczywiste puenty. Wierzymy, że to właśnie dobra historia jest podstawą do powstania wielkiego dzieła!
        </p>
        </div>

        {/*  The Team Section */}
        <div class="w3-black" id="team">
          <div class="w3-container w3-content w3-padding-64" style={{ maxWidth: '800px' }}>
            <h2 class="w3-wide w3-left">EKIPA</h2>

            <div class="w3-row-padding w3-padding-32" style={{ margin: '0 -16px' }}>

              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto1} alt="Artur Czerwiński" style={{ width: '100%' }} class="team" />
                <div class="img__description">
                  <p class="team__name">Artur Czerwiński</p>
                  <p class="team__role">Reżyser</p>
                </div>
              </div>
              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto2} alt="Kasia" style={{ width: '100%' }} class="team" />
                <div class="img__description">
                  <p class="team__name">Kasia</p>
                  <p class="team__role"></p>
                </div>
              </div>
              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto3} alt="Tomasz Januszewski" style={{ width: '100%' }} class="team" />
                <div class="img__description">
                  <p class="team__name">Tomasz Januszewski</p>
                  <p class="team__role">autor zdjęć</p>
                </div>
              </div>
              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto4} alt="Andrzej" style={{ width: '100%' }} class="team" />
                <div class="img__description">
                  <p class="team__name">Andrzej</p>
                  <p class="team__role">po prostu Andrzej</p>
                </div>
              </div>

            </div>

            <div class="w3-row-padding w3-padding-32" style={{ margin: '0 -16px' }}>
              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto5} alt="Ola" style={{ width: '100%' }} class="team" />
                <div class="img__description">
                  <p class="team__name">Ola</p>
                  <p class="team__role">autor zdjęć</p>
                </div>
              </div>
              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto6} alt="Wasyl" style={{ width: '100%' }} class="team" />
                <div class="img__description">
                  <p class="team__name">Wasyl</p>
                  <p class="team__role">Wasyl</p>
                </div>
              </div>
              <div class="w3-quarter w3-margin-bottom img__wrap">
                <img src={foto7} alt="Rogogon" style={{ width: '100%' }} class="team" />
                < div class="img__description" >
                  <p class="team__name">Rogogon</p>
                  <p class="team__role">Rogogon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Photo Modals */}
        <div id="portfolio1" class="w3-modal">
          <div class="w3-modal-content w3-animate-top w3-card-4">
            <iframe title="ambiwalentie" src="https://player.vimeo.com/video/388824268" width="640" height="272" frameborder="0"
              allow="autoplay; fullscreen" allowfullscreen></iframe>
            <div class="portfolio__box">
              <p class="portfolio__title">
                Teledysk do utworu Ambiwalentnie zespołu Black Jeans.
            </p>
              <ul>
                <li>Produkcja: CINEBIT STUDIO</li>
                <li>Scenariusz: Rafał Florkiewicz</li>
                <li>Autor zdjęć: Andrzej Michalecki</li>
                <li>Operator kamery: Tomasz Januszewski</li>
                <li>Casting & Produkcja: Adrianna Minkiewicz</li>
                <li>Asystent produkcji: Joanna Łącka</li>
                <li>Asystent kamery i oświetlenia: Filip Wasilewski</li>
                <li>Montaż: Andrzej Michalecki</li>
                <li>Korekcja barwna: Andrzej Michalecki</li>
                <li>Asystent techniczny: Janusz Gietka, Konrad Forystek</li>
              </ul>
              <p class="portfolio__title">
                Wystąpili:
            </p>
              <ul>
                <li>Kristina Kaminskaite</li>
                <li>Alex Ochman</li>
                <li>Zuzia Pająk</li>
                <li>Kuba Kaszak</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="portfolio2" class="w3-modal">
          <div class="w3-modal-content w3-animate-top w3-card-4">
            <iframe title="Black Jeans" src="https://player.vimeo.com/video/388027864" width="640" height="272" frameborder="0"
              allow="autoplay; fullscreen" allowfullscreen></iframe>

            <div class="portfolio__box">
              <p class="portfolio__title">
                Teledysk do utworu Black Jeans zespołu Black Jeans.
            </p>
              <ul>
                <li>Produkcja: Cinebit Studio</li>
                <li>Reżyser: Artur Czerwiński</li>
                <li>Scenariusz: Artur Czerwiński</li>
                <li>Autor zdjęć: Tomasz Januszewski</li>
                <li>Casting: Adrianna Minkiewicz</li>
                <li>Producent: Łukasz Szczęsny</li>
                <li>Kierownik produkcji: Adrianna Minkiewicz</li>
                <li>Asystent produkcji: Dominika Zajczuk</li>
                <li>Scenograf: Marcin Malisz</li>
                <li>Kostiumograf: Aleksandra Sałacińska</li>
                <li>Charakteryzator: Karolina Wysocki</li>
                <li>Rekwizytor: Marcin Malisz / Andrzej “Andy” Michalecki</li>
                <li>Operator kamery: Filip Wasilewski / Filip Rogoziński</li>
                <li>Asystent kamery: Kamil “Młody” Galach / Jakub Skowronek</li>
                <li>Ostrzyciel: Filip Rogoziński</li>
                <li>Mistrz oświetlenia: Tomasz Januszewski</li>
                <li>Kierownik planu: Rafał Florkiewicz</li>
                <li>Postprodukcja: Andrzej “Andy Michalecki” / Filip Wasilewski</li>
                <li>Montażysta: Andrzej “Andy Michalecki” / Filip Wasilewski</li>
                <li>Kolorysta: Tomasz Januszewski</li>
                <li>Foto: Emilia Abłażewicz / Alena Kaliska</li>
              </ul>
              <p class="portfolio__title">
                Wystąpili:
            </p>
              <ul>

                <li>Dominika Kryszczyńska</li>
                <li>Karol Zakrzewski</li>
              </ul>

              <p class="portfolio__title">
                Szczególne podziękowania:
            </p>
              <ul>
                <li>TVPW</li>
                <li>RekwizytorniA (rekwizytorniapraga.pl)</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="portfolio3" class="w3-modal">
          <div class="w3-modal-content w3-animate-top w3-card-4">
            <iframe title="portfolio3" src="https://player.vimeo.com/video/388823919" width="640" height="272" frameborder="0"
              allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>

        <div id="portfolio4" class="w3-modal">
          <div class="w3-modal-content w3-animate-top w3-card-4">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/388829493" width="640" height="271"
              frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        {/*  The Contact Section */}
        <div class="w3-display-container" id="contact">
          <img src={footer} class="w3-image w3-greyscale-min" style={{ width: '100%' }} alt="" />
          <div class="w3-display-middle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h2 class="w3-wide w3-center">KONTAKT</h2>
            <p class="w3-opacity w3-center">Zainteresowany? Napisz!</p>
            <div class="w3-row w3-padding-32">
              <div class="w3-col w3-large w3-margin-bottom">
                <i class="fa fa-phone" style={{ width: '30px' }}></i> Tel: <a href="tel:+48660696558">
                  +48 660696558
                  </a>
                <i class="fa fa-envelope" style={{ width: '30px' }}> </i> Email: <a href="mailto:info@cinebitstudio.pl">
                  info@cinebitstudio.pl
                  </a>
              </div>
              {/*  <div class="w3-col m6">
            <form action="/action_page.php" target="_blank">
              <div class="w3-row-padding" style={{"margin:0 -16px 8px -16px">
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Imię" required name="Name">
                </div>
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
                </div>
              </div>
              <input class="w3-input w3-border" type="text" placeholder="Cześć! Chcę z Wami współpracować!" required name="Message">
              <button class="w3-button w3-black w3-section w3-right" type="submit">Wyślij</button>
            </form>
          </div> */}
            </div>
          </div>
        </div>

        {/*  End Page Content */}
      </div>

      {/*  Footer */}
      <footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
        {/*  <a href="javascript:void(0)" class="w3-padding"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
      <a href="javascript:void(0)" class="w3-padding"><i class="fa fa-instagram w3-hover-opacity"></i></a> */}
        <a href="https://vimeo.com/cinebitstudio" target="_blank" rel="noopener noreferrer" class="w3-padding"><i class="fa fa-vimeo w3-hover-opacity"></i></a>
        <p class="w3-large"><a href="mailto:info@cinebitstudio.pl">info@cinebitstudio.pl</a></p>
      </footer>
    </>
  );
}

export default App;
