import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderprodukpopuler.css";

const SliderProdukpopuler = () => {
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
      <section className="wrapper__produkpopuler">
        <Container>
          <div className="text-produkpopuler">
            <h1>
              Eksplor Cepat <b>Produk Populer</b>
            </h1>
          </div>
          <Slider href={(slider) => (this.slider = slider)} {...settings}>
            <div className="row">
              <div className="col">
                <div className="card-produkpopuler">
                  <img
                    src="./assets/exploreproduk/kacanghijau.png"
                    className="img-header"
                    width="100%"
                  />
                  <div className="label-produk text-center">
                    <p>Produk Pertanian</p>
                  </div>
                  <div className="label-harga text-center">
                    <p>Rp10.000/Kg</p>
                  </div>
                  <div className="card-produk1 px-4 mt-3">
                    <div className="row d-flex justify-content-between">
                      <div className="col col-9">
                        <h5>Kacang Hijau</h5>
                        <p className="rating">
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>(87)
                        </p>
                      </div>
                      <div className="col col-2 save">
                        <Link>
                          <i className="bi bi-bookmark text-muted"></i>
                        </Link>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row d-flex arrow">
                      <div className="col col-2 mt-2 me-2">
                        <img src="./assets/exploreproduk/profile5.png" />
                      </div>
                      <div className="col col-6 mt-2">
                        <p>Jamal Ariadi</p>
                        <p className="text-muted">Kab. Sleman</p>
                      </div>
                      <div className="col col-3 mt-2">
                        <Link to="#">
                          <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-produkpopuler">
                  <img
                    src="./assets/exploreproduk/kentang.png"
                    className="img-header"
                    width="100%"
                  />
                  <div className="label-produk text-center">
                    <p>Produk Pertanian</p>
                  </div>
                  <div className="label-harga text-center">
                    <p>Rp10.000/Kg</p>
                  </div>
                  <div className="card-produk1 px-4 mt-3">
                    <div className="row d-flex justify-content-between">
                      <div className="col col-9">
                        <h5>Kentang</h5>
                        <p className="rating">
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>(87)
                        </p>
                      </div>
                      <div className="col col-2 save">
                        <Link>
                          <i className="bi bi-bookmark text-muted"></i>
                        </Link>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row d-flex arrow">
                      <div className="col col-2 mt-2 me-2">
                        <img src="./assets/exploreproduk/profile7.png" />
                      </div>
                      <div className="col col-6 mt-2">
                        <p>Jamal Ariadi</p>
                        <p className="text-muted">Kab. Sleman</p>
                      </div>
                      <div className="col col-3 mt-2">
                        <Link to="#">
                          <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-produkpopuler">
                  <img
                    src="./assets/exploreproduk/kripikpisang.png"
                    className="img-header"
                    width="100%"
                  />
                  <div className="label-produk text-center">
                    <p>Produk Pertanian</p>
                  </div>
                  <div className="label-harga text-center">
                    <p>Rp10.000/Kg</p>
                  </div>
                  <div className="card-produk1 px-4 mt-3">
                    <div className="row d-flex justify-content-between">
                      <div className="col col-9">
                        <h5>Kripik Pisang</h5>
                        <p className="rating">
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>(87)
                        </p>
                      </div>
                      <div className="col col-2 save">
                        <Link>
                          <i className="bi bi-bookmark text-muted"></i>
                        </Link>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row d-flex arrow">
                      <div className="col col-2 mt-2 me-2">
                        <img src="./assets/exploreproduk/profile9.png" />
                      </div>
                      <div className="col col-6 mt-2">
                        <p>Jamal Ariadi</p>
                        <p className="text-muted">Kab. Sleman</p>
                      </div>
                      <div className="col col-3 mt-2">
                        <Link to="#">
                          <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-produkpopuler">
                  <img
                    src="./assets/exploreproduk/kelapa.png"
                    className="img-header"
                    width="100%"
                  />
                  <div className="label-produk text-center">
                    <p>Produk Pertanian</p>
                  </div>
                  <div className="label-harga text-center">
                    <p>Rp10.000/Kg</p>
                  </div>
                  <div className="card-produk1 px-4 mt-3">
                    <div className="row d-flex justify-content-between">
                      <div className="col col-9">
                        <h5>Kelapa</h5>
                        <p className="rating">
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>(87)
                        </p>
                      </div>
                      <div className="col col-2 save">
                        <Link>
                          <i className="bi bi-bookmark text-muted"></i>
                        </Link>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row d-flex arrow">
                      <div className="col col-2 mt-2 me-2">
                        <img src="./assets/exploreproduk/profile3.png" />
                      </div>
                      <div className="col col-6 mt-2">
                        <p>Jamal Ariadi</p>
                        <p className="text-muted">Kab. Sleman</p>
                      </div>
                      <div className="col col-3 mt-2">
                        <Link to="#">
                          <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-produkpopuler">
                  <img
                    src="./assets/exploreproduk/browniespisang.png"
                    className="img-header"
                    width="100%"
                  />
                  <div className="label-produk text-center">
                    <p>Produk Pertanian</p>
                  </div>
                  <div className="label-harga text-center">
                    <p>Rp10.000/Kg</p>
                  </div>
                  <div className="card-produk1 px-4 mt-3">
                    <div className="row d-flex justify-content-between">
                      <div className="col col-9">
                        <h5>Brownies Pisang</h5>
                        <p className="rating">
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>(87)
                        </p>
                      </div>
                      <div className="col col-2 save">
                        <Link>
                          <i className="bi bi-bookmark text-muted"></i>
                        </Link>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row d-flex arrow">
                      <div className="col col-2 mt-2 me-2">
                        <img src="./assets/exploreproduk/profile10.png" />
                      </div>
                      <div className="col col-6 mt-2">
                        <p>Jamal Ariadi</p>
                        <p className="text-muted">Kab. Sleman</p>
                      </div>
                      <div className="col col-3 mt-2">
                        <Link to="#">
                          <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                        </Link>
                      </div>
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

export default SliderProdukpopuler;
