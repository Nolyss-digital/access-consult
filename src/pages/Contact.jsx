import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
// import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactInner from "../components/ContactInner";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";



const Contact = () => {
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
      <HelmetReact title={"Contact"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* ContactInner */}
      <ContactInner />

      {/* FooterOne */}
      <FooterTwo />

    </>
  );
};

export default Contact;
