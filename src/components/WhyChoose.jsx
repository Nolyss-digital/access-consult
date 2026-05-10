import React from "react";

const WhyChoose = () => {
  const items = [
    {
      icon: "fas fa-shield-alt",
      title: "Cabinet 100 % français",
      text: "Équipe basée en France, conforme RGPD, parfaitement à jour de la réglementation hexagonale.",
    },
    {
      icon: "fas fa-magic",
      title: "Expertise pluridisciplinaire",
      text: "Juristes, gestionnaires de paie, consultants commerciaux et experts SEO réunis sous un seul toit.",
    },
    {
      icon: "fas fa-users",
      title: "Accompagnement humain",
      text: "Un interlocuteur dédié, joignable par téléphone et e-mail, qui connaît votre dossier de A à Z.",
    },
    {
      icon: "far fa-clock",
      title: "Réactivité garantie",
      text: "Réponse sous 24h ouvrées, formalités traitées en moyenne en 5 jours, devis gratuit immédiat.",
    },
  ];

  return (
    <section className="why-light">
      <div className="container">
        <div className="why-light__header">
          <span className="why-light__label">Pourquoi nous choisir</span>
          <h2 className="why-light__title">
            Une gestion <span className="hl-blue">sur mesure</span> pour votre
            entreprise
          </h2>
        </div>

        <div className="why-light__grid">
          {items.map((item, idx) => (
            <div className="why-light__card" key={idx}>
              <div className="why-light__icon">
                <i className={item.icon} />
              </div>
              <h4 className="why-light__card-title">{item.title}</h4>
              <p className="why-light__card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
