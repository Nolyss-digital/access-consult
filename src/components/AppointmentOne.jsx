import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const AppointmentOne = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ag73ud",
        "template_xahw0uo",
        formRef.current,
        "MlbeEsRE-w2Y8efeR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès ✅");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l’envoi ❌");
        }
      );
  };

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

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="appointment-form"
              >
                <div className="row">

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        placeholder="Nom complet"
                        required
                      />
                      <i className="fas fa-user" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control style-border"
                        name="email"
                        placeholder="Votre e-mail"
                        required
                      />
                      <i className="fas fa-envelope" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <select
                        name="subject"
                        className="form-select style-border"
                        required
                      >
                        <option value="">Sujet de votre demande</option>
                        <option value="Création & gestion d’entreprises">
                          Création & gestion d’entreprises
                        </option>
                        <option value="Gestion de la paie">
                          Gestion de la paie
                        </option>
                        <option value="Domiciliation d’entreprises">
                          Domiciliation d’entreprises
                        </option>
                        <option value="Administration des entreprises">
                          Administration des entreprises
                        </option>
                        <option value="Assistance aux appels d’offres">
                          Assistance aux appels d’offres
                        </option>
                        <option value="Réception & émission d’appels">
                          Réception & émission d’appels
                        </option>
                        <option value="Développement commercial">
                          Développement commercial
                        </option>
                        <option value="Création de sites web">
                          Création de sites web
                        </option>
                        <option value="Gestion des réseaux sociaux">
                          Gestion des réseaux sociaux
                        </option>
                      </select>
                      <i className="fas fa-angle-down" />
                    </div>
                  </div>

                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      placeholder="Votre message"
                      className="form-control style-border"
                      required
                    />
                  </div>

                  <div className="form-btn col-12">
                    <button type="submit" className="global-btn style-border">
                      Envoyer
                      <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>

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
