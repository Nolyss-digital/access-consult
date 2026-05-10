import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const Assistance = () => (
  <ServiceDetailLayout
    helmetTitle="Assistance aux appels d’offres"
    label="Marchés publics"
    title="Décrochez vos appels d’offres publics"
    titleAccent="appels d’offres"
    intro="Veille BOAMP/JOUE, rédaction des mémoires techniques et dépôt sur Chorus & PLACE : un accompagnement complet pour remporter vos marchés publics français et européens."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting vous accompagne à chaque étape de la réponse aux appels d’offres : analyse du DCE, stratégie de réponse, rédaction du mémoire technique, dépôt dématérialisé et suivi post-attribution. Nos experts maîtrisent les codes de la commande publique française."
    bullets={[
      "Veille ciblée BOAMP, JOUE et plateformes locales",
      "Rédaction de mémoires techniques différenciants",
      "Dépôt dématérialisé sur Chorus Pro et PLACE",
      "Suivi des notifications, négociations et exécution",
    ]}
    features={[
      {
        icon: "fas fa-search",
        title: "Veille personnalisée",
        text: "Identification des opportunités selon votre secteur, votre zone et vos critères de capacité.",
      },
      {
        icon: "fas fa-file-alt",
        title: "Mémoires différenciants",
        text: "Rédaction structurée, valorisation de vos références et alignement précis sur le règlement de consultation.",
      },
      {
        icon: "fas fa-trophy",
        title: "Taux de réussite élevé",
        text: "Méthode éprouvée auprès de PME françaises pour remporter durablement des marchés publics.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations marchés publics",
        items: [
          "Veille BOAMP / JOUE",
          "Analyse du DCE",
          "Stratégie de réponse",
          "Rédaction du mémoire technique",
          "Constitution du dossier",
          "Dépôt Chorus / PLACE",
          "Suivi post-attribution",
          "Accompagnement négociation",
        ],
      },
    ]}
  />
);

export default Assistance;
