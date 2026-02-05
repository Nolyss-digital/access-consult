import React from "react";
import { Link } from "react-router-dom";

const ServiceInnerDetails = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row gx-30">

          {/* ===== CONTENT ===== */}
          <div className="col-xxl-8 col-lg-7">
            <div className="page-thumb">
              <img
                src="assets/img/service/service-details1-1.jpg"
                alt="Création de sites web"
              />
            </div>

            <ul className="service-details-list">
              <li className="single-service-list">
                <span className="title">Catégorie</span>
                <h6 className="content">Création de sites web</h6>
              </li>
              <li className="single-service-list">
                <span className="title">Expertise</span>
                <h6 className="content">Digital & développement web</h6>
              </li>
              <li className="single-service-list">
                <span className="title">Délai</span>
                <h6 className="content">Selon la complexité du projet</h6>
              </li>
            </ul>

            <h3 className="page-title mt-40 mb-20">
              Création de sites web modernes et performants
            </h3>

            <p>
              Nous concevons des sites web professionnels, rapides et sécurisés,
              pensés pour valoriser votre image de marque et transformer vos
              visiteurs en clients. Chaque projet est développé sur mesure,
              selon vos objectifs business.
            </p>

            <div className="checklist style6 mt-40 mb-60">
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Design moderne et adapté à votre identité visuelle
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Sites 100% responsives (mobile, tablette, desktop)
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Optimisation SEO & performance
                </li>
              </ul>
            </div>

            <h3 className="page-title mb-20">
              Un site web conçu pour générer des résultats
            </h3>

            <p className="mb-30">
              Que ce soit pour un site vitrine, un site corporate ou une
              plateforme e-commerce, nous développons des solutions évolutives,
              fiables et orientées conversion. Notre approche combine stratégie,
              design UX/UI et technologies modernes.
            </p>

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="page-thumb style2">
                  <img
                    src="assets/img/service/service-details1-2.jpg"
                    alt="Design web"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="page-thumb style2">
                  <img
                    src="assets/img/service/service-details1-3.jpg"
                    alt="Développement web"
                  />
                </div>
              </div>
            </div>

            <p className="mt-30 mb-n1">
              Nous vous accompagnons de la phase de conception jusqu’à la mise
              en ligne, avec un suivi personnalisé, une maintenance fiable et
              des conseils stratégiques pour faire évoluer votre présence
              digitale.
            </p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_categories widget_service-categories">
                <ul>
                  <li>
                    <Link to="/services/creation-sites-web">
                      Création de sites web
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/developpement-commercial">
                      Développement commercial
                    </Link>
                  </li>
                  <li>
                    <Link to="/administration-entreprises">
                      Administration des entreprises
                    </Link>
                  </li>
                  <li>
                    <Link to="/domiciliation-entreprises">
                      Domiciliation d’entreprises
                    </Link>
                  </li>
                  <li>
                    <Link to="/Assistance-appels-offres">
                      Assistance aux appels d’offres
                    </Link>
                  </li>
                  <li>
                    <Link to="/reception-emission-appels">
                      Réception & émission d’appels
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/gestion-reseaux-sociaux">
                      Gestion des réseaux sociaux
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceInnerDetails;
