import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import CTATwo from "../components/CTATwo";

const testimonials = [
  {
    text: "Access Consulting a créé ma SASU en 5 jours. Tout était limpide : statuts, immatriculation, accompagnement comptable. Je recommande à tous les entrepreneurs en France.",
    name: "Camille Lefèvre",
    role: "Fondatrice, Atelier Lumen (Paris)",
    service: "Création d’entreprise",
  },
  {
    text: "L’équipe gère ma paie multi-conventions depuis deux ans. Bulletins fiables, DSN à l’heure, conseil RH précieux. Un vrai partenaire pour ma PME.",
    name: "Mehdi Tazi",
    role: "Dirigeant, Tazi BTP SARL (Lyon)",
    service: "Gestion de la paie",
  },
  {
    text: "Domiciliation à Paris + gestion administrative : j’ai gagné un temps fou. Service client réactif et tarifs très transparents.",
    name: "Sophie Renard",
    role: "Consultante indépendante (Bordeaux)",
    service: "Domiciliation",
  },
  {
    text: "Refonte du site web et stratégie SEO locale : +180 % de trafic organique en six mois. Une équipe vraiment experte du marché français.",
    name: "Julien Bonnet",
    role: "Co-fondateur, NordCom (Lille)",
    service: "Sites web & SEO",
  },
  {
    text: "Accompagnement aux appels d’offres impeccable. Nous avons remporté trois marchés publics grâce à leur méthode rigoureuse.",
    name: "Inès Moreau",
    role: "Gérante, Moreau & Filles (Marseille)",
    service: "Appels d’offres",
  },
  {
    text: "Conseil stratégique de très haut niveau. Access Consulting comprend les enjeux des PME françaises et propose des solutions concrètes.",
    name: "Antoine Delcroix",
    role: "Président, Delcroix Distribution (Nantes)",
    service: "Développement commercial",
  },
  {
    text: "La permanence téléphonique a transformé notre prise de RDV. Plus aucun appel manqué et un discours commercial parfaitement maîtrisé.",
    name: "Laura Petit",
    role: "Directrice, Petit Immobilier (Toulouse)",
    service: "Permanence téléphonique",
  },
  {
    text: "Notre community management a pris une nouvelle dimension : ligne éditoriale claire, contenus engageants et campagnes LinkedIn rentables.",
    name: "Karim Hadj",
    role: "CMO, Hadj Industries (Rouen)",
    service: "Réseaux sociaux",
  },
  {
    text: "Gestion administrative et fiscale au quotidien, sans stress. Je dors mieux depuis que je travaille avec Access Consulting.",
    name: "Émilie Vasseur",
    role: "Gérante, EV Conseil (Strasbourg)",
    service: "Administration",
  },
];

const stats = [
  { value: "4,9/5", label: "Note moyenne", icon: "fas fa-star" },
  { value: "127", label: "Avis vérifiés", icon: "fas fa-shield-alt" },
  { value: "98 %", label: "Clients satisfaits", icon: "fas fa-smile" },
  { value: "100+", label: "Missions livrées", icon: "fas fa-check-double" },
];

const AvisClients = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"Avis clients"} />
      <HeaderTwo />

      {/* Hero */}
      <section className="reviews-page-hero">
        <div className="container">
          <div className="reviews-page-hero__inner">
            <span className="reviews-page-hero__label">Avis clients</span>
            <h1 className="reviews-page-hero__title">
              Ils nous font <span className="hl-blue">confiance</span> partout
              en France
            </h1>
            <p className="reviews-page-hero__text">
              Entrepreneurs, TPE et PME françaises partagent leur expérience
              avec Access Consulting — note moyenne 4,9/5 sur 127 avis
              clients vérifiés.
            </p>

            <div className="reviews-page-hero__rating">
              <div className="reviews-page-hero__stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
              <span>Note moyenne 4,9/5 · Sur 127 avis clients vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="reviews-page-stats">
        <div className="container">
          <div className="reviews-page-stats__grid">
            {stats.map((s, i) => (
              <div className="reviews-page-stats__card" key={i}>
                <div className="reviews-page-stats__icon">
                  <i className={s.icon} />
                </div>
                <div className="reviews-page-stats__value">{s.value}</div>
                <div className="reviews-page-stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="reviews-page-grid-section">
        <div className="container">
          <div className="reviews-page-grid">
            {testimonials.map((t, i) => (
              <article className="reviews-page-card" key={i}>
                <div className="reviews-page-card__top">
                  <div className="reviews-page-card__stars">
                    {[...Array(5)].map((_, k) => (
                      <i key={k} className="fas fa-star" />
                    ))}
                  </div>
                  <span className="reviews-page-card__service">
                    {t.service}
                  </span>
                </div>

                <i className="fas fa-quote-right reviews-page-card__quote" />

                <p className="reviews-page-card__text">“{t.text}”</p>

                <div className="reviews-page-card__author">
                  <div className="reviews-page-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
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

export default AvisClients;
