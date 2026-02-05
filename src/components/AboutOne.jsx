import React from "react";
import { Link } from "react-router-dom";

const AboutOne = () => {
  return (
    <div className="about-area-1 position-relative space-top">
      <div className="about1-shape-img1">
        <img
          className="about1-shape-img-1"
          src="assets/img/normal/about_shape1-1.jpg"
          alt="img"
        />
      </div>
      <div className="about1-shape-img2">
        <img
          className="about1-shape-img-2"
          src="assets/img/normal/about_shape1-2.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  À propos de nous
                </span>
                <h2 className="sec-title">
                  Un partenaire fiable pour votre entreprise
                </h2>
                <p className="sec-text mb-35">
                  Acces Consulting accompagne les entrepreneurs et dirigeants
                  dans toutes les démarches juridiques, administratives et
                  stratégiques liées à la vie de leur entreprise.
                </p>
              </div>

              <div className="achive-about">
                <div className="achive-about_content">
                  <div className="achive-about_icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">
                      Accompagnement juridique sur mesure
                    </h3>
                    <p className="achive-about_text">
                      De la création à l’évolution de votre société, nous
                      sécurisons chaque étape en conformité avec la
                      réglementation en vigueur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="achive-about">
                <div className="achive-about_content">
                  <div className="achive-about_icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">
                      Expertise administrative & business
                    </h3>
                    <p className="achive-about_text">
                      Gestion administrative, paie, domiciliation,
                      développement commercial et solutions digitales pour
                      soutenir la croissance de votre entreprise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="btn-wrap mt-20">
                <Link to="/about" className="global-btn mt-xl-0 mt-20">
                  En savoir plus <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutOne;
