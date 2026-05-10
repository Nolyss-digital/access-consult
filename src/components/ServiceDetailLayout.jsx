import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "./HeaderTwo";
import FooterTwo from "./FooterTwo";
import CTATwo from "./CTATwo";

/**
 * Reusable service detail page layout.
 *
 * Props:
 * - label, title, titleAccent, intro: hero content (titleAccent = blue italic word)
 * - image: side image for the description section
 * - description: paragraph
 * - bullets: array of strings
 * - features: array of { icon, title, text }
 * - variantGroups: array of { title, items: string[] }
 */
const ServiceDetailLayout = ({
  helmetTitle,
  label,
  title,
  titleAccent,
  intro,
  image,
  description,
  bullets = [],
  features = [],
  variantGroups = [],
}) => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={helmetTitle || title} />
      <HeaderTwo />

      {/* Hero */}
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-hero__inner">
            <span className="service-detail-hero__label">{label}</span>
            <h1 className="service-detail-hero__title">
              {titleAccent ? (
                <>
                  {title.split(titleAccent)[0]}
                  <span className="hl-blue">{titleAccent}</span>
                  {title.split(titleAccent)[1]}
                </>
              ) : (
                title
              )}
            </h1>
            {intro && <p className="service-detail-hero__text">{intro}</p>}
            <div className="service-detail-hero__actions">
              <Link to="/contact" className="service-detail-hero__cta">
                Demander un devis
                <i className="fas fa-arrow-right" />
              </Link>
              <Link to="/service" className="service-detail-hero__link">
                Tous les services <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description + image */}
      {(description || bullets.length > 0 || image) && (
        <section className="service-detail-about">
          <div className="container">
            <div className="row align-items-center gy-4">
              {image && (
                <div className="col-lg-6">
                  <div className="service-detail-about__image-wrap">
                    <img src={image} alt={title} />
                  </div>
                </div>
              )}
              <div className={image ? "col-lg-6" : "col-lg-12"}>
                <span className="service-detail-about__eyebrow">
                  Notre approche
                </span>
                <h2 className="service-detail-about__title">
                  Un accompagnement <span className="hl-blue">sur mesure</span>
                </h2>
                {description && (
                  <p className="service-detail-about__text">{description}</p>
                )}
                {bullets.length > 0 && (
                  <ul className="service-detail-about__bullets">
                    {bullets.map((b, i) => (
                      <li key={i}>
                        <i className="far fa-check-circle" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className="service-detail-features">
          <div className="container">
            <div className="service-detail-features__header">
              <span className="service-detail-features__label">
                Nos engagements
              </span>
              <h2 className="service-detail-features__title">
                Pourquoi nous <span className="hl-blue">choisir</span>
              </h2>
            </div>
            <div className="service-detail-features__grid">
              {features.map((f, i) => (
                <article className="service-detail-features__card" key={i}>
                  <div className="service-detail-features__icon">
                    <i className={f.icon} />
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Variant groups */}
      {variantGroups.length > 0 && (
        <section className="service-detail-variants">
          <div className="container">
            {variantGroups.map((group, gi) => (
              <div className="service-detail-variants__group" key={gi}>
                <div className="service-detail-variants__group-head">
                  <h3>{group.title}</h3>
                </div>
                <div className="service-detail-variants__grid">
                  {group.items.map((item, i) => (
                    <div className="service-detail-variants__chip" key={i}>
                      <i className="fas fa-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <CTATwo />
      <FooterTwo />
    </>
  );
};

export default ServiceDetailLayout;
