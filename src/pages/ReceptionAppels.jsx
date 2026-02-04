import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import AppointmentOne from "../components/AppointmentOne";
import AboutReceptionAppels from "../components/ReceptionAppels/AboutReceptionAppels";

const ReceptionAppels = () => {
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
      <HelmetReact title={"Réception & émission d’appels"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Réception & émission d’appels" />

      {/* AboutOne */}
      <AboutReceptionAppels />

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

export default ReceptionAppels;
