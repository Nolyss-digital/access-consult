import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import AboutPaie from "../components/Paie/AboutPaie";
import AppointmentOne from "../components/AppointmentOne";

const GestionPaie = () => {
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
      <HelmetReact title={"Gestion de la paie"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Gestion de la paie" />

      {/* AboutOne */}
      <AboutPaie />

      {/* ProcessThree */}
      {/* <ProcessThree /> */}
      <div className="pt-5">
        <AppointmentOne />
      </div>

      {/* FooterOne */}
      <FooterTwo />









    </>
  );
};

export default GestionPaie;
