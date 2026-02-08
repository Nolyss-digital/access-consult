import React from "react";
import { Link } from "react-router-dom";

const AboutAdministaration = () => {
  return (
    <>
      {/* ===== ABOUT ADMINISTRATION ===== */}
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
                  Administration des entreprises
                </span>
                <h2 className="sec-title style2">
                  Une gestion administrative claire et maîtrisée
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting prend en charge l’administration quotidienne
                  de votre entreprise afin de vous libérer des contraintes
                  administratives et vous permettre de vous concentrer sur votre
                  développement.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Conformité administrative & légale
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
                  Organisation & suivi des dossiers
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "96%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">96</span>%
                  </div>
                </div>
              </div>

              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Satisfaction clients
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
                  Confier mon administration <i className="fas fa-arrow-right ms-2" />
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
                      Une administration sans contraintes
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous assurons une gestion administrative rigoureuse,
                    transparente et conforme pour sécuriser le fonctionnement
                    de votre entreprise.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Suivi administratif complet
                    </h4>
                    <p className="feature-card-text">
                      Gestion et organisation de l’ensemble de vos documents
                      administratifs.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Respect des obligations légales
                    </h4>
                    <p className="feature-card-text">
                      Suivi des échéances et conformité avec la réglementation
                      en vigueur.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Accompagnement continu
                    </h4>
                    <p className="feature-card-text">
                      Un interlocuteur dédié pour vous accompagner au quotidien.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES ADMINISTRATION ===== */}
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
                        Gestion administrative courante
                      </h4>
                      <p className="service-card_text">
                        Suivi des documents, courriers et obligations
                        administratives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Relations avec les administrations
                      </h4>
                      <p className="service-card_text">
                        Interface avec les organismes et administrations
                        publiques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Classement & archivage
                      </h4>
                      <p className="service-card_text">
                        Organisation, classement et archivage sécurisé
                        des documents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Assistance administrative
                      </h4>
                      <p className="service-card_text">
                        Support administratif personnalisé selon vos besoins.
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

export default AboutAdministaration;
