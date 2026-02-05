import React from "react";
import Slider from "react-slick";

const TestimonialOne = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialOne-icon-box-next">
        <button
          onClick={onClick}
          className="slick-arrow style2 default team-slider2-next"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="TestimonialOne-icon-box-prev">
        <button
          onClick={onClick}
          className="team-slider2 slick-arrow style2 default team-slider2-prev"
        >
          <i className="fas fa-arrow-left" />
        </button>
      </div>
    );
  }

  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {},
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="testimonial-area-1 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Témoignages clients
              </span>
              <h2 className="sec-title style2">
                La confiance de nos clients fait notre réussite
              </h2>
            </div>
            <div className="testimonial-thumb1">
              <img src="assets/img/testimonial/testimonial-1-1.png" alt="img" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="title-area">
              <p className="testi-desc">
                Nos clients témoignent de leur expérience avec Access Consulting,
                de la création de leur entreprise jusqu’à la réussite de leurs
                projets digitaux et commerciaux.
              </p>
            </div>

            <div className="testi-area-slider">
              <div className="row global-carousel testi-slider-1">
                <Slider {...settings}>

                  {/* Avis 1 */}
                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="testi-card_text">
                          Access Consulting m’a accompagné dans la création de
                          ma société avec sérieux et professionnalisme. Une
                          équipe réactive et à l’écoute.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_1.png"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4 className="testi-profile-title">
                              Jean Dupont
                            </h4>
                            <span className="testi-profile-desig">
                              Entrepreneur
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                  {/* Avis 2 */}
                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="testi-card_text">
                          Grâce à Access Consulting, notre stratégie commerciale
                          est devenue plus claire et plus efficace. Les résultats
                          sont au rendez-vous.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_2.png"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4 className="testi-profile-title">
                              Sophie Martin
                            </h4>
                            <span className="testi-profile-desig">
                              Directrice commerciale
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                  {/* Avis 3 */}
                  <div className="p-2">
                    <div className="testi-card">
                      <div className="testi-card_content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <p className="testi-card_text">
                          Le site web réalisé par Access Consulting correspond
                          parfaitement à notre image. Livraison rapide et
                          accompagnement après projet.
                        </p>
                        <div className="testi-card-profile">
                          <div className="testi-profile_thumb">
                            <img
                              src="assets/img/testimonial/testi-thumb_1.png"
                              alt="img"
                            />
                          </div>
                          <div className="testi-card-profile-details">
                            <h4 className="testi-profile-title">
                              Karim Ben Ali
                            </h4>
                            <span className="testi-profile-desig">
                              Gérant de société
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/icon/quote1-1.svg" alt="img" />
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
