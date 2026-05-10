import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const CreationEntreprises = () => (
  <ServiceDetailLayout
    helmetTitle="Création & gestion d’entreprises"
    label="Création d’entreprise"
    title="Créer et gérer votre entreprise en France"
    titleAccent="entreprise"
    intro="Statuts SAS, SASU, SARL, EURL, micro-entreprise ou SCI : immatriculation rapide au Guichet unique INPI, accompagnement juridique et suivi de toutes vos modifications statutaires."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting prend en charge l’intégralité de votre dossier de création : rédaction des statuts, dépôt au Guichet unique, publication d’annonce légale et obtention du Kbis. Au-delà de la création, nous accompagnons toutes les évolutions de la vie de votre société."
    bullets={[
      "Immatriculation 100 % dématérialisée via le Guichet unique INPI",
      "Rédaction et personnalisation des statuts par nos juristes",
      "Suivi des modifications statutaires et opérations sur le capital",
      "Conseil sur le choix du statut adapté à votre projet",
    ]}
    features={[
      {
        icon: "fas fa-rocket",
        title: "Démarches rapides",
        text: "Immatriculation en quelques jours grâce à un dossier complet et conforme dès le premier dépôt.",
      },
      {
        icon: "fas fa-balance-scale",
        title: "Sécurité juridique",
        text: "Statuts rédigés par des juristes français, conformes au droit des sociétés et au RGPD.",
      },
      {
        icon: "fas fa-user-shield",
        title: "Conseil personnalisé",
        text: "Un consultant dédié vous accompagne du choix du statut au suivi annuel de votre société.",
      },
    ]}
    variantGroups={[
      {
        title: "Créer ma société",
        items: [
          "Créer une SASU",
          "Créer une SAS",
          "Créer une EURL",
          "Créer une SARL",
          "Créer une SCI",
          "Créer une entreprise individuelle",
          "Créer un statut auto-entrepreneur",
        ],
      },
      {
        title: "Modifier ma société",
        items: [
          "Transfert de siège",
          "Changement de dirigeant",
          "Changement d’activité",
          "Transformation de société",
          "Changement de dénomination",
          "Levée de radiation d’office",
          "Transformation SARL en SAS",
          "Transformation SAS en SARL",
          "Changement de gérant",
          "Changement de président",
          "Changement d’objet social",
        ],
      },
      {
        title: "Opérations sur le capital",
        items: [
          "Cession de parts sociales",
          "Cession d’actions",
          "Augmentation de capital",
          "Réduction de capital",
        ],
      },
      {
        title: "Dissolution / Liquidation",
        items: [
          "Dissolution / Liquidation",
          "Mise en sommeil",
          "Bénéficiaires effectifs",
          "Dépôt des comptes",
        ],
      },
    ]}
  />
);

export default CreationEntreprises;
