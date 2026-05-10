import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="row gy-4 footer-light__main justify-content-between">
          {/* Column 1 — brand */}
          <div className="col-lg-5 col-md-12">
            <div className="footer-light__brand">
              <Link to="/" className="footer-light__logo">
                <img src="assets/img/logo.svg" alt="Access Consulting" />
              </Link>

              <p className="footer-light__about">
                Access Consulting — cabinet français de conseil et de formalités
                d’entreprise. Création, gestion, paie, domiciliation et
                développement commercial pour TPE, PME, indépendants et
                porteurs de projet partout en France.
              </p>

              <ul className="footer-light__contact">
                <li>
                  <i className="fas fa-phone-alt" />
                  <a href="tel:+33184950000">+33 1 84 95 00 00</a>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <a href="mailto:contact@acces-consult.fr">
                    contact@acces-consult.fr
                  </a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <span>Paris · Lyon · Marseille · Bordeaux</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-light__title">Services</h4>
            <ul className="footer-light__menu">
              <li>
                <Link to="/creation-gestion-entreprises">
                  Création d’entreprise
                </Link>
              </li>
              <li>
                <Link to="/gestion-paie">Gestion de la paie</Link>
              </li>
              <li>
                <Link to="/domiciliation-entreprises">Domiciliation</Link>
              </li>
              <li>
                <Link to="/developpement-commercial">
                  Développement commercial
                </Link>
              </li>
              <li>
                <Link to="/creation-site-web">Sites web & SEO</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Société */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-light__title">Société</h4>
            <ul className="footer-light__menu">
              <li>
                <Link to="/about">À propos</Link>
              </li>
              <li>
                <Link to="/avis-clients">Avis clients</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/contact">Mentions légales</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-light__bottom">
          <p>
            © 2026 Access Consulting — Cabinet de conseil aux entreprises en
            France. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
