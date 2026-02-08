import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AboutPaie = () => {
  return (
    <>
      {/* ===== ABOUT PAIE ===== */}
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
                  Gestion de la paie
                </span>
                <h2 className="sec-title style2">
                  Une paie fiable, conforme et sécurisée
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting prend en charge l’intégralité de votre gestion
                  de la paie : bulletins, déclarations sociales, conformité légale
                  et accompagnement RH, pour vous garantir sérénité et précision.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Conformité légale & sociale</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">95</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Fiabilité des bulletins de paie</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "98%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">98</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">Satisfaction clients</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "97%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">97</span>%
                  </div>
                </div>
              </div>

              <div className="btn-wrap mt-50">
                <Link to="/contact" className="global-btn mt-xl-0 mt-20">
                  Demander un devis <i className="fas fa-arrow-right ms-2" />
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
                      Une gestion de paie sans risques
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous sécurisons votre paie et vos obligations sociales,
                    tout en vous faisant gagner du temps et de la tranquillité.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Externalisation complète
                    </h4>
                    <p className="feature-card-text">
                      Prise en charge totale de la paie : bulletins, charges,
                      déclarations et suivi réglementaire.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Sécurité & confidentialité
                    </h4>
                    <p className="feature-card-text">
                      Vos données salariales sont traitées avec des standards
                      élevés de sécurité et de confidentialité.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Accompagnement RH
                    </h4>
                    <p className="feature-card-text">
                      Conseil sur les contrats, congés, absences et obligations
                      sociales de votre entreprise.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES PAIE ===== */}
          <div className="service-area-3 space-bottom overflow-hidden">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5">
                  <div className="title-area text-center">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      Nos services paie
                    </span>
                    <h2 className="sec-title style2">
                      Des solutions adaptées à votre entreprise
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row gx-30 gy-30 justify-content-center">

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Bulletins de paie
                      </h4>
                      <p className="service-card_text">
                        Établissement précis et conforme des bulletins de paie.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Déclarations sociales
                      </h4>
                      <p className="service-card_text">
                        Dépôt des déclarations sociales et fiscales obligatoires.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Gestion des contrats
                      </h4>
                      <p className="service-card_text">
                        Suivi des embauches, avenants et sorties du personnel.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Assistance & conseil
                      </h4>
                      <p className="service-card_text">
                        Support continu et veille réglementaire permanente.
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

export default AboutPaie;
