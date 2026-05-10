import React from "react";
import { Link } from "react-router-dom";

const HeroTwo = () => {
  return (
    <section className="hero-light" id="hero">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Content */}
          <div className="col-lg-6">
            <span className="hero-light__badge">
              <span className="hero-light__badge-dot" />
              Cabinet de conseil aux entreprises · France
            </span>

            <h1 className="hero-light__title">
              Vos <span className="hl-blue">formalités</span> d’entreprise enfin{" "}
              <span className="hl-yellow">simplifiées</span>.
            </h1>

            <p className="hero-light__text">
              Access Consulting accompagne entrepreneurs, TPE et PME françaises
              dans la création, la gestion et le développement de leur activité.
              Conseil juridique, paie, domiciliation et stratégie commerciale,
              100&nbsp;% en ligne.
            </p>

            <div className="hero-light__actions">
              <Link to="/creation-gestion-entreprises" className="global-btn">
                Créer mon entreprise
                <img src="assets/img/icon/right-icon.svg" alt="" />
              </Link>
              <Link to="/service" className="hero-light__link">
                Découvrir nos services <i className="fas fa-arrow-right" />
              </Link>
            </div>

            <ul className="hero-light__guarantees">
              <li>
                <i className="fas fa-check" /> Devis gratuit
              </li>
              <li>
                <i className="fas fa-check" /> Sans engagement
              </li>
              <li>
                <i className="fas fa-check" /> Réponse 24h
              </li>
            </ul>
          </div>

          {/* Visual */}
          <div className="col-lg-6">
            <div className="hero-light__visual">
              <img
                src="assets/img/Conseil-RH.jpg"
                alt="Conseil RH — Access Consulting"
                className="hero-light__image"
              />
              <div className="hero-light__stat">
                <div className="hero-light__stat-number">98%</div>
                <div className="hero-light__stat-text">
                  <strong>Clients satisfaits</strong>
                  <small>Sur 100+ missions en France</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
