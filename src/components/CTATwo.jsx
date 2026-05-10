import React from "react";
import { Link } from "react-router-dom";

const CTATwo = () => {
  return (
    <section className="cta-light">
      <div className="container">
        <div className="cta-light__card">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="cta-light__label">Contactez-nous</span>
              <h2 className="cta-light__title">
                Conseil et accompagnement{" "}
                <span className="cta-light__title-accent">personnalisé</span>
              </h2>
              <p className="cta-light__text">
                Parlons de votre projet. Un expert Access Consulting vous
                répond sous 24&nbsp;h ouvrées avec une proposition claire et
                un devis gratuit.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="cta-light__panel">
                <h4 className="cta-light__panel-title">
                  Demander un devis gratuit
                </h4>
                <p className="cta-light__panel-text">
                  Réponse garantie sous 24&nbsp;h ouvrées par un consultant
                  français.
                </p>
                <Link to="/contact" className="cta-light__btn">
                  Démarrer ma demande
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
