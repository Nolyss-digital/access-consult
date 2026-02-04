import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ServiceThree = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="service-area-2 space-bottom">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-5">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Nos Services
              </span>
              <h2 className="sec-title style2">
                Des solutions complètes pour votre entreprise
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="service-title-area">
              <p>
                Acces Consulting vous propose un accompagnement global :
                juridique, administratif, commercial et digital.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row gx-30 global-carousel service-slider2">
          <Slider {...settings}>

            {/* Service 1 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/creation-gestion-entreprises">
                      Création & gestion d’entreprises
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Création, suivi juridique et accompagnement complet de votre entreprise.
                  </p>
                  <Link to="/creation-gestion-entreprises" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/gestion-paie">Gestion de la paie</Link>
                  </h4>
                  <p className="service-box_text">
                    Externalisation de la paie et conformité sociale.
                  </p>
                  <Link to="/gestion-paie" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/domiciliation-entreprises">
                      Domiciliation d’entreprises
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Adresse légale et services de domiciliation professionnelle.
                  </p>
                  <Link to="/domiciliation-entreprises" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-4.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/administration-entreprises">
                      Administration des entreprises
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Gestion administrative et suivi réglementaire.
                  </p>
                  <Link to="/administration-entreprises" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/Assistance-appels-offres">
                      Assistance aux appels d’offres
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Accompagnement dans la préparation et le suivi des appels d’offres.
                  </p>
                  <Link to="/Assistance-appels-offres" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/reception-emission-appels">
                      Réception & émission d’appels
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Gestion professionnelle des appels entrants et sortants.
                  </p>
                  <Link to="/reception-emission-appels" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 7 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/services/developpement-commercial">
                      Développement commercial
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Stratégies pour booster vos ventes et votre visibilité.
                  </p>
                  <Link to="/services/developpement-commercial" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 8 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-4.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/services/creation-sites-web">
                      Création de sites web
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Sites modernes, performants et adaptés à votre activité.
                  </p>
                  <Link to="/services/creation-sites-web" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 9 */}
            <div className="p-3">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/services/gestion-reseaux-sociaux">
                      Gestion des réseaux sociaux
                    </Link>
                  </h4>
                  <p className="service-box_text">
                    Animation, contenu et croissance de votre présence digitale.
                  </p>
                  <Link to="/services/gestion-reseaux-sociaux" className="global-btn style-border">
                    Lire plus
                    <img src="assets/img/icon/right-icon2.svg" alt="Acces Consulting" />
                  </Link>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceThree;
