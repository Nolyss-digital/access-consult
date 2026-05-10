import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import HeroTwo from "../components/HeroTwo";
import AboutTwo from "../components/AboutTwo";
import ServiceThree from "../components/ServiceThree";
import WhyChoose from "../components/WhyChoose";
import TestimonialTwo from "../components/TestimonialTwo";
import CTATwo from "../components/CTATwo";
import FooterTwo from "../components/FooterTwo";

const HomeTwo = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"Accueil"} />
      <HeaderTwo />
      <HeroTwo />
      <AboutTwo />
      <WhyChoose />
      <ServiceThree />
      <TestimonialTwo />
      <CTATwo />
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
