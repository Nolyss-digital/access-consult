import React from "react";
import { Link } from "react-router-dom";

const AboutDomiciliation = () => {
  return (
    <>
      {/* ===== ABOUT DOMICILIATION ===== */}
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
                  Domiciliation d’entreprises
                </span>
                <h2 className="sec-title style2">
                  Une adresse professionnelle pour votre entreprise
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting vous propose des solutions de domiciliation
                  conformes à la réglementation, vous permettant de bénéficier
                  d’une adresse professionnelle valorisante, tout en simplifiant
                  votre gestion administrative.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Conformité légale</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">100</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Gestion du courrier</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">95</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Satisfaction clients</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "98%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">98</span>%
                  </div>
                </div>
              </div>

              <div className="btn-wrap mt-50">
                <Link to="/contact" className="global-btn mt-xl-0 mt-20">
                  Domicilier mon entreprise <i className="fas fa-arrow-right ms-2" />
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
                      Une domiciliation simple et sécurisée
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous vous offrons une solution clé en main pour domicilier
                    votre entreprise en toute légalité et sérénité.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Adresse professionnelle
                    </h4>
                    <p className="feature-card-text">
                      Une adresse stratégique pour renforcer l’image et la
                      crédibilité de votre entreprise.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Réception & gestion du courrier
                    </h4>
                    <p className="feature-card-text">
                      Réception, tri et transmission de votre courrier selon
                      vos instructions.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Accompagnement administratif
                    </h4>
                    <p className="feature-card-text">
                      Assistance dans vos démarches administratives et juridiques.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES DOMICILIATION ===== */}
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
                        Domiciliation juridique
                      </h4>
                      <p className="service-card_text">
                        Adresse légale pour l’immatriculation de votre société.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Gestion du courrier
                      </h4>
                      <p className="service-card_text">
                        Réception, scan et réexpédition de votre courrier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Services administratifs
                      </h4>
                      <p className="service-card_text">
                        Assistance administrative et secrétariat à la demande.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Accompagnement juridique
                      </h4>
                      <p className="service-card_text">
                        Support pour vos démarches légales et administratives.
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

export default AboutDomiciliation;
