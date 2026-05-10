import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const ReceptionAppels = () => (
  <ServiceDetailLayout
    helmetTitle="Réception & émission d’appels"
    label="Permanence téléphonique"
    title="Ne ratez plus un appel client"
    titleAccent="appel"
    intro="Permanence téléphonique, prise de rendez-vous, qualification de fichiers et campagnes B2B en français — une équipe dédiée qui parle au nom de votre entreprise."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting met à votre disposition une équipe de téléconseillers francophones formés à votre secteur. Réception d’appels entrants, émission d’appels sortants ciblés, qualification de leads : chaque interaction renforce votre image et votre pipe commercial."
    bullets={[
      "Permanence téléphonique aux horaires de votre activité",
      "Prise de RDV et qualification des prospects",
      "Campagnes B2B sortantes ciblées",
      "Reporting transparent et écoute qualité",
    ]}
    features={[
      {
        icon: "fas fa-phone-alt",
        title: "Téléconseillers francophones",
        text: "Une équipe basée en France, formée à votre métier et à votre discours commercial.",
      },
      {
        icon: "fas fa-calendar-check",
        title: "Prise de RDV qualifiée",
        text: "Des rendez-vous prêts à signer, intégrés directement dans votre agenda commercial.",
      },
      {
        icon: "fas fa-chart-bar",
        title: "Reporting détaillé",
        text: "Tableaux de bord clairs sur les appels, conversions et performances par campagne.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations télémarketing",
        items: [
          "Permanence téléphonique",
          "Réception d’appels entrants",
          "Émission d’appels sortants",
          "Prise de rendez-vous B2B",
          "Qualification de fichiers",
          "Enquêtes & sondages",
          "Relance prospects",
          "Service après-vente",
        ],
      },
    ]}
  />
);

export default ReceptionAppels;
