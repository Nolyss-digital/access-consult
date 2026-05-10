import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactInner = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: null, message: "" });
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, message: "" });

    emailjs
      .sendForm(
        "service_6ag73ud",
        "template_xahw0uo",
        formRef.current,
        "MlbeEsRE-w2Y8efeR"
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message:
              "Votre demande a bien été envoyée. Un expert Access Consulting vous répond sous 24 h ouvrées.",
          });
          formRef.current.reset();
          setSending(false);
        },
        () => {
          setStatus({
            type: "error",
            message:
              "Une erreur est survenue. Merci de réessayer ou de nous écrire directement à contact@access-consult.fr.",
          });
          setSending(false);
        }
      );
  };

  const contactInfos = [
    {
      icon: "fas fa-phone-alt",
      title: "Téléphone",
      lines: [
        { text: "04 13 41 50 02", href: "tel:+33413415002" },
        { text: "Lun. – Ven. · 9h – 18h" },
      ],
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      lines: [
        { text: "contact@access-consult.fr", href: "mailto:contact@access-consult.fr" },
        { text: "accueil@access-consult.fr", href: "mailto:accueil@access-consult.fr" },
      ],
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Adresse",
      lines: [
        {
          text: "106 Avenue de Saint Louis",
          href: "https://www.google.com/maps/place/106+Av.+de+Saint-Louis,+13015+Marseille",
          external: true,
        },
        { text: "13015 Marseille, France" },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="contact-page-hero">
        <div className="container">
          <div className="contact-page-hero__inner">
            <span className="contact-page-hero__label">Contact</span>
            <h1 className="contact-page-hero__title">
              Parlons de votre <span className="hl-blue">projet</span>
            </h1>
            <p className="contact-page-hero__text">
              Un expert Access Consulting vous répond sous 24&nbsp;h ouvrées
              avec une proposition claire et un devis gratuit, sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="contact-page-body">
        <div className="container">
          <div className="row gy-4">
            {/* Info column */}
            <div className="col-lg-5">
              <div className="contact-page-info">
                <span className="contact-page-info__eyebrow">
                  Nous contacter
                </span>
                <h2 className="contact-page-info__title">
                  Une équipe française à votre écoute
                </h2>
                <p className="contact-page-info__text">
                  Choisissez le canal qui vous convient. Devis gratuit,
                  réponse rapide et accompagnement humain garanti.
                </p>

                <ul className="contact-page-info__list">
                  {contactInfos.map((c, i) => (
                    <li key={i}>
                      <div className="contact-page-info__icon">
                        <i className={c.icon} />
                      </div>
                      <div>
                        <h4>{c.title}</h4>
                        {c.lines.map((l, k) =>
                          l.href ? (
                            <p key={k}>
                              <a
                                href={l.href}
                                {...(l.external
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                              >
                                {l.text}
                              </a>
                            </p>
                          ) : (
                            <p key={k}>{l.text}</p>
                          )
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="contact-page-info__socials">
                  <span>Suivez-nous :</span>
                  <Link to="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="#" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="col-lg-7">
              <div className="contact-page-form">
                <h3 className="contact-page-form__title">
                  Demander un devis gratuit
                </h3>
                <p className="contact-page-form__subtitle">
                  Remplissez le formulaire — réponse garantie sous 24&nbsp;h
                  ouvrées par un consultant français.
                </p>

                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="cf-name">Nom & prénom *</label>
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-email">Adresse e-mail *</label>
                      <input
                        id="cf-email"
                        type="email"
                        name="email"
                        placeholder="jean@entreprise.fr"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-phone">Téléphone</label>
                      <input
                        id="cf-phone"
                        type="text"
                        name="phone"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cf-subject">Service concerné *</label>
                      <select id="cf-subject" name="subject" required defaultValue="">
                        <option value="" disabled>
                          Choisir un service
                        </option>
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
                        <option value="Autre demande">Autre demande</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="cf-message">Votre message *</label>
                      <textarea
                        id="cf-message"
                        name="message"
                        rows="5"
                        placeholder="Décrivez votre besoin, votre activité et vos délais…"
                        required
                      />
                    </div>

                    {status.type && (
                      <div className="col-12">
                        <div
                          className={`contact-page-form__feedback contact-page-form__feedback--${status.type}`}
                        >
                          <i
                            className={
                              status.type === "success"
                                ? "fas fa-check-circle"
                                : "fas fa-exclamation-circle"
                            }
                          />
                          <span>{status.message}</span>
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <button
                        type="submit"
                        className="contact-page-form__btn"
                        disabled={sending}
                      >
                        {sending ? "Envoi en cours…" : "Envoyer ma demande"}
                        {!sending && <i className="fas fa-arrow-right" />}
                      </button>
                      <p className="contact-page-form__legal">
                        En envoyant ce formulaire, vous acceptez d’être
                        recontacté par Access Consulting. Vos données sont
                        traitées conformément au RGPD.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-page-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9565.613228298842!2d5.359119310342879!3d43.34736156146787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c03107883c51%3A0x125175eb86951373!2s106%20Av.%20de%20Saint-Louis%2C%2013015%20Marseille%2C%20France!5e1!3m2!1sfr!2stn!4v1770577434278!5m2!1sfr!2stn"
          allowFullScreen=""
          loading="lazy"
          title="Access Consulting — Marseille"
        />
      </section>
    </>
  );
};

export default ContactInner;
