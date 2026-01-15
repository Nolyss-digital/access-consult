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

              <li className="menu-item-has-children submenu-item-has-children">
                <Link to="#">Services</Link>
                <ul className="sub-menu submenu-class">
                  <li>
                    <Link to="/services/creer-societe" onClick={mobileMenu}>
                      Créer une société
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/modifier-entreprise" onClick={mobileMenu}>
                      Modifier une entreprise
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/operateur-capital" onClick={mobileMenu}>
                      Opérateur sur le capital
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/fermer-societe" onClick={mobileMenu}>
                      Fermer votre société
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/autres-operateurs" onClick={mobileMenu}>
                      Autres opérateurs
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/about" onClick={mobileMenu}>À propos</Link>
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

                      <li className="menu-item-has-children">
                        <Link to="#">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/services/creer-societe">
                              Créer une société
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/modifier-entreprise">
                              Modifier une entreprise
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/operateur-capital">
                              Opérateur sur le capital
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/fermer-societe">
                              Fermer votre société
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/autres-operateurs">
                              Autres opérateurs
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/about">À propos</Link>
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
                      <img
                        src="assets/img/icon/right-icon.svg"
                        alt="icon"
                      />
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
