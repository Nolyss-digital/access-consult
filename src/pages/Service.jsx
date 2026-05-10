import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import CTATwo from "../components/CTATwo";

const services = [
  {
    icon: "fas fa-building",
    title: "Création & gestion d’entreprises",
    text: "Statuts SAS, SASU, SARL, EURL, micro-entreprise : immatriculation rapide au Guichet unique INPI et suivi juridique au long cours.",
    link: "/creation-gestion-entreprises",
  },
  {
    icon: "fas fa-file-invoice-dollar",
    title: "Gestion de la paie",
    text: "Bulletins, DSN, soldes de tout compte, conformité au droit social français et conventions collectives applicables à votre activité.",
    link: "/gestion-paie",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Domiciliation d’entreprises",
    text: "Adresse commerciale prestigieuse, réexpédition de courrier et services associés agréés en préfecture, à Paris et dans toute la France.",
    link: "/domiciliation-entreprises",
  },
  {
    icon: "fas fa-clipboard-list",
    title: "Administration des entreprises",
    text: "Gestion administrative, juridique et fiscale au quotidien pour TPE, PME et indépendants français — un partenaire au service de votre dirigeant.",
    link: "/administration-entreprises",
  },
  {
    icon: "fas fa-file-signature",
    title: "Assistance aux appels d’offres",
    text: "Veille BOAMP/JOUE, rédaction des mémoires techniques et dépôt sur les plateformes Chorus & PLACE pour décrocher des marchés publics.",
    link: "/Assistance-appels-offres",
  },
  {
    icon: "fas fa-headset",
    title: "Réception & émission d’appels",
    text: "Permanence téléphonique, prise de RDV, qualification de fichiers et campagnes B2B en français, pour ne plus rater une opportunité.",
    link: "/reception-emission-appels",
  },
  {
    icon: "fas fa-chart-line",
    title: "Développement commercial",
    text: "Stratégies d’acquisition, prospection LinkedIn et conseil en performance commerciale pour PME françaises ambitieuses.",
    link: "/developpement-commercial",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Création de sites web",
    text: "Sites vitrines, e-commerce et référencement naturel ciblé France : Paris, Lyon, Marseille, Bordeaux et toute la métropole.",
    link: "/creation-site-web",
  },
  {
    icon: "fas fa-hashtag",
    title: "Gestion des réseaux sociaux",
    text: "LinkedIn, Instagram, Meta : ligne éditoriale, contenus et publicité pour développer votre marque et générer des leads qualifiés.",
    link: "/gestion-reseaux-sociaux",
  },
];

const Service = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"Services"} />
      <HeaderTwo />

      {/* Hero / intro */}
      <section className="services-page-hero">
        <div className="container">
          <div className="services-page-hero__inner">
            <span className="services-page-hero__label">Nos services</span>
            <h1 className="services-page-hero__title">
              Tous les services <span className="hl-blue">Access Consulting</span>
            </h1>
            <p className="services-page-hero__text">
              Conseil juridique, gestion sociale, développement commercial et
              solutions digitales — un accompagnement global pour les TPE, PME
              et indépendants français, partout en France métropolitaine.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="services-page-grid-section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((s, idx) => (
              <article className="services-page-card" key={idx}>
                <div className="services-page-card__icon">
                  <i className={s.icon} />
                </div>
                <h3 className="services-page-card__title">
                  <Link to={s.link}>{s.title}</Link>
                </h3>
                <p className="services-page-card__text">{s.text}</p>
                <Link to={s.link} className="services-page-card__link">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTATwo />
      <FooterTwo />
    </>
  );
};

export default Service;
