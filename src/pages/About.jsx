import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import CTATwo from "../components/CTATwo";

const values = [
  {
    icon: "fas fa-award",
    title: "Excellence",
    text: "Une exigence de qualité sur chaque dossier confié à nos consultants.",
  },
  {
    icon: "fas fa-heart",
    title: "Proximité",
    text: "Un interlocuteur dédié qui connaît votre activité et votre secteur.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Résultats",
    text: "Des indicateurs clairs et un suivi mesurable de chaque mission.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Transparence",
    text: "Des tarifs forfaitaires affichés, sans frais cachés ni surprises.",
  },
];

const About = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"À propos"} />
      <HeaderTwo />

      {/* Hero / intro */}
      <section className="about-page-hero">
        <div className="container">
          <div className="about-page-hero__inner">
            <span className="about-page-hero__label">À propos</span>
            <h1 className="about-page-hero__title">
              Un cabinet <span className="hl-blue">français</span> au service
              des entrepreneurs
            </h1>
            <p className="about-page-hero__text">
              Fondé pour simplifier la vie des dirigeants, Access Consulting
              réunit juristes, gestionnaires de paie et experts du
              développement commercial. Nous accompagnons chaque année des
              centaines de TPE, PME et indépendants partout en France
              métropolitaine, avec une approche humaine, rigoureuse et
              100&nbsp;% digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="about-page-mv">
        <div className="container">
          <div className="about-page-mv__grid">
            <article className="about-page-mv__card about-page-mv__card--mission">
              <div className="about-page-mv__icon">
                <i className="fas fa-bullseye" />
              </div>
              <h3 className="about-page-mv__title">Notre mission</h3>
              <p className="about-page-mv__text">
                Permettre à chaque entrepreneur français de se concentrer sur
                son cœur de métier en lui confiant ses formalités juridiques,
                sa paie, sa domiciliation et son développement. Nous croyons
                qu’un accompagnement clair, conforme au droit français et
                livré de manière transparente est le meilleur levier de
                croissance pour les PME.
              </p>
              <ul className="about-page-mv__points">
                <li><i className="fas fa-check" /> Conformité au droit français</li>
                <li><i className="fas fa-check" /> Approche transparente</li>
                <li><i className="fas fa-check" /> Pensé pour les TPE & PME</li>
              </ul>
            </article>

            <article className="about-page-mv__card about-page-mv__card--vision">
              <div className="about-page-mv__icon">
                <i className="fas fa-eye" />
              </div>
              <h3 className="about-page-mv__title">Notre vision</h3>
              <p className="about-page-mv__text">
                Devenir le cabinet de référence des dirigeants français qui
                veulent un partenaire unique pour structurer, sécuriser et
                accélérer leur entreprise. De la création d’une SAS à la
                gestion d’un portefeuille de plusieurs filiales, nous adaptons
                nos services à chaque étape de la vie de l’entreprise.
              </p>
              <ul className="about-page-mv__points">
                <li><i className="fas fa-check" /> Partenaire unique 360°</li>
                <li><i className="fas fa-check" /> Structurer, sécuriser, accélérer</li>
                <li><i className="fas fa-check" /> Tout le cycle de vie de l’entreprise</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="about-page-values">
        <div className="container">
          <div className="about-page-values__header">
            <h3 className="about-page-values__title">Nos valeurs</h3>
          </div>

          <div className="about-page-values__grid">
            {values.map((v, i) => (
              <article className="about-page-values__card" key={i}>
                <div className="about-page-values__icon">
                  <i className={v.icon} />
                </div>
                <h4 className="about-page-values__card-title">{v.title}</h4>
                <p className="about-page-values__card-text">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA shared with home */}
      <CTATwo />

      <FooterTwo />
    </>
  );
};

export default About;
