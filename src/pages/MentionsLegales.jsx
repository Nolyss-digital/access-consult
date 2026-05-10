import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import FooterTwo from "../components/FooterTwo";

const sections = [
  {
    title: "1. Éditeur du site",
    body: (
      <>
        <p>
          Le présent site est édité par <strong>Access Consulting</strong>,
          cabinet de conseil aux entreprises immatriculé en France.
        </p>
        <ul>
          <li>
            <strong>Raison sociale :</strong> Access Consulting
          </li>
          <li>
            <strong>Adresse :</strong> 106 Avenue de Saint Louis, 13015
            Marseille, France
          </li>
          <li>
            <strong>Téléphone :</strong>{" "}
            <a href="tel:+33413415002">04 13 41 50 02</a>
          </li>
          <li>
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@access-consult.fr">
              contact@access-consult.fr
            </a>
          </li>
          <li>
            <strong>Directeur de la publication :</strong> Le représentant
            légal de la société.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Hébergement",
    body: (
      <p>
        Ce site est hébergé par un prestataire situé dans l’Union européenne,
        conformément aux exigences du Règlement général sur la protection des
        données (RGPD). Les coordonnées de l’hébergeur peuvent être communiquées
        sur simple demande à{" "}
        <a href="mailto:contact@access-consult.fr">contact@access-consult.fr</a>.
      </p>
    ),
  },
  {
    title: "3. Propriété intellectuelle",
    body: (
      <p>
        L’ensemble du contenu du site (textes, visuels, logos, marques, code
        source, design) est la propriété exclusive d’Access Consulting ou de
        ses partenaires. Toute reproduction, représentation, modification ou
        diffusion, totale ou partielle, sans autorisation écrite préalable, est
        strictement interdite et constitue une contrefaçon sanctionnée par les
        articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>
    ),
  },
  {
    title: "4. Données personnelles",
    body: (
      <>
        <p>
          Les informations recueillies via les formulaires du site sont
          destinées exclusivement à Access Consulting pour répondre à vos
          demandes et assurer le suivi de la relation commerciale. Aucune
          donnée n’est cédée à des tiers à des fins commerciales.
        </p>
        <p>
          Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
          « Informatique et Libertés » du 6 janvier 1978 modifiée, vous
          disposez d’un droit d’accès, de rectification, de portabilité, de
          suppression et d’opposition au traitement de vos données
          personnelles. Vous pouvez exercer ces droits en écrivant à{" "}
          <a href="mailto:contact@access-consult.fr">
            contact@access-consult.fr
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies",
    body: (
      <p>
        Le site peut utiliser des cookies pour mesurer son audience et
        améliorer l’expérience utilisateur. À votre première visite, un
        bandeau vous permet d’accepter ou de refuser leur dépôt. Vous pouvez
        également configurer votre navigateur pour gérer leur stockage à tout
        moment.
      </p>
    ),
  },
  {
    title: "6. Responsabilité",
    body: (
      <p>
        Access Consulting met tout en œuvre pour fournir des informations
        exactes et à jour sur ce site. Toutefois, le cabinet ne saurait être
        tenu responsable des erreurs, omissions ou résultats obtenus par un
        mauvais usage des informations publiées. L’utilisation des contenus
        se fait sous la seule responsabilité de l’utilisateur.
      </p>
    ),
  },
  {
    title: "7. Droit applicable",
    body: (
      <p>
        Les présentes mentions légales sont régies par le droit français.
        Tout litige relatif à leur interprétation ou à leur exécution relève
        de la compétence exclusive des tribunaux français.
      </p>
    ),
  },
];

const MentionsLegales = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {active && <Preloader />}
      <HelmetReact title={"Mentions légales"} />
      <HeaderTwo />

      {/* Hero */}
      <section className="legal-page-hero">
        <div className="container">
          <div className="legal-page-hero__inner">
            <span className="legal-page-hero__label">Informations légales</span>
            <h1 className="legal-page-hero__title">
              Mentions <span className="hl-blue">légales</span>
            </h1>
            <p className="legal-page-hero__text">
              Informations relatives à l’éditeur du site, à l’hébergement, à
              la propriété intellectuelle et à la gestion de vos données
              personnelles, conformément au droit français et au RGPD.
            </p>
            <p className="legal-page-hero__updated">
              Dernière mise à jour : 10&nbsp;mai&nbsp;2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="legal-page-body">
        <div className="container">
          <div className="legal-page-body__wrap">
            {sections.map((s, i) => (
              <article className="legal-page-body__section" key={i}>
                <h2>{s.title}</h2>
                <div className="legal-page-body__content">{s.body}</div>
              </article>
            ))}

            <div className="legal-page-body__cta">
              <p>Une question sur ces mentions ?</p>
              <Link to="/contact" className="legal-page-body__cta-btn">
                Contactez-nous <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />
    </>
  );
};

export default MentionsLegales;
