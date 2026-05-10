import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const SiteWeb = () => (
  <ServiceDetailLayout
    helmetTitle="Création de sites web"
    label="Sites web & SEO"
    title="Des sites web qui convertissent"
    titleAccent="convertissent"
    intro="Sites vitrines, e-commerce et stratégie de référencement naturel ciblé France — Paris, Lyon, Marseille, Bordeaux et toute la métropole."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting conçoit des sites web modernes, rapides et optimisés SEO. Nous livrons une expérience claire pour vos visiteurs et un référencement local qui attire des prospects français qualifiés."
    bullets={[
      "Sites vitrines et boutiques e-commerce sur mesure",
      "Référencement naturel ciblé villes françaises",
      "Performance Core Web Vitals et accessibilité",
      "Hébergement, sécurité et maintenance incluses",
    ]}
    features={[
      {
        icon: "fas fa-pencil-ruler",
        title: "Design sur mesure",
        text: "Maquettes uniques pensées pour votre activité, votre marque et votre cible française.",
      },
      {
        icon: "fas fa-search-location",
        title: "SEO local",
        text: "Optimisation On-Page, Google Business Profile et stratégie de contenu géolocalisée.",
      },
      {
        icon: "fas fa-tachometer-alt",
        title: "Performance",
        text: "Sites rapides, mobiles et accessibles — pensés pour Core Web Vitals et le SEO 2026.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations digitales",
        items: [
          "Site vitrine WordPress",
          "Site sur-mesure React / Next.js",
          "E-commerce WooCommerce",
          "Audit SEO complet",
          "Rédaction SEO",
          "Optimisation Core Web Vitals",
          "Maintenance & hébergement",
          "Refonte de site existant",
        ],
      },
    ]}
  />
);

export default SiteWeb;
