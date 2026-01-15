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
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
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
                Simplifiez vos démarches juridiques
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="service-title-area">
              <p>
                Acces Consulting vous accompagne à chaque étape de la vie de votre entreprise : création, modification, gestion du capital ou fermeture.
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
                    <Link to="/service-details">Créer une société</Link>
                  </h4>
                  <p className="service-box_text">
                    Nous vous accompagnons dans toutes les étapes de la création de votre société.
                  </p>
                  <Link to="/service-details" className="global-btn style-border">
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
                    <Link to="/service-details">Modifier une entreprise</Link>
                  </h4>
                  <p className="service-box_text">
                    Mise à jour de l’objet social, du capital ou de la gouvernance de votre entreprise.
                  </p>
                  <Link to="/service-details" className="global-btn style-border">
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
                    <Link to="/service-details">Opérateur sur le capital</Link>
                  </h4>
                  <p className="service-box_text">
                    Gestion et suivi des opérations liées au capital social de votre société.
                  </p>
                  <Link to="/service-details" className="global-btn style-border">
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
                    <Link to="/service-details">Fermer votre société</Link>
                  </h4>
                  <p className="service-box_text">
                    Nous prenons en charge la dissolution et la liquidation en respectant toutes les obligations légales et fiscales.
                  </p>
                  <Link to="/service-details" className="global-btn style-border">
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
                    <Link to="/service-details">Autres opérateurs</Link>
                  </h4>
                  <p className="service-box_text">
                    Nous accompagnons vos autres besoins administratifs et juridiques pour sécuriser votre activité.
                  </p>
                  <Link to="/service-details" className="global-btn style-border">
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
