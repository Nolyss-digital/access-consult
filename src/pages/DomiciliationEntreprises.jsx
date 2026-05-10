import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const DomiciliationEntreprises = () => (
  <ServiceDetailLayout
    helmetTitle="Domiciliation d’entreprises"
    label="Domiciliation"
    title="Une adresse prestigieuse pour votre entreprise"
    titleAccent="prestigieuse"
    intro="Domiciliez votre société à Paris ou dans toute la France, avec réexpédition de courrier, mise à disposition de salles et services associés agréés en préfecture."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting met à votre disposition des adresses commerciales prestigieuses, agréées par la préfecture. Idéal pour donner de la crédibilité à votre activité, séparer vos sphères privée et professionnelle et bénéficier d’une gestion de courrier professionnelle."
    bullets={[
      "Adresses commerciales premium à Paris et en région",
      "Réexpédition du courrier (quotidienne, hebdomadaire ou numérisée)",
      "Mise à disposition de salles de réunion et bureaux à la demande",
      "Conformité administrative : agrément préfectoral garanti",
    ]}
    features={[
      {
        icon: "fas fa-map-marker-alt",
        title: "Adresse stratégique",
        text: "Des emplacements de prestige qui renforcent l’image et la crédibilité de votre marque.",
      },
      {
        icon: "fas fa-envelope-open-text",
        title: "Gestion du courrier",
        text: "Tri, réexpédition et numérisation du courrier, avec notifications en temps réel.",
      },
      {
        icon: "fas fa-stamp",
        title: "Agrément préfectoral",
        text: "Tous nos centres sont agréés par la préfecture, en conformité avec la loi française.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos services de domiciliation",
        items: [
          "Domiciliation siège social",
          "Domiciliation établissement",
          "Réexpédition de courrier",
          "Numérisation de courrier",
          "Location de bureaux",
          "Salles de réunion",
          "Standard téléphonique",
          "Permanence administrative",
        ],
      },
    ]}
  />
);

export default DomiciliationEntreprises;
