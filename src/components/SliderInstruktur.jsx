import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderinstruktur.css";
import { DETAILINSTRUKTUR } from "../router";

const SliderInstruktur = () => {
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
      <section className="wrapper__instruktur">
        <Container>
          <div className="text-instruktur">
            <h1>
              Instruktur <b>terbaik Kami</b>
            </h1>
          </div>
          <Slider href={(slider) => (this.slider = slider)} {...settings}>
            <div className="row">
              <div className="col">
                <div className="card-instruktur text-center container">
                  <img src="/assets/instruktur-img1.png" alt="..." />
                  <h5>Johana Jane</h5>
                  <p>Marketing</p>
                  <Link to="#" className="btn btn-sm">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-instruktur text-center container">
                  <img src="/assets/instruktur-img2.png" alt="..." />
                  <h5>Priyanka Chopra</h5>
                  <p>Marketing</p>
                  <Link to="#" className="btn btn-sm">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-instruktur text-center container">
                  <img src="/assets/instruktur-img3.png" alt="..." />
                  <h5>Jacob Jones</h5>
                  <p>Manajemen Bisnis</p>
                  <Link to="#" className="btn btn-sm">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-instruktur text-center container">
                  <img src="/assets/instruktur-img4.png" alt="..." />
                  <h5>Maxim Putra</h5>
                  <p>Manajemen Bisnis</p>
                  <Link to="#" className="btn btn-sm">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-instruktur text-center container">
                  <img src="/assets/instruktur-img5.png" alt="..." />
                  <h5>Tyler Ghapin</h5>
                  <p>Marketing</p>
                  <Link to={DETAILINSTRUKTUR} className="btn btn-sm">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default SliderInstruktur;
