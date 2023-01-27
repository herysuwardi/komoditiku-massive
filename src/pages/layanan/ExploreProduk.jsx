import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import SliderProdukpopuler from "../../components/SliderProdukpopuler";
import FreeJoin from "../../components/FreeJoin";
import Footer from "../../components/Footer";
import Heroexploreproduk from "../../images/hero-eksplorproduk.png";
import "./styles/exploreproduk.css";
import { PRODUKMENTAH, PRODUKJADI } from "../../router";

const ExploreProduk = () => {
  return (
    <HOC title="Explore Produk - Komoditiku">
      <Navs />
      <section className="wrapper__exploreproduk">
        <Container>
          <div className="row">
            <div className="col-6">
              <div className="text-explore">
                <h1>
                  Eksplor Produk <b>Komoditiku</b>
                </h1>
                <p>
                  Komoditiku menyediakan berbagai produk berkualitas dari para
                  pelaku UMKM. Pada eksplor produk ini kami menyediakan dua
                  jenis produk, <br />
                  yaitu produk jadi dan produk mentah dari sektor pertanian dan{" "}
                  <br />
                  sektor perikanan.
                </p>
                <Link href="#" type="button" className="btn btn-sm">
                  Temukan Produk<i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <div className="input-group search-explore">
                  <input
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Cari kebutuhan produk anda?"
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
      <div className="shape-explore">
        <img src="/assets/hero-shape1.png" alt="" className="" />
      </div>
      <section className="wrapper-cardexplore">
        <Container>
          <div className="text-eksplor text-center">
            <h1>
              Eksplor Produk <b>Komoditiku</b>
            </h1>
            <p>
              Temukan produk komoditi yang anda inginkan pada komoditiku, <br />
              kami menyediakan dua jenis produk sesuai kebutuhan anda!
            </p>
          </div>
          <div className="row d-flex justify-content-center flex-wrap">
            <div className="col-4">
              <div className="card-explore text-center">
                <div className="zoom-effect">
                  <div className="kotak">
                    <img
                      src="../../assets/produkmentah.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="title-produk">
                  <h5>Produk Mentah</h5>
                </div>
                <div className="deskripsi-produk container mt-4">
                  <p>
                    Komoditiku menyediakan berbagai produk mentah hasil panen
                    para pelaku usaha dengan kualitas yang bermutu
                  </p>
                  <div className="btn-explore">
                    <Link to={PRODUKMENTAH} className="btn btn-sm">
                      Lihat Produk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card-explore text-center">
                <div className="zoom-effect">
                  <div className="kotak">
                    <img
                      src="../../assets/produkjadi.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="title-produk">
                  <h5>Produk Jadi</h5>
                </div>
                <div className="deskripsi-produk container mt-4">
                  <p>
                    Komoditiku menyediakan berbagai produk komoditi yang telah
                    diolah menjadi produk siap pakai yang berkualitas
                  </p>
                  <div className="btn-explore">
                    <Link to={PRODUKJADI} className="btn btn-sm">
                      Lihat Produk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SliderProdukpopuler />
      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default ExploreProduk;
