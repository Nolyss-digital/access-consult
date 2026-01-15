import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
     <div className="container">
  <div className="widget-area">
    <div className="row justify-content-between">

      {/* À propos / Logo */}
      <div className="col-md-6 col-xl-3">
        <div className="widget footer-widget widget-about">
          <div className="about-logo">
            <Link to="/">
              <img src="assets/img/logo.svg" alt="Acces Consulting" />
            </Link>
          </div>
          <p className="footer-text mb-30">
            Acces Consulting accompagne les entrepreneurs dans toutes leurs démarches juridiques et administratives.
          </p>
          <div className="social-btn style3">
            <span className="social-title">Suivez-nous</span>
            <Link to="#"><i className="fab fa-facebook-f" /></Link>
            <Link to="#"><i className="fab fa-instagram" /></Link>
            <Link to="#"><i className="fab fa-linkedin-in" /></Link>
            <Link to="#"><i className="fab fa-twitter" /></Link>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="col-md-6 col-xl-3">
        <div className="widget footer-widget">
          <h3 className="widget_title">Contact</h3>
          <div className="widget-contact2">

            <div className="widget-contact-grid">
              <div className="icon"><i className="fas fa-envelope" /></div>
              <div className="contact-grid-details">
                <h6>
                  <Link to="#">contact@acces-consulting.fr</Link>
                </h6>
              </div>
            </div>

            <div className="widget-contact-grid">
              <div className="icon"><i className="fas fa-map-marker-alt" /></div>
              <div className="contact-grid-details">
                <h6>12 Rue de l’Entreprise, 75001 Paris, France</h6>
              </div>
            </div>

            <div className="widget-contact-grid">
              <div className="working-time">
                <span className="title">Horaires</span>
                <p className="desc">Lundi à Vendredi : 09h00 - 17h00</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Liens utiles */}
      <div className="col-md-6 col-xl-auto">
        <div className="widget widget_nav_menu footer-widget">
          <h3 className="widget_title">Liens utiles</h3>
          <div className="menu-all-pages-container">
            <ul className="menu">
              <li><Link to="/service">Créer ma société</Link></li>
              <li><Link to="/service">Modifier une entreprise</Link></li>
              <li><Link to="/service">Fermer votre société</Link></li>
              <li><Link to="/service">Autres opérateurs</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Galerie */}
     

    </div>
  </div>

  {/* Copyright */}
  <div className="copyright-wrap">
    <div className="container">
      <div className="row gy-3 justify-content-lg-between justify-content-center">
        <div className="col-auto align-self-center">
          <p className="copyright-text text-center">
            © <Link to="#">Acces Consulting</Link> 2026 | Tous droits réservés
          </p>
        </div>
        <div className="col-auto">
          <div className="footer-links">
            <Link to="/contact">Mentions légales</Link>
            <Link to="/contact">Politique de confidentialité</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
};

export default FooterTwo;
