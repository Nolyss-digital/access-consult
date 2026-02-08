import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactInner = () => {
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
        () => {
          alert("Votre demande a été envoyée avec succès ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Erreur lors de l’envoi ❌");
        }
      );
  };

  return (
    <>
      {/* MAP */}
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9565.613228298842!2d5.359119310342879!3d43.34736156146787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c03107883c51%3A0x125175eb86951373!2s106%20Av.%20de%20Saint-Louis%2C%2013015%20Marseille%2C%20France!5e1!3m2!1sfr!2stn!4v1770577434278!5m2!1sfr!2stn"
          allowFullScreen=""
          loading="lazy"
          title="Access Consulting"
        />
      </div>

      {/* CONTACT INFO */}
      <div className="contact-area space">
        <div className="container">
          <div className="contact-page-wrap bg-theme">
            <div className="row gy-40 align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Téléphone</h6>
                    <p className="contact-info_text">
                      0413415002 <br /> 0413415002
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Adresse</h6>
                    <p className="contact-info_text">
                      106 Avenue de Saint Louis 13015 Marseille, France
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info_details">
                    <h6 className="contact-info_title">Email</h6>
                    <p className="contact-info_text">
                      contact@access-consult.fr <br />
                      accueil@access-consult.fr
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-40 justify-content-between">

            <div className="col-lg-4">
              <div className="title-area mb-0">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Access Consulting
                </span>
                <h2 className="sec-title style2">Contactez-nous</h2>
                <p className="mb-40">
                  Vous avez un projet ou besoin d’un accompagnement ?
                  Notre équipe est à votre écoute.
                </p>

                <div className="social-btn style4">
                  <Link to="#"><i className="fab fa-facebook-f" /></Link>
                  <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                  <Link to="#"><i className="fab fa-instagram" /></Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-8">
              <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <div className="row">

                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom & Prénom"
                      className="form-control style-border"
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse email"
                      className="form-control style-border"
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Numéro de téléphone"
                      className="form-control style-border"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <select
                      name="subject"
                      className="form-select style-border"
                      required
                    >
                      <option value="">Choisir un service</option>
                      <option value="Création & gestion d’entreprises">Création & gestion d’entreprises</option>
                      <option value="Gestion de la paie">Gestion de la paie</option>
                      <option value="Domiciliation d’entreprises">Domiciliation d’entreprises</option>
                      <option value="Administration des entreprises">Administration des entreprises</option>
                      <option value="Assistance aux appels d’offres">Assistance aux appels d’offres</option>
                      <option value="Développement commercial">Développement commercial</option>
                      <option value="Création de sites web">Création de sites web</option>
                      <option value="Gestion des réseaux sociaux">Gestion des réseaux sociaux</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div className="col-12 form-group">
                    <textarea
                      name="message"
                      placeholder="Décrivez votre besoin..."
                      className="form-control style-border"
                      required
                    />
                  </div>

                  <div className="col-12 form-group mb-0">
                    <button type="submit" className="global-btn w-100">
                      Envoyer la demande
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInner;
