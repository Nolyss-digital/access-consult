import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

const testimonials = [
  {
    text: "Access Consulting a créé ma SASU en 5 jours. Tout était limpide : statuts, immatriculation, accompagnement comptable. Je recommande à tous les entrepreneurs en France.",
    name: "Camille Lefèvre",
    role: "Fondatrice, Atelier Lumen (Paris)",
  },
  {
    text: "L’équipe gère ma paie multi-conventions depuis deux ans. Bulletins fiables, DSN à l’heure, conseil RH précieux. Un vrai partenaire pour ma PME.",
    name: "Mehdi Tazi",
    role: "Dirigeant, Tazi BTP SARL (Lyon)",
  },
  {
    text: "Domiciliation à Paris + gestion administrative : j’ai gagné un temps fou. Service client réactif et tarifs très transparents.",
    name: "Sophie Renard",
    role: "Consultante indépendante (Bordeaux)",
  },
  {
    text: "Refonte du site web et stratégie SEO locale : +180 % de trafic organique en six mois. Une équipe vraiment experte du marché français.",
    name: "Julien Bonnet",
    role: "Co-fondateur, NordCom (Lille)",
  },
  {
    text: "Accompagnement aux appels d’offres impeccable. Nous avons remporté trois marchés publics grâce à leur méthode rigoureuse.",
    name: "Inès Moreau",
    role: "Gérante, Moreau & Filles (Marseille)",
  },
  {
    text: "Conseil stratégique de très haut niveau. Access Consulting comprend les enjeux des PME françaises et propose des solutions concrètes.",
    name: "Antoine Delcroix",
    role: "Président, Delcroix Distribution (Nantes)",
  },
];

const TestimonialTwo = () => {
  return (
    <section className="reviews-light" id="testimonials">
      <div className="container">
        <div className="reviews-light__header">
          <span className="reviews-light__label">Avis clients</span>
          <h2 className="reviews-light__title">
            Ils nous font <span className="hl-blue">confiance</span> partout en
            France
          </h2>
          <div className="reviews-light__rating">
            <div className="reviews-light__stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star" />
              ))}
            </div>
            <span className="reviews-light__rating-text">
              4,9/5 · 127 avis clients vérifiés
            </span>
          </div>
        </div>
      </div>

      <div className="container reviews-light__swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <article className="reviews-light__card">
                <div className="reviews-light__card-top">
                  <div className="reviews-light__stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star" />
                    ))}
                  </div>
                  <i className="fas fa-quote-right reviews-light__quote" />
                </div>
                <p className="reviews-light__text">“{t.text}”</p>
                <div className="reviews-light__author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialTwo;
