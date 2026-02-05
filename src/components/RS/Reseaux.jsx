import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Reseaux = () => {
  return (
    <>
      {/* ===== ABOUT SOCIAL MEDIA ===== */}
      <div className="about-area-3 space">
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center">

            {/* Image + Counter */}
            <div className="col-xl-6">
              <div className="about-thumb3">
                <div className="img1">
                  <img
                    src="assets/img/normal/about_3-1.jpg"
                    alt="Gestion des réseaux sociaux"
                  />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={10} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <p>Années d’expertise en social media</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-6">
              <div className="title-area mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Gestion des réseaux sociaux
                </span>
                <h2 className="sec-title style2">
                  Développez votre visibilité et votre engagement
                </h2>
                <p className="sec-text mb-35">
                  Access Consulting gère et optimise votre présence sur les
                  réseaux sociaux afin de renforcer votre image de marque,
                  engager votre communauté et générer des opportunités
                  commerciales.
                </p>
              </div>

              {/* Skills */}
              <div className="skill-feature style2 position-relative">
                <h3 className="skill-feature_title">
                  Stratégie social media
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
                  Création de contenu
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
                  Engagement & croissance
                </h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "98%" }}></div>
                  <div className="progress-value">
                    <span className="counter-number">98</span>%
                  </div>
                </div>
              </div>

              <div className="btn-wrap mt-50">
                <Link to="/contact" className="global-btn mt-xl-0 mt-20">
                  Gérer mes réseaux sociaux <i className="fas fa-arrow-right ms-2" />
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
                      Une présence digitale cohérente et performante
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <p className="mb-60">
                    Nous construisons une stratégie social media alignée
                    avec vos objectifs business et votre audience.
                  </p>
                </div>
              </div>

              <div className="row gy-40 justify-content-center">

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Ligne éditoriale claire
                    </h4>
                    <p className="feature-card-text">
                      Définition d’un ton, d’un style et d’un message cohérents
                      avec votre marque.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Animation de communauté
                    </h4>
                    <p className="feature-card-text">
                      Gestion des commentaires, messages et interactions
                      avec votre audience.
                    </p>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="feature-card">
                    <h4 className="feature-card-title">
                      Analyse & optimisation
                    </h4>
                    <p className="feature-card-text">
                      Suivi des performances et optimisation continue
                      des contenus.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== SERVICES SOCIAL MEDIA ===== */}
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
                      Des solutions pour booster votre visibilité
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row gx-30 gy-30 justify-content-center">

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Stratégie social media
                      </h4>
                      <p className="service-card_text">
                        Définition d’une stratégie adaptée à votre cible
                        et vos objectifs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Création de contenu
                      </h4>
                      <p className="service-card_text">
                        Visuels, vidéos et publications engageantes
                        et professionnelles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Gestion des pages
                      </h4>
                      <p className="service-card_text">
                        Animation et modération de vos comptes
                        sur les réseaux sociaux.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 service-card-wrap">
                  <div className="service-card-2">
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        Reporting & analyse
                      </h4>
                      <p className="service-card_text">
                        Suivi des performances et recommandations
                        d’optimisation.
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

export default Reseaux;
