import React from "react";
import ServiceDetailLayout from "../components/ServiceDetailLayout";

const AdministrationEntreprises = () => (
  <ServiceDetailLayout
    helmetTitle="Administration des entreprises"
    label="Administration"
    title="Votre administration au quotidien, déléguée"
    titleAccent="déléguée"
    intro="Confiez la gestion administrative, juridique et fiscale de votre entreprise à des experts français. Plus de sérénité, plus de temps pour développer votre activité."
    image="assets/img/normal/about_3-1.jpg"
    description="Access Consulting prend en charge l’ensemble de votre administration quotidienne : factures, déclarations, courriers, archivage, suivi des obligations légales. Un secrétariat externalisé fiable qui s’adapte à votre rythme et à votre secteur."
    bullets={[
      "Secrétariat administratif et gestion documentaire",
      "Suivi des obligations légales et calendrier fiscal",
      "Facturation, relances et tableaux de bord",
      "Archivage numérique sécurisé et conforme RGPD",
    ]}
    features={[
      {
        icon: "fas fa-clipboard-check",
        title: "Rigueur et conformité",
        text: "Process structurés, contrôle qualité et conformité réglementaire à chaque étape.",
      },
      {
        icon: "fas fa-clock",
        title: "Gain de temps",
        text: "Concentrez-vous sur votre cœur de métier, nous gérons les tâches administratives chronophages.",
      },
      {
        icon: "fas fa-user-tie",
        title: "Interlocuteur dédié",
        text: "Un référent unique qui connaît votre activité et anticipe vos besoins.",
      },
    ]}
    variantGroups={[
      {
        title: "Nos prestations d’administration",
        items: [
          "Secrétariat externalisé",
          "Gestion administrative",
          "Suivi juridique courant",
          "Suivi fiscal et social",
          "Facturation & relances",
          "Archivage numérique",
          "Veille réglementaire",
          "Préparation des assemblées",
        ],
      },
    ]}
  />
);

export default AdministrationEntreprises;
