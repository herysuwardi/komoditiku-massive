import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderartikelpopuler.css";
import { DETAILARTIKEL } from "../router";

const SliderArtikelpopuler = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <section className="wrapper__artikelpopuler">
        <Container>
          <div className="text-artikelpopuler">
            <h1>
              Artikel <b>Populer</b>
            </h1>
          </div>
          <Slider href={(slider) => (this.slider = slider)} {...settings}>
            <div className="row">
              <div className="col">
                <div className="card-artikelpopuler">
                  <div className="title-artikelpopuler">
                    <img
                      src="/assets/artikel/artikel-populer1.png"
                      alt=""
                      width="100%"
                    />
                    <div className="container">
                      <h5>Mengapa Headline Digital Itu Penting</h5>
                    </div>
                    <hr />
                    <div className="row mt-2">
                      <div className="col-2">
                        <img
                          src="/assets/profile-artikel1.png"
                          alt=""
                          width="50"
                          height="50"
                          className="ms-2"
                        />
                      </div>
                      <div className="col-6 mt-2">
                        <h6>
                          <b>Laura Monica</b>
                          <br />8 Nov 2022
                        </h6>
                      </div>
                      <div className="col-4 mt-3">
                        <a href="">
                          <i className="bi bi-share me-3"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <div className="btn-artikelpopuler text-center">
                      <Link to="#" className="btn btn-sm">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-artikelpopuler">
                  <div className="title-artikelpopuler">
                    <img
                      src="/assets/artikel/artikel-populer2.png"
                      alt=""
                      width="100%"
                    />
                    <div className="container">
                      <h5>Menentukan Audience di Dalam Digital Marketing</h5>
                    </div>
                    <hr />
                    <div className="row mt-2">
                      <div className="col-2">
                        <img
                          src="/assets/profile-artikel3.png"
                          alt=""
                          width="50"
                          height="50"
                          className="ms-2"
                        />
                      </div>
                      <div className="col-6 mt-2">
                        <h6>
                          <b>Dimas Baam</b>
                          <br />3 Des 2022
                        </h6>
                      </div>
                      <div className="col-4 mt-3">
                        <a href="">
                          <i className="bi bi-share me-3"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <div className="btn-artikelpopuler text-center">
                      <Link to="#" className="btn btn-sm">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-artikelpopuler">
                  <div className="title-artikelpopuler">
                    <img
                      src="/assets/artikel/artikel-populer3.png"
                      alt=""
                      width="100%"
                    />
                    <div className="container">
                      <h5>Penggunaan KPI dalam Digital Marketing</h5>
                    </div>
                    <hr />
                    <div className="row mt-2">
                      <div className="col-2">
                        <img
                          src="/assets/profile-artikel5.png"
                          alt=""
                          width="50"
                          height="50"
                          className="ms-2"
                        />
                      </div>
                      <div className="col-6 mt-2">
                        <h6>
                          <b>Sindy Milla</b>
                          <br />6 Des 2022
                        </h6>
                      </div>
                      <div className="col-4 mt-3">
                        <a href="">
                          <i className="bi bi-share me-3"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <div className="btn-artikelpopuler text-center">
                      <Link to="#" className="btn btn-sm">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-artikelpopuler">
                  <div className="title-artikelpopuler">
                    <img
                      src="/assets/artikel/artikel-populer4.png"
                      alt=""
                      width="100%"
                    />
                    <div className="container">
                      <h5>Social Media, Blogging Dalam Trend Digital</h5>
                    </div>
                    <hr />
                    <div className="row mt-2">
                      <div className="col-2">
                        <img
                          src="/assets/profile-artikel2.png"
                          alt=""
                          width="50"
                          height="50"
                          className="ms-2"
                        />
                      </div>
                      <div className="col-6 mt-2">
                        <h6>
                          <b>Julian Mark</b>
                          <br />7 Nov 2022
                        </h6>
                      </div>
                      <div className="col-4 mt-3">
                        <a href="">
                          <i className="bi bi-share me-3"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <div className="btn-artikelpopuler text-center">
                      <Link to="#" className="btn btn-sm">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-artikelpopuler">
                  <div className="title-artikelpopuler">
                    <img
                      src="/assets/artikel/digital-artikel-card1.png"
                      alt=""
                      width="100%"
                    />
                    <div className="container">
                      <h5>Apa itu Strategi Digital Marketing ?</h5>
                    </div>
                    <hr />
                    <div className="row mt-2">
                      <div className="col-2">
                        <img
                          src="/assets/profile-artikel4.png"
                          alt=""
                          width="50"
                          height="50"
                          className="ms-2"
                        />
                      </div>
                      <div className="col-6 mt-2">
                        <h6>
                          <b>Jamal Ariadi</b>
                          <br />1 Des 2022
                        </h6>
                      </div>
                      <div className="col-4 mt-3">
                        <a href="">
                          <i className="bi bi-share me-3"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-bookmark"></i>
                        </a>
                      </div>
                    </div>
                    <div className="btn-artikelpopuler text-center">
                      <Link to={DETAILARTIKEL} className="btn btn-sm">
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default SliderArtikelpopuler;
