import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";
import ContactInner from "../components/ContactInner";

const Contact = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"Contact"} />
      <HeaderTwo />
      <ContactInner />
      <FooterTwo />
    </>
  );
};

export default Contact;
