import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import FreeJoin from "../../components/FreeJoin";
import Footer from "../../components/Footer";
import Heroexploreproduk from "../../images/hero-eksplorproduk.png";
import "./styles/produkmentahjadi.css";
import { DETAILPRODUK } from "../../router";

const ProdukMentah = () => {
  return (
    <HOC title="Produk Mentah - Komoditiku">
      <Navs />
      <section className="wrapper__product">
        <Container>
          <div className="row">
            <div className="col-6">
              <div className="text-product">
                <h1>
                  Produk Menta <b>Komoditiku</b>
                </h1>
                <p>
                  Komoditiku menyediakan berbagai produk berkualitas dari para
                  pelaku UMKM. Pada eksplor produk ini kami menyediakan berbagai
                  produk mentah yang dihasilkan oleh petani-petani terampil
                  dengan kualitas yang terjaga.
                </p>
                <Link href="#" type="button" className="btn btn-sm">
                  Temukan Produk<i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <div className="input-group search-product">
                  <input
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Apa yang ingin anda pelajari?"
                  />
                  <span className="input-group-text" id="search">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src={Heroexploreproduk}
                alt="heroexploreproduk"
                className="hero-explore"
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="shape-product">
        <img src="/assets/hero-shape1.png" alt="" className="" />
      </div>
      <section className="wrapper-cardproduk">
        <Container>
          <div className="text-produk text-center">
            <h1>
              Produk Mentah <b>Komoditiku</b>
            </h1>
            <p>
              Temukan produk komoditi yang anda inginkan pada komoditiku, <br />
              kami menyediakan berbagai jenis produk sesuai kebutuhan anda!
            </p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/beras.png"
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
                      <h5>Beras</h5>
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
                      <img src="./assets/exploreproduk/profile.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
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
                      <img src="./assets/exploreproduk/profile2.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/alpukat.png"
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
                      <h5>Alpukat</h5>
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
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
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
                      <img src="./assets/exploreproduk/profile4.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/cabairawit.png"
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
                      <h5>Cabai Rawit</h5>
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
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/jagungmanis.png"
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
                      <h5>Jagung Manis</h5>
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
                      <img src="./assets/exploreproduk/profile6.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/ikannila.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Ikan Nila</h5>
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
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/ketanhitam.png"
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
                      <h5>Ketan Hitam</h5>
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
                      <img src="./assets/exploreproduk/profile8.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/singkong.png"
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
                      <h5>Singkong</h5>
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
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
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
                      <img src="./assets/exploreproduk/profile10.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kacangkedelai.png"
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
                      <h5>Kacang Kedelai</h5>
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
                      <img src="./assets/exploreproduk/profile11.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kacangtanah.png"
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
                      <h5>Kacang Tanah</h5>
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
                      <img src="./assets/exploreproduk/profile12.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/ikanlele.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Ikan Lele</h5>
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
                      <img src="./assets/exploreproduk/profile13.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/ladaputih.png"
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
                      <h5>Lada Putih</h5>
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
                      <img src="./assets/exploreproduk/profile14.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/ikangurame.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Ikan Gurame</h5>
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
                      <img src="./assets/exploreproduk/profile15.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kepiting.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Kepiting</h5>
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
                      <img src="./assets/exploreproduk/profile16.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jamal Ariadi</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default ProdukMentah;
