import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AboutDevCommercial = () => {
  return (
    <>
      {/* ===== ABOUT DEVELOPPEMENT COMMERCIAL ===== */}
      <div className="about-area-3 space">
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center">

            {/* Image + Counter */}
           <div className="col-xl-6">
              <div className="about-thumb3">
                <div className="img1">
                  <img src="assets/img/normal/about_3-1.jpg" alt="Gestion de la paie" />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <p>Traitement rapide, coûts réduits</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-6">
              <div className="title-area mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Développement commercial
                </span>
                <h2 className="sec-title style2">
                  Accélérez la croissance de votre entreprise
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting vous accompagne dans la structuration et
                  l’optimisation de votre stratégie commerciale afin d’augmenter
                  votre chiffre d’affaires et renforcer votre position sur le marché.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Stratégie commerciale
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">100</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Prospection & acquisition clients
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">95</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Performance commerciale
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "97%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">97</span>%
                  </div>
                </div>
              </div>

              <div className="btn-wrap mt-50">
                <Link to="/contact" className="global-btn mt-xl-0 mt-20">
                  Développer mon activité <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <div className="overflow-hidden">
        <div className="bg-max-container bg-smoke radius-50">

          <div className="feature-area-4 space">
            <div className="container">
              <div className="row align-items-end justify-content-between">
                <div className="col-lg-6">
                  <div className="title-area">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Nos engagements
                    </span>
                    <h2 className="sec-title style2">
                      Une stratégie orientée résultats
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous mettons en place des actions commerciales efficaces,
                    mesurables et adaptées à votre marché.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Analyse du marché
                    </h4>
                    <p className="feature-card-text">
                      Étude de votre marché, de vos concurrents et de votre
                      positionnement commercial.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Acquisition de clients
                    </h4>
                    <p className="feature-card-text">
                      Mise en place de stratégies de prospection efficaces
                      multicanales.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Suivi & optimisation
                    </h4>
                    <p className="feature-card-text">
                      Analyse des performances et optimisation continue des
                      actions commerciales.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES DEVELOPPEMENT COMMERCIAL ===== */}
          <div className="service-area-3 space-bottom overflow-hidden">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5">
                  <div className="title-area text-center">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Nos services
                    </span>
                    <h2 className="sec-title style2">
                      Des solutions pour booster vos ventes
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row gx-30 gy-30 justify-content-center">

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Stratégie commerciale
                      </h4>
                      <p className="service-card_text">
                        Définition d’une stratégie adaptée à vos objectifs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Prospection clients
                      </h4>
                      <p className="service-card_text">
                        Génération de leads et développement de votre portefeuille.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Négociation & closing
                      </h4>
                      <p className="service-card_text">
                        Accompagnement dans la négociation et la conclusion des ventes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Suivi commercial
                      </h4>
                      <p className="service-card_text">
                        Reporting, indicateurs de performance et optimisation continue.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutDevCommercial;
