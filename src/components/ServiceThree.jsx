import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

const services = [
  {
    icon: "fas fa-building",
    title: "Création d’entreprise en France",
    text: "Statuts SAS, SASU, SARL, EURL, micro-entreprise : immatriculation rapide au Guichet unique INPI.",
    link: "/creation-gestion-entreprises",
  },
  {
    icon: "fas fa-file-invoice-dollar",
    title: "Gestion de la paie externalisée",
    text: "Bulletins, DSN, soldes de tout compte, conformité au droit social français et conventions collectives.",
    link: "/gestion-paie",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Domiciliation d’entreprise à Paris",
    text: "Adresse commerciale prestigieuse, réexpédition de courrier et services associés agréés en préfecture.",
    link: "/domiciliation-entreprises",
  },
  {
    icon: "fas fa-clipboard-list",
    title: "Administration & secrétariat",
    text: "Gestion administrative, juridique et fiscale au quotidien pour TPE, PME et indépendants français.",
    link: "/administration-entreprises",
  },
  {
    icon: "fas fa-file-signature",
    title: "Assistance aux appels d’offres publics",
    text: "Veille BOAMP/JOUE, rédaction des mémoires techniques et dépôt sur les plateformes Chorus & PLACE.",
    link: "/Assistance-appels-offres",
  },
  {
    icon: "fas fa-headset",
    title: "Permanence téléphonique & télémarketing",
    text: "Réception d’appels, prise de RDV, qualification de fichiers et campagnes B2B en français.",
    link: "/reception-emission-appels",
  },
  {
    icon: "fas fa-chart-line",
    title: "Développement commercial B2B",
    text: "Stratégies d’acquisition, prospection LinkedIn et conseil en performance commerciale pour PME françaises.",
    link: "/developpement-commercial",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Création de sites web & SEO local",
    text: "Sites vitrines, e-commerce et référencement naturel ciblé France : Paris, Lyon, Marseille, Bordeaux…",
    link: "/creation-site-web",
  },
  {
    icon: "fas fa-hashtag",
    title: "Community management & réseaux sociaux",
    text: "LinkedIn, Instagram, Meta : ligne éditoriale, contenus et publicité pour développer votre marque.",
    link: "/gestion-reseaux-sociaux",
  },
];

const ServiceThree = () => {
  return (
    <section className="services-light">
      <div className="container">
        <div className="services-light__header">
          <div className="services-light__header-left">
            <span className="services-light__label">Nos services</span>
            <h2 className="services-light__title">
              Des solutions <span className="hl-blue">complètes</span> pour
              entrepreneurs français
            </h2>
          </div>
          <div className="services-light__header-right">
            <p>
              Conseil juridique, gestion sociale, développement commercial et
              solutions digitales — pensé pour les TPE, PME et indépendants
              partout en France.
            </p>
          </div>
        </div>
      </div>

      <div className="container services-light__swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {services.map((s, idx) => (
            <SwiperSlide key={idx}>
              <article className="services-light__card">
                <div className="services-light__icon">
                  <i className={s.icon} />
                </div>
                <h4 className="services-light__card-title">
                  <Link to={s.link}>{s.title}</Link>
                </h4>
                <p className="services-light__card-text">{s.text}</p>
                <Link to={s.link} className="services-light__link">
                  En savoir plus <i className="fas fa-arrow-right" />
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceThree;
