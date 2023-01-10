import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderkursuspopuler.css";

const SliderKursuspopuler = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <section className="wrapper__kursuspopuler">
        <div className="row">
          <div className="col-4">
            <h1>
              Kursus <b>yang populer</b>
            </h1>
          </div>
          <div className="col-8">
            <Slider href={(slider) => (this.slider = slider)} {...settings}>
              <div className="row">
                <div className="col">
                  <div className="card-kursuspopuler text-center container">
                    <img src="/assets/kursus-populer-card1.png" />
                    <div className="title-kursuspopuler">
                      <h5 className="mt-3 mb-3">
                        Strategi Pemasaran Produk Bahan Baku
                      </h5>
                      <p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill me-2"></i>(20)
                      </p>
                    </div>
                    <hr></hr>
                    <div className="pricing-kursuspopuler ms-3">
                      <h5>Rp20.000</h5>
                      <Link to="#" className="btn btn-sm">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card-kursuspopuler text-center container">
                    <img src="/assets/kursus-populer-card2.png" />
                    <div className="title-kursuspopuler">
                      <h5 className="mt-3 mb-3">
                        Strategi Pemasaran Produk Bahan Baku
                      </h5>
                      <p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill me-2"></i>(20)
                      </p>
                    </div>
                    <hr></hr>
                    <div className="pricing-kursuspopuler ms-3">
                      <h5>Rp20.000</h5>
                      <Link to="#" className="btn btn-sm">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card-kursuspopuler text-center container">
                    <img src="/assets/kursus-populer-card3.png" />
                    <div className="title-kursuspopuler">
                      <h5 className="mt-3 mb-3">
                        Strategi Pemasaran Produk Bahan Baku
                      </h5>
                      <p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill me-2"></i>(20)
                      </p>
                    </div>
                    <hr></hr>
                    <div className="pricing-kursuspopuler ms-3">
                      <h5>Rp20.000</h5>
                      <Link to="#" className="btn btn-sm">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card-kursuspopuler text-center container">
                    <img src="/assets/kursus-populer-card4.png" />
                    <div className="title-kursuspopuler">
                      <h5 className="mt-3 mb-3">
                        Strategi Pemasaran Produk Bahan Baku
                      </h5>
                      <p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill me-2"></i>(20)
                      </p>
                    </div>
                    <hr></hr>
                    <div className="pricing-kursuspopuler ms-3">
                      <h5>Rp20.000</h5>
                      <Link to="#" className="btn btn-sm">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="card-kursuspopuler text-center container">
                    <img src="/assets/kursus-populer-card5.png" />
                    <div className="title-kursuspopuler">
                      <h5 className="mt-3 mb-3">
                        Strategi Pemasaran Produk Bahan Baku
                      </h5>
                      <p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill me-2"></i>(20)
                      </p>
                    </div>
                    <hr></hr>
                    <div className="pricing-kursuspopuler ms-3">
                      <h5>Rp20.000</h5>
                      <Link to="#" className="btn btn-sm">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderKursuspopuler;
