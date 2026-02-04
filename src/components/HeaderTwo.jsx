import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let offCanvasNav = document.getElementById("offcanvas-navigation");
    let offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    let menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    let numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 250) {
        setScroll(false);
      } else if (window.pageYOffset > 250) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };


  return (
  <>
    {/* ================= Mobile Menu ================= */}
    <div className={`mobile-menu-wrapper ${active ? "body-visible" : ""}`}>
      <div className="mobile-menu-area">
        <div className="mobile-logo">
          <Link to="/">
            <img src="assets/img/logo.svg" alt="Logo" />
          </Link>
          <button className="menu-toggle" onClick={mobileMenu}>
            <i className="fa fa-times" />
          </button>
        </div>

        <div className="mobile-menu">
          <ul id="offcanvas-navigation">
            <li>
              <Link to="/" onClick={mobileMenu}>Accueil</Link>
            </li>

            <li>
              <Link to="/about" onClick={mobileMenu}>À propos</Link>
            </li>

            <li className="menu-item-has-children submenu-item-has-children">
              <Link to="#">Services</Link>
              <ul className="sub-menu submenu-class">
                <li><Link to="/creation-gestion-entreprises" onClick={mobileMenu}>Création & gestion d’entreprises</Link></li>
                <li><Link to="/gestion-paie" onClick={mobileMenu}>Gestion de la paie</Link></li>
                <li><Link to="/services/domiciliation-entreprises" onClick={mobileMenu}>Domiciliation d’entreprises</Link></li>
                <li><Link to="/services/administration-entreprises" onClick={mobileMenu}>Administration des entreprises</Link></li>
                <li><Link to="/services/appels-offres" onClick={mobileMenu}>Assistance aux appels d’offres</Link></li>
                <li><Link to="/services/reception-emission-appels" onClick={mobileMenu}>Réception & émission d’appels</Link></li>
                <li><Link to="/services/developpement-commercial" onClick={mobileMenu}>Développement commercial</Link></li>
                <li><Link to="/services/creation-sites-web" onClick={mobileMenu}>Création de sites web</Link></li>
                <li><Link to="/services/gestion-reseaux-sociaux" onClick={mobileMenu}>Gestion des réseaux sociaux</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/contact" onClick={mobileMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* ================= Header Area ================= */}
    <header className="nav-header header-layout2">
      <div className={`sticky-wrapper ${scroll ? "sticky" : ""}`}>
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">

              {/* Logo */}
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img src="assets/img/logo.svg" alt="Logo" />
                  </Link>
                </div>
              </div>

              {/* Main Menu */}
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link to="/">Accueil</Link>
                    </li>

                    <li>
                      <Link to="/about">À propos</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link to="#">Services</Link>
                      <ul className="sub-menu">
                        <li><Link to="/creation-gestion-entreprises">Création & gestion d’entreprises</Link></li>
                        <li><Link to="/gestion-paie">Gestion de la paie</Link></li>
                        <li><Link to="/domiciliation-entreprises">Domiciliation d’entreprises</Link></li>
                        <li><Link to="/administration-entreprises">Administration des entreprises</Link></li>
                        <li><Link to="/Assistance-appels-offres">Assistance aux appels d’offres</Link></li>
                        <li><Link to="/reception-emission-appels">Réception & émission d’appels</Link></li>
                        <li><Link to="/services/developpement-commercial">Développement commercial</Link></li>
                        <li><Link to="/services/creation-sites-web">Création de sites web</Link></li>
                        <li><Link to="/services/gestion-reseaux-sociaux">Gestion des réseaux sociaux</Link></li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>

                {/* Mobile Toggle */}
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>

              {/* Button */}
              <div className="col-auto d-xl-block d-none">
                <div className="header-button">
                  <Link to="/contact" className="global-btn">
                    Nous contacter
                    <img src="assets/img/icon/right-icon.svg" alt="icon" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);


};

export default HeaderTwo;
