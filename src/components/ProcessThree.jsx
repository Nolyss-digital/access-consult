import React from 'react'
import Marquee from "react-fast-marquee";
// import { Link } from 'react-router-dom';
const ProcessThree = () => {
    return (

        <section
            className="process-area-1 bg-smoke space-bottom"
            style={{ backgroundImage: "url(assets/img/bg/shape_1.png)" }}
        >

            {/* Client Area   */}

         <div className="container space-top">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="title-area text-center">
        <span className="sub-title">
          <img src="assets/img/icon/title_left.svg" alt="shape" />
          Notre processus
        </span>
        <h2 className="sec-title style2">
          De votre besoin à la livraison de résultats concrets
        </h2>
      </div>
    </div>
  </div>

  <div className="row gy-30">

    {/* ===== STEP 1 ===== */}
    <div className="col-lg-6 col-xl-3 process-card-wrap">
      <div className="process-card">
        <div className="process-card_wrapp">
          <div className="process-card-icon">
            <img src="assets/img/icon/process-icon-1-1.svg" alt="Contact client" />
          </div>
          <h3 className="process-card_number">01</h3>
        </div>
        <div className="process-card_content">
          <span className="process-card-text">Premier contact</span>
          <h4 className="process-card-title">
            Analyse de votre besoin
          </h4>
        </div>
      </div>
    </div>

    {/* ===== STEP 2 ===== */}
    <div className="col-lg-6 col-xl-3 process-card-wrap">
      <div className="process-card">
        <div className="process-card_wrapp">
          <div className="process-card-icon">
            <img src="assets/img/icon/process-icon-1-2.svg" alt="Étude & stratégie" />
          </div>
          <h3 className="process-card_number">02</h3>
        </div>
        <div className="process-card_content">
          <span className="process-card-text">Étude & conseil</span>
          <h4 className="process-card-title">
            Élaboration de la stratégie
          </h4>
        </div>
      </div>
    </div>

    {/* ===== STEP 3 ===== */}
    <div className="col-lg-6 col-xl-3 process-card-wrap">
      <div className="process-card">
        <div className="process-card_wrapp">
          <div className="process-card-icon">
            <img src="assets/img/icon/process-icon-1-3.svg" alt="Mise en œuvre" />
          </div>
          <h3 className="process-card_number">03</h3>
        </div>
        <div className="process-card_content">
          <span className="process-card-text">Mise en œuvre</span>
          <h4 className="process-card-title">
            Exécution & suivi du projet
          </h4>
        </div>
      </div>
    </div>

    {/* ===== STEP 4 ===== */}
    <div className="col-lg-6 col-xl-3 process-card-wrap">
      <div className="process-card">
        <div className="process-card_wrapp">
          <div className="process-card-icon">
            <img src="assets/img/icon/process-icon-1-4.svg" alt="Livraison" />
          </div>
          <h3 className="process-card_number">04</h3>
        </div>
        <div className="process-card_content">
          <span className="process-card-text">Résultats</span>
          <h4 className="process-card-title">
            Livraison & accompagnement
          </h4>
        </div>
      </div>
    </div>

  </div>
</div>

        </section>
    )
}

export default ProcessThree