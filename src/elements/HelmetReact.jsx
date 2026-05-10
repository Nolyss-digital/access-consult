import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} - Access Consulting | Formalités juridiques & création d’entreprise
      </title>
      <meta
        name="description"
        content="Access Consulting - Formalités juridiques & création d’entreprise"
      />
    </Helmet>

  );
};

export default HelmetReact;
