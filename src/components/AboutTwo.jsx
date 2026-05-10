import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <section className="about-light">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left column — content */}
          <div className="col-xl-6">
            <span className="about-light__label">À propos</span>

            <h2 className="about-light__title">
              Votre partenaire en{" "}
              <span className="hl-blue">formalités juridiques</span> en France
            </h2>

            <p className="about-light__text">
              Access Consulting est un cabinet français qui accompagne
              entrepreneurs, TPE et PME dans toutes les démarches juridiques,
              administratives, sociales et commerciales. Nous intervenons à
              Paris, Lyon, Marseille, Bordeaux, Lille, Nantes, Toulouse et
              partout en France métropolitaine.
            </p>

            <ul className="about-light__list">
              <li>
                <i className="fas fa-check" />
                Accompagnement conforme au droit français et au RGPD.
              </li>
              <li>
                <i className="fas fa-check" />
                Formalités 100&nbsp;% dématérialisées via le Guichet unique INPI.
              </li>
              <li>
                <i className="fas fa-check" />
                Suivi personnalisé par des experts dédiés à votre secteur.
              </li>
            </ul>

            <Link to="/about" className="global-btn about-light__btn">
              En savoir plus sur le cabinet
              <img src="assets/img/icon/right-icon.svg" alt="" />
            </Link>
          </div>

          {/* Right column — stat cards */}
          <div className="col-xl-6">
            <div className="about-light__stats">
              <div className="about-light__stat-card">
                <h3 className="about-light__stat-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span>
                          <CountUp delay={0} start={0} end={15} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <p className="about-light__stat-label">Experts dédiés</p>
              </div>

              <div className="about-light__stat-card">
                <h3 className="about-light__stat-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span>
                          <CountUp delay={0} start={0} end={120} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <p className="about-light__stat-label">Clients accompagnés</p>
              </div>

              <div className="about-light__stat-card">
                <h3 className="about-light__stat-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span>
                          <CountUp delay={0} start={0} end={450} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <p className="about-light__stat-label">Formalités traitées</p>
              </div>

              <div className="about-light__stat-card">
                <h3 className="about-light__stat-number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span>
                          <CountUp delay={0} start={0} end={98} />%
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <p className="about-light__stat-label">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
