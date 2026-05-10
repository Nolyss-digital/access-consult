import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import AvisClients from "./pages/AvisClients";
import MentionsLegales from "./pages/MentionsLegales";
import SiteWeb from "./pages/sitesweb";
import CreationEntreprises from "./pages/CreationEntreprises";
import GestionPaie from "./pages/GestionPaie";
import DomiciliationEntreprises from "./pages/DomiciliationEntreprises";
import AdministrationEntreprises from "./pages/AdministrationEntreprises";
import Assistance from "./pages/Assistance";
import ReceptionAppels from "./pages/ReceptionAppels";
import DevCommercial from "./pages/DevCommercial";
import ResauxSociaux from "./pages/ResauxSociaux";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#136aea" />
        <Routes>
          <Route exact path="/" element={<HomeTwo />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/avis-clients" element={<AvisClients />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/creation-site-web" element={<SiteWeb />} />
          <Route exact path="/creation-gestion-entreprises" element={<CreationEntreprises />} />
          <Route exact path="/gestion-paie" element={<GestionPaie />} />
          <Route exact path="/domiciliation-entreprises" element={<DomiciliationEntreprises />} />
          <Route exact path="/administration-entreprises" element={<AdministrationEntreprises />} />
          <Route exact path="/Assistance-appels-offres" element={<Assistance />} />
          <Route exact path="/reception-emission-appels" element={<ReceptionAppels />} />
          <Route exact path="/developpement-commercial" element={<DevCommercial />} />
          <Route exact path="/gestion-reseaux-sociaux" element={<ResauxSociaux />} />
          <Route exact path="/mentions-legales" element={<MentionsLegales />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
