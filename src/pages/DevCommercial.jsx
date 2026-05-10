import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const DevCommercial = () => (
  <ServiceDetailLayout
    helmetTitle="Développement commercial"
    label="Stratégie commerciale"
    title="Boostez votre développement commercial B2B"
    titleAccent="commercial"
    intro="Stratégies d’acquisition, prospection LinkedIn et conseil en performance commerciale pour PME françaises ambitieuses. De la stratégie à l’exécution."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting structure votre démarche commerciale et accélère votre conquête : ciblage, séquences multi-canal, prospection LinkedIn et téléphone, accompagnement de vos équipes commerciales. Méthode éprouvée auprès de PME françaises."
    bullets={[
      "Audit commercial et plan d’action sur 90 jours",
      "Prospection multi-canal : LinkedIn, email, téléphone",
      "Construction de séquences automatisées",
      "Coaching et montée en compétence des équipes",
    ]}
    features={[
      {
        icon: "fas fa-bullseye",
        title: "Ciblage précis",
        text: "Identification de votre ICP français et constitution de bases de prospection qualifiées.",
      },
      {
        icon: "fab fa-linkedin",
        title: "LinkedIn outbound",
        text: "Stratégies social-selling éprouvées : profil, contenu, séquences de prise de contact.",
      },
      {
        icon: "fas fa-chart-line",
        title: "Résultats mesurables",
        text: "KPI commerciaux clairs : leads qualifiés, RDV, opportunités, taux de transformation.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations commerciales",
        items: [
          "Audit commercial",
          "Stratégie d’acquisition",
          "Prospection LinkedIn",
          "Cold emailing",
          "Cold calling B2B",
          "Coaching commerciaux",
          "Mise en place CRM",
          "Reporting performance",
        ],
      },
    ]}
  />
);

export default DevCommercial;
