import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/detailinstruktur.css";

const DetailInstruktur = () => {
  return (
    <div>
      <Navs />
      <section className="profile-instruktur">
        <Container>
          <div className="row">
            <div className="col-4">
              <img src="/assets/profil-detail-instruktur.png" alt="..." />
            </div>
            <div className="col-8">
              <h4>Tyler Ghapin</h4>
              <p>Manajer Pemasaran di Ikan Segar Jaya</p>
              <p>Mentor sejak 09 Desember 2022</p>
              <div className="profile-iconstar">
                <p>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill me-2"></i>(20)
                </p>
              </div>
              <div className="profile-iconsosmed">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div className="data-profileinstruktur">
            <div className="row">
              <div className="col-9">
                <h3>Biodata</h3>
                <p>S1 | Universitas Indonesia</p>
                <h3>Pengalaman</h3>
                <p>
                  Budidaya ikan lele | 2013 - 2016 <br />
                  Sales PT Maya Food Industrie | 2016 -2019 <br />
                  Manajer PT Segar Jaya | 2019 - Sekarang
                </p>
                <h3>Detail</h3>
                <p>
                  Banyaknya pengalaman untuk berbagi ilmu dibidangnya memutuskan
                  Tyler Ghapin untuk berbagi pengalaman yang menyenangkan dan
                  membatu teman-teman untuk membuka bisnis sekaligus tips dan
                  trik untuk mengembangkannya menjadi bisnis yang besar dan
                  memberikan info pengalaman gagal yang dilaluinya sehingga
                  dapat bangkit dan menjadi kan dirinya berkarya di tengah
                  keterpurukannya.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper-detailkursus">
            <h3>Kursus</h3>
            <div className="row">
              <div className="col-4">
                <div className="card-profilekursus">
                  <div className="card-titlekursus container text-center">
                    <img src="./assets/kursusonline/kursus-online-card1.png" />
                    <h5 className="container mt-4 mb-3">
                      Strategi Perencanaan Produksi Pertanian
                    </h5>
                    <p>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill me-2"></i>(20)
                    </p>
                    <hr />
                  </div>
                  <div className="card-pricingkursus ms-4">
                    <h5>Rp20.000</h5>
                    <Link to="#" type="button" className="btn btn-sm">
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card-profilekursus">
                  <div className="card-titlekursus container text-center">
                    <img src="./assets/kursusonline/kursus-online-card2.png" />
                    <h5 className="container mt-4 mb-3">
                      Manajemen Strategi Usaha Budidaya Perikanan
                    </h5>
                    <p>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill me-2"></i>(20)
                    </p>
                    <hr />
                  </div>
                  <div className="card-pricingkursus ms-4">
                    <h5>Rp20.000</h5>
                    <Link to="#" type="button" className="btn btn-sm">
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card-profilekursus">
                  <div className="card-titlekursus container text-center">
                    <img src="./assets/kursusonline/kursus-online-card3.png" />
                    <h5 className="container mt-4 mb-3">
                      Perencanaan dan Sistem Produksi Pertanian
                    </h5>
                    <p>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill me-2"></i>(20)
                    </p>
                    <hr />
                  </div>
                  <div className="card-pricingkursus ms-4">
                    <h5>Rp20.000</h5>
                    <Link to="#" type="button" className="btn btn-sm">
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default DetailInstruktur;
