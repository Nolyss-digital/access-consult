import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";

const Blog = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"Blog"} />
      <HeaderTwo />

      <section className="blog-soon">
        <div className="container">
          <div className="blog-soon__card">
            <div className="blog-soon__icon">
              <i className="fas fa-feather-alt" />
            </div>
            <h1 className="blog-soon__title">
              Le blog arrive <span className="hl-blue">bientôt</span>
            </h1>
            <p className="blog-soon__text">
              Notre équipe prépare des articles dédiés aux entrepreneurs,
              TPE et PME françaises : conseils juridiques, paie, fiscalité,
              développement commercial et SEO. Revenez dans quelques semaines
              pour découvrir nos premières publications.
            </p>

            <div className="blog-soon__actions">
              <Link to="/contact" className="blog-soon__cta">
                Être prévenu au lancement
                <i className="fas fa-arrow-right" />
              </Link>
              <Link to="/service" className="blog-soon__link">
                Découvrir nos services <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />
    </>
  );
};

export default Blog;
