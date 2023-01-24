import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import ApiArticle from "../../components/ApiArticle";
import SliderArtikelpopuler from "../../components/SliderArtikelpopuler";
import FreeJoin from "../../components/FreeJoin";
import Footer from "../../components/Footer";
import Herodigitalpemasaran from "../../images/hero-digitalpemasaran.png";
import "./styles/digitalpemasaran.css";

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
          <ApiArticle />
        </Container>
      </section>

      <SliderArtikelpopuler />
      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default DigitalPemasaran;
