import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} - Acces Consulting | Formalités juridiques & création d’entreprise
      </title>
      <meta
        name="description"
        content="Acces Consulting - Formalités juridiques & création d’entreprise"
      />
    </Helmet>

  );
};

export default HelmetReact;
