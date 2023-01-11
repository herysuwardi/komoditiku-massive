import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import SliderArtikelpopuler from "../../components/SliderArtikelpopuler";
import FreeJoin from "../../components/FreeJoin";
import Footer from "../../components/Footer";
import Herodigitalpemasaran from "../../images/hero-digitalpemasaran.png";
import "./styles/digitalpemasaran.css";
import { DETAILARTIKEL } from "../../router";

const DigitalPemasaran = () => {
  return (
    <HOC title="Digital Pemasaran - Komoditiku">
      <Navs />
      <section className="wrapper__digitalpemasaran">
        <Container>
          <div className="row">
            <div className="col-6">
              <div className="text-digital">
                <h1>
                  Digital <b>Pemasaran</b>
                </h1>
                <p>
                  Dengan kekuatan gabungan dari internet dan teknologi, Pemasar
                  Digital saat ini dapat mengumpulkan dan menganalisis data dari
                  perilaku pelanggan yang berbeda atau keterlibatan pengguna,
                  memungkinkan mereka untuk memfasilitasi konten dan iklan yang
                  lebih dipersonalisasi <br />
                  ke arah audiens yang ditentukan dengan jelas untuk
                  keterlibatan <br />
                  dan hasil yang lebih baik.
                </p>
                <h6>Pelajari dan Tambahkan Pengetahuan anda</h6>
                <div className="input-group search-digital">
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
                src={Herodigitalpemasaran}
                alt="..."
                className="hero-digital"
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="shape-digital">
        <img src="/assets/hero-shape1.png" alt="" className="" />
      </div>
      <section className="wrapper-cardartikel">
        <Container>
          <div className="text-artikel text-center">
            <h1>
              Artikel Digital Pemasaran <b>Komoditiku</b>
            </h1>
            <p>Temukan artikel yang dapat menunjang pertumbuhan bisnis kamu</p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card1.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel4.png"
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
                  <div className="btn-artikel text-center">
                    <Link to={DETAILARTIKEL} className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card2.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel1.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Laura Monica</b>
                        <br />4 Nov 2022
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card3.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel2.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Julian Mark</b>
                        <br />9 Des 2022
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card4.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel3.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Dimas Baam</b>
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card5.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel5.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Sindy Milla</b>
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card6.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel4.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Radit Junior</b>
                        <br />6 Nov 2022
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card7.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel3.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Ardhito Lim</b>
                        <br />7 Des 2022
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-artikel">
                <div className="card-titleartikel">
                  <img
                    src="../../assets/artikel/digital-artikel-card8.png"
                    alt=""
                    width="100%"
                  />
                  <h5>Apa itu Digital Marketing ?</h5>
                  <hr />
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src="../../assets/profile-artikel2.png"
                        alt=""
                        width="50"
                        height="50"
                        className="ms-2"
                      />
                    </div>
                    <div className="col-6 mt-2">
                      <h6>
                        <b>Kevin Aksara</b>
                        <br />4 Nov 2022
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
                  <div className="btn-artikel text-center">
                    <Link to="#" className="btn btn-sm">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SliderArtikelpopuler />
      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default DigitalPemasaran;
