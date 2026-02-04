import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import AppointmentOne from "../components/AppointmentOne";
import AboutAdministaration from "../components/Administration/AboutAdministaration";

const AdministrationEntreprises = () => {
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
      <HelmetReact title={"Administration des entreprises"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Administration des entreprises" />

      {/* AboutOne */}
      <AboutAdministaration />

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

export default AdministrationEntreprises;
