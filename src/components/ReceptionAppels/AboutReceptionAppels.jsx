import React from "react";
import { Link } from "react-router-dom";

const AboutReceptionAppels = () => {
  return (
    <>
      {/* ===== ABOUT RÉCEPTION & ÉMISSION D’APPELS ===== */}
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
                  Réception & émission d’appels
                </span>
                <h2 className="sec-title style2">
                  Une communication téléphonique professionnelle et efficace
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting assure la gestion complète de vos appels
                  entrants et sortants afin d’offrir à vos clients une expérience
                  fluide, réactive et professionnelle, tout en renforçant
                  l’image de votre entreprise.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Qualité de prise en charge des appels
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "98%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">98</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Réactivité & disponibilité
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "97%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">97</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Satisfaction clients
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "96%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">96</span>%
                  </div>
                </div>
              </div>

              <div className="btn-wrap mt-50">
                <Link to="/contact" className="global-btn mt-xl-0 mt-20">
                  Externaliser mes appels <i className="fas fa-arrow-right ms-2" />
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
                      Une gestion d’appels maîtrisée
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous garantissons une prise en charge professionnelle de
                    chaque appel afin de ne manquer aucune opportunité
                    commerciale ou relationnelle.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Accueil téléphonique personnalisé
                    </h4>
                    <p className="feature-card-text">
                      Réponse professionnelle au nom de votre entreprise,
                      selon vos consignes.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Transmission & suivi des appels
                    </h4>
                    <p className="feature-card-text">
                      Transmission des messages et suivi rigoureux des demandes
                      clients.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Appels sortants ciblés
                    </h4>
                    <p className="feature-card-text">
                      Émission d’appels pour confirmations, relances ou prises
                      de rendez-vous.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES RÉCEPTION & ÉMISSION ===== */}
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
                      Des solutions adaptées à votre activité
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row gx-30 gy-30 justify-content-center">

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Réception des appels entrants
                      </h4>
                      <p className="service-card_text">
                        Prise en charge professionnelle de tous vos appels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Émission d’appels sortants
                      </h4>
                      <p className="service-card_text">
                        Relances clients, confirmations et prises de rendez-vous.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Gestion des messages
                      </h4>
                      <p className="service-card_text">
                        Transmission rapide et structurée des messages reçus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Reporting & suivi
                      </h4>
                      <p className="service-card_text">
                        Suivi des appels et reporting selon vos besoins.
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

export default AboutReceptionAppels;
