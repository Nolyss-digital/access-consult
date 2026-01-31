import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import ServiceCreation from "../components/Creation/ServiceCreation";

const CreationEntreprises = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Création & gestion d’entreprises"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Création & gestion d’entreprises" />
     
      {/* CounterOne */}
      <ServiceCreation />

      {/* FooterOne */}
      <FooterTwo />


    </>
  );
};

export default CreationEntreprises;
