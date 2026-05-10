import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const ResauxSociaux = () => (
  <ServiceDetailLayout
    helmetTitle="Gestion des réseaux sociaux"
    label="Community management"
    title="Une présence sociale qui fait grandir votre marque"
    titleAccent="sociale"
    intro="LinkedIn, Instagram, Meta : ligne éditoriale, contenus, animation et publicité pour développer votre notoriété et générer des leads qualifiés."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting définit votre ligne éditoriale, crée vos contenus et anime vos communautés. Notre approche allie créativité, régularité et performance, avec un reporting clair sur la croissance et l’engagement."
    bullets={[
      "Stratégie éditoriale et calendrier de publication",
      "Création de contenus (visuels, vidéos, copywriting)",
      "Animation de communauté et modération",
      "Publicité Meta Ads / LinkedIn Ads ciblée France",
    ]}
    features={[
      {
        icon: "fas fa-pen-nib",
        title: "Ligne éditoriale",
        text: "Une voix de marque cohérente sur tous les réseaux, alignée sur votre positionnement.",
      },
      {
        icon: "fas fa-images",
        title: "Contenus impactants",
        text: "Visuels, vidéos courtes et carrousels conçus pour capter l’attention et engager.",
      },
      {
        icon: "fas fa-bullhorn",
        title: "Publicité ciblée",
        text: "Campagnes Meta Ads et LinkedIn Ads pilotées sur la performance, en français.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations réseaux sociaux",
        items: [
          "Stratégie éditoriale",
          "Création de contenus",
          "Community management",
          "LinkedIn organique",
          "Instagram & Meta",
          "Publicité Meta Ads",
          "Publicité LinkedIn Ads",
          "Influence & UGC",
        ],
      },
    ]}
  />
);

export default ResauxSociaux;
