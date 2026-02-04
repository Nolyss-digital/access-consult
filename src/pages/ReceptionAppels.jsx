import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import GoalArea from "../components/GoalArea";
import AboutOne from "../components/AboutOne";
import ProcessThree from "../components/ProcessThree";
import TestimonialOne from "../components/TestimonialOne";
import CounterOne from "../components/CounterOne";
import WhyChoose from "../components/WhyChoose";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import AboutTwo from "../components/AboutTwo";
import AboutThree from "../components/AboutThree";
import AboutPaie from "../components/Paie/AboutPaie";
import AppointmentOne from "../components/AppointmentOne";
import AboutDomiciliation from "../components/Domiciliation/AboutDomiciliation";
import AboutAdministaration from "../components/Administration/AboutAdministaration";
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
