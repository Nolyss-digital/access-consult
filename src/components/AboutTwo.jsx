import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutTwo = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                À propos
              </span>

              <h2 className="sec-title style2">
                Votre partenaire en formalités juridiques
              </h2>

              <p className="sec-text">
                Acces Consulting accompagne les entrepreneurs et dirigeants
                dans toutes les démarches juridiques liées à la création,
                la gestion et l’évolution de leur entreprise.
              </p>
            </div>

            <div className="checklist">
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Accompagnement clair et conforme à la réglementation.
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Formalités rapides, simples et 100 % en ligne.
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Suivi personnalisé par des experts dédiés.
                </li>
              </ul>
            </div>

            <p className="about-desc">
              Sécuriser vos démarches et vous faire gagner du temps.            </p>

            <div className="btn-group">
              <Link to="/a-propos" className="global-btn style2">
                En savoir plus
                <img src="assets/img/icon/right-icon.svg" alt="Acces Consulting" />
              </Link>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-thumb2">
              <div className="about-img-1">
                <img src="assets/img/normal/about_2-1.jpg" alt="Acces Consulting" />
              </div>

              <div className="about-img-2">
                <img src="assets/img/normal/about_2-2.png" alt="Acces Consulting" />
              </div>

              <div className="about-counter-wrap">
                <div className="about-icon">
                  <img src="assets/img/icon/about_icon2-1.svg" alt="icon" />
                  <div>
                    <h3 className="about-counter">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={100} />
                              +
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h3>
                    <h4 className="about-counter-text">Entrepreneurs accompagnés</h4>
                  </div>
                </div>

                {/* <p className="sec-desc">
                  Des milliers de formalités traitées avec rigueur et efficacité.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default AboutTwo;
