import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const GestionPaie = () => (
  <ServiceDetailLayout
    helmetTitle="Gestion de la paie"
    label="Gestion de la paie"
    title="Une paie fiable et conforme"
    titleAccent="fiable"
    intro="Externalisez l’intégralité de votre gestion de paie : bulletins, DSN, soldes de tout compte et conseil RH, en parfaite conformité avec le droit social français et vos conventions collectives."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting prend en charge votre paie de A à Z. Nos gestionnaires de paie expérimentés sécurisent vos déclarations sociales et vous libèrent d’un travail chronophage, tout en garantissant un service réactif et confidentiel."
    bullets={[
      "Bulletins de paie multi-conventions, livrés en délais maîtrisés",
      "DSN, charges sociales et déclarations fiscales obligatoires",
      "Soldes de tout compte, attestations Pôle emploi, embauches",
      "Conseil RH continu : contrats, congés, absences, ruptures",
    ]}
    features={[
      {
        icon: "fas fa-shield-alt",
        title: "Conformité légale",
        text: "Veille réglementaire permanente sur le droit social français et les conventions collectives.",
      },
      {
        icon: "fas fa-lock",
        title: "Sécurité & confidentialité",
        text: "Vos données salariales sont protégées par des standards stricts conformes au RGPD.",
      },
      {
        icon: "fas fa-headset",
        title: "Support dédié",
        text: "Un gestionnaire de paie référent, joignable par téléphone et e-mail, qui connaît votre dossier.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations paie",
        items: [
          "Bulletins de paie",
          "Déclarations sociales (DSN)",
          "Gestion des contrats",
          "Soldes de tout compte",
          "Embauches et sorties",
          "Conseil RH continu",
          "Audit paie & mise en conformité",
          "Veille réglementaire",
        ],
      },
    ]}
  />
);

export default GestionPaie;
