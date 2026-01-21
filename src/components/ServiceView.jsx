import React from 'react'
import { Link } from 'react-router-dom'

const ServiceView = () => {
   return (
  <div className="service-area-1 space overflow-hidden">
    <div className="container">
      <div className="row gx-30 gy-30 justify-content-center">

        {/* 1. Création / Modification / Cession / Radiation / Liquidation */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-1.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">
                  Création & gestion d’entreprises
                </Link>
              </h4>
              <p className="service-card_text">
                Création, modification, cession, radiation et liquidation
                d’entreprises dans le respect des obligations légales.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Gestionnaire de la paie */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-2.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">Gestion de la paie</Link>
              </h4>
              <p className="service-card_text">
                Gestion complète de la paie, déclarations sociales et conformité
                réglementaire.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Domiciliation */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-3.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">Domiciliation d’entreprises</Link>
              </h4>
              <p className="service-card_text">
                Adresse professionnelle, réception et gestion du courrier,
                services administratifs inclus.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Administration des entreprises */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-4.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">
                  Administration des entreprises
                </Link>
              </h4>
              <p className="service-card_text">
                Gestion administrative quotidienne et accompagnement juridique
                sur mesure.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 5. Assistance aux appels d’offres */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-5.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">
                  Assistance aux appels d’offres
                </Link>
              </h4>
              <p className="service-card_text">
                Accompagnement complet dans la préparation et le dépôt de vos
                dossiers d’appels d’offres.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6. Réception & émission d’appels */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-6.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">
                  Réception & émission d’appels
                </Link>
              </h4>
              <p className="service-card_text">
                Gestion professionnelle des appels entrants et sortants pour
                améliorer votre relation client.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 7. Développement commercial */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-1.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">
                  Développement commercial
                </Link>
              </h4>
              <p className="service-card_text">
                Stratégies commerciales, prospection et suivi clients pour
                accélérer votre croissance.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 8. Création de sites web */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-2.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/creation-site-web">
                  Création de sites web
                </Link>
              </h4>
              <p className="service-card_text">
                Conception de sites web modernes, performants et adaptés à votre
                image.
              </p>
              <Link to="/creation-site-web" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* 9. Gestion des réseaux sociaux */}
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card_img">
              <img src="assets/img/service/service-1-3.jpg" alt="img" />
            </div>
            <div className="service-card_content">
              <h4 className="service-card_title">
                <Link to="/service-details">
                  Gestion des réseaux sociaux
                </Link>
              </h4>
              <p className="service-card_text">
                Animation et gestion de vos réseaux sociaux pour renforcer votre
                visibilité et votre notoriété.
              </p>
              <Link to="/service-details" className="link-btn">
                Lire plus <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);


}

export default ServiceView