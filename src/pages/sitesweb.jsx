import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import Newsletter from "../components/Newsletter";
import ServiceInnerDetails from "../components/ServiceInnerDetails";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";



const SiteWeb = () => {
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
      <HelmetReact title={"Création de sites web"} />

      {/* HeaderFive */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title="Création de sites web" />

      {/* ServiceDetails */}
      <ServiceInnerDetails />


      {/* Newsletter */}
      <Newsletter />

      {/* FooterOne */}
      <FooterTwo />

    </>
  );
};

export default SiteWeb;
