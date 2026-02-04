import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import ServiceView from "../components/ServiceView";
import AppointmentTwo from "../components/AppointmentTwo";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";


const Service = () => {
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
      <HelmetReact title={"Service"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Service" />

      {/* ServiceOne */}
      <ServiceView />


      {/* AppointmentTwo */}
      <AppointmentTwo />

      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterTwo />

    </>
  );
};

export default Service;
