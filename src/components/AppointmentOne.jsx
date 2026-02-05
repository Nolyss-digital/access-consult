import React from "react";

const AppointmentOne = () => {
  return (
    <div className="appointment-area-2 space-bottom overflow-hidden">
      <div className="container">
        <div className="row">

          {/* Image côté gauche */}
          <div className="col-xl-6">
            <div className="appointment-thumb-2">
              <img
                src="assets/img/normal/appointment-thumb-2-1.png"
                alt="img"
              />
            </div>
          </div>

          {/* Formulaire côté droit */}
          <div className="col-xl-6">
            <div className="appointment-form-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Contactez-nous
                </span>
                <h2 className="sec-title style2">Conseil & Accompagnement</h2>
              </div>
              <form className="appointment-form ajax-contact">
                <div className="row">

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Nom complet"
                      />
                      <i className="fas fa-user" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Votre e-mail"
                      />
                      <i className="fas fa-envelope" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select style-border"
                      >
                        <option defaultValue="">Sujet de votre demande</option>
                        <option value="creation-gestion-entreprises">
                          Création & gestion d’entreprises
                        </option>
                        <option value="gestion-paie">
                          Gestion de la paie
                        </option>
                        <option value="domiciliation-entreprises">
                          Domiciliation d’entreprises
                        </option>
                        <option value="administration-entreprises">
                          Administration des entreprises
                        </option>
                        <option value="assistance-appels-offres">
                          Assistance aux appels d’offres
                        </option>
                        <option value="reception-emission-appels">
                          Réception & émission d’appels
                        </option>
                        <option value="developpement-commercial">
                          Développement commercial
                        </option>
                        <option value="creation-sites-web">
                          Création de sites web
                        </option>
                        <option value="gestion-reseaux-sociaux">
                          Gestion des réseaux sociaux
                        </option>

                      </select>
                      <i className="fas fa-angle-down" />
                    </div>
                  </div>

                </div>

                <div className="form-group col-12">
                  <textarea
                    placeholder="Votre message"
                    id="contactForm"
                    className="form-control style-border"
                    defaultValue={""}
                  />
                </div>

                <div className="form-btn col-12">
                  <button className="global-btn style-border">
                    Envoyer
                    <i className="fas fa-arrow-right ms-2" />
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default AppointmentOne;
