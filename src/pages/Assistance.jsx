import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import AppointmentOne from "../components/AppointmentOne";
import AboutAssistance from "../components/Assistance/AboutAssistance";

const Assistance = () => {
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
      <HelmetReact title={"Assistance aux appels d’offres"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Assistance aux appels d’offres" />

      {/* AboutOne */}
      <AboutAssistance />

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

export default Assistance;
