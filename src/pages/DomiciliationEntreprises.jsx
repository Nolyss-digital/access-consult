import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import AppointmentOne from "../components/AppointmentOne";
import AboutDomiciliation from "../components/Domiciliation/AboutDomiciliation";

const DomiciliationEntreprises = () => {
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
      <HelmetReact title={"Domiciliation d’entreprises"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Domiciliation d’entreprises" />

      {/* AboutOne */}
      <AboutDomiciliation />

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

export default DomiciliationEntreprises;
