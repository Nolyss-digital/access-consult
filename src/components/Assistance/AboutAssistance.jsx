import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AboutAssistance = () => {
  return (
    <>
      {/* ===== ABOUT APPELS D’OFFRES ===== */}
      <div className="about-area-3 space">
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center">

            {/* Image + Counter */}
            <div className="col-xl-6">
              <div className="about-thumb3">
                <div className="img1">
                  <img
                    src="assets/img/normal/about_3-1.jpg"
                    alt="Assistance aux appels d’offres"
                  />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={12} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <p>Années d’expérience en appels d’offres</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-6">
              <div className="title-area mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Assistance aux appels d’offres
                </span>
                <h2 className="sec-title style2">
                  Maximisez vos chances de remporter des marchés
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting vous accompagne à chaque étape de vos appels
                  d’offres publics et privés : analyse des dossiers, constitution
                  des pièces administratives, rédaction et dépôt conforme.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Conformité des dossiers
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
                  Respect des délais
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
                  Taux de satisfaction clients
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
                  Être accompagné <i className="fas fa-arrow-right ms-2" />
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
                      Des dossiers solides et compétitifs
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous sécurisons vos candidatures en garantissant des dossiers
                    complets, conformes et déposés dans les délais impartis.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Analyse des appels d’offres
                    </h4>
                    <p className="feature-card-text">
                      Étude des cahiers des charges et vérification de
                      l’éligibilité de votre entreprise.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Montage du dossier administratif
                    </h4>
                    <p className="feature-card-text">
                      Constitution et vérification de toutes les pièces
                      administratives requises.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Suivi & dépôt
                    </h4>
                    <p className="feature-card-text">
                      Dépôt des dossiers et suivi jusqu’à l’attribution
                      du marché.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES APPELS D’OFFRES ===== */}
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
                      Un accompagnement à chaque étape
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row gx-30 gy-30 justify-content-center">

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Veille & sélection
                      </h4>
                      <p className="service-card_text">
                        Identification des appels d’offres adaptés à votre
                        activité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Dossier administratif
                      </h4>
                      <p className="service-card_text">
                        Préparation complète des documents administratifs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Coordination & dépôt
                      </h4>
                      <p className="service-card_text">
                        Organisation et dépôt des dossiers dans les délais.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Suivi post-dépôt
                      </h4>
                      <p className="service-card_text">
                        Suivi des résultats et assistance jusqu’à
                        l’attribution.
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

export default AboutAssistance;
