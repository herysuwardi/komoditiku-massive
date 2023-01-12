import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/slidertim.css";

const Slidertim = () => {
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
      <section className="wrapper__tim">
        <Container>
          <div className="text-tim">
            <h1>
              Tim <b>Komoditiku</b>
            </h1>
            <p>
              Kami siap mendukung anda, memberikan Pelatihan dan Konsultasi
              bersama Komoditiku
            </p>
          </div>
          <Slider href={(slider) => (this.slider = slider)} {...settings}>
            <div className="row">
              <div className="col">
                <div className="card-tim text-center container">
                  <img src="/assets/tim3.png" alt="..." />
                  <h5>Risqi</h5>
                  <p>Front End Developer</p>
                  <hr></hr>
                  <a href="">
                    <i className="bi bi-facebook me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-tim text-center container">
                  <img src="/assets/tim2.png" alt="..." />
                  <h5>Hery</h5>
                  <p>Front End Developer</p>
                  <hr></hr>
                  <a href="https://web.facebook.com/hery.suwardi.1">
                    <i className="bi bi-facebook me-4"></i>
                  </a>
                  <a href="https://www.instagram.com/hryy.18/?hl=id">
                    <i className="bi bi-instagram me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-tim text-center container">
                  <img src="/assets/tim3.png" alt="..." />
                  <h5>Salman</h5>
                  <p>Project Manager</p>
                  <hr></hr>
                  <a href="">
                    <i className="bi bi-facebook me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-tim text-center container">
                  <img src="/assets/tim3.png" alt="..." />
                  <h5>Vero</h5>
                  <p>UI-UX Design</p>
                  <hr></hr>
                  <a href="">
                    <i className="bi bi-facebook me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-tim text-center container">
                  <img src="/assets/tim3.png" alt="..." />
                  <h5>Letti</h5>
                  <p>UI-UX Design</p>
                  <hr></hr>
                  <a href="">
                    <i className="bi bi-facebook me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram me-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default Slidertim;
