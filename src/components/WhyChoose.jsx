import React from "react";

const WhyChoose = () => {
 return (
  <div className="wcu-area-2 ">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="title-area text-center me-xl-4 ms-xl-4">
            <span className="sub-title">
              <img src="assets/img/icon/title_left.svg" alt="shape" />
              Pourquoi nous choisir
            </span>
            <h2 className="sec-title style2">
              Une gestion sur mesure pour votre entreprise
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6">
          <div className="wcu-thumb">
            <div className="wcu-thumb-1">
              <img src="assets/img/normal/wcu-thumb-1-1.png" alt="Acces Consulting" />
            </div>
            <div className="wcu-shape jump">
              <img src="assets/img/normal/1.png" alt="shape" />
            </div>
            <div className="wcu-shape2 movingX">
              <img src="assets/img/normal/2.png" alt="shape" />
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="wcu-card-wrap">

            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-1.svg" alt="icon" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">
                  Transparence
                </h4>
                <p className="wcu-card-text">
                  Des tarifs clairs, sans surprise, pour une gestion
                  juridique simple et accessible.
                </p>
              </div>
            </div>

            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-2.svg" alt="icon" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">
                  Fiabilité & expertise
                </h4>
                <p className="wcu-card-text">
                  Nos experts assurent un suivi rigoureux et la conformité
                  de toutes vos formalités.
                </p>
              </div>
            </div>

            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-3.svg" alt="icon" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">
                  Accompagnement humain
                </h4>
                <p className="wcu-card-text">
                  Une équipe basée en France, à votre écoute à chaque
                  étape de vos démarches.
                </p>
              </div>
            </div>

            <div className="wcu-card">
              <div className="icon">
                <img src="assets/img/icon/wcu-icon_2-4.svg" alt="icon" />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">
                  Simplicité & rapidité
                </h4>
                <p className="wcu-card-text">
                  Une plateforme intuitive pour gérer vos formalités
                  juridiques en quelques clics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default WhyChoose;
