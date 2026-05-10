import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderTwo = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSub(null);
  };

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/" && location.pathname === "/home-2");

  const services = [
    { to: "/creation-gestion-entreprises", label: "Création & gestion d’entreprises" },
    { to: "/gestion-paie", label: "Gestion de la paie" },
    { to: "/domiciliation-entreprises", label: "Domiciliation d’entreprises" },
    { to: "/administration-entreprises", label: "Administration des entreprises" },
    { to: "/Assistance-appels-offres", label: "Assistance aux appels d’offres" },
    { to: "/reception-emission-appels", label: "Réception & émission d’appels" },
    { to: "/developpement-commercial", label: "Développement commercial" },
    { to: "/creation-site-web", label: "Création de sites web" },
    { to: "/gestion-reseaux-sociaux", label: "Gestion des réseaux sociaux" },
  ];

  return (
    <>
      <header className={`navbar-light ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container navbar-light__inner">
          {/* Logo */}
          <Link to="/" className="navbar-light__logo">
            <img src="assets/img/logo.svg" alt="Access Consulting" />
          </Link>

          {/* Desktop menu */}
          <nav className="navbar-light__menu">
            <ul>
              <li>
                <Link to="/" className={isActive("/") ? "is-active" : ""}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive("/about") ? "is-active" : ""}>
                  À propos
                </Link>
              </li>
              <li className="has-sub">
                <Link to="/service" className={isActive("/service") ? "is-active" : ""}>
                  Services <i className="fas fa-chevron-down" />
                </Link>
                <ul className="sub-menu">
                  {services.map((s) => (
                    <li key={s.to}>
                      <Link to={s.to}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  to="/avis-clients"
                  className={isActive("/avis-clients") ? "is-active" : ""}
                >
                  Avis clients
                </Link>
              </li>
              <li>
                <Link to="/blog" className={isActive("/blog") ? "is-active" : ""}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive("/contact") ? "is-active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="navbar-light__actions">
            <Link to="/contact" className="navbar-light__cta">
              Devis gratuit
              <i className="fas fa-arrow-right" />
            </Link>
            <button
              type="button"
              className="navbar-light__toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`navbar-light__drawer ${mobileOpen ? "is-open" : ""}`}>
        <div className="navbar-light__drawer-head">
          <Link to="/" onClick={closeMobile}>
            <img src="assets/img/logo.svg" alt="Access Consulting" />
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            aria-label="Fermer le menu"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <ul className="navbar-light__drawer-menu">
          <li>
            <Link to="/" onClick={closeMobile}>Accueil</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobile}>À propos</Link>
          </li>
          <li className={`has-sub ${openSub === "services" ? "is-open" : ""}`}>
            <button
              type="button"
              onClick={() =>
                setOpenSub(openSub === "services" ? null : "services")
              }
            >
              Services <i className="fas fa-chevron-down" />
            </button>
            <ul>
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} onClick={closeMobile}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/avis-clients" onClick={closeMobile}>Avis clients</Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMobile}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobile}>Contact</Link>
          </li>
        </ul>

        <div className="navbar-light__drawer-cta">
          <Link to="/contact" onClick={closeMobile} className="navbar-light__cta">
            Devis gratuit
            <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="navbar-light__backdrop"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default HeaderTwo;
