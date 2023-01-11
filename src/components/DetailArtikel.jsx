import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/detailartikel.css";
import { DETAILVIDEOARTIKEL } from "../router";

const DetailArtikel = () => {
  return (
    <div>
      <Navs />
      <section className="wrapper__detailartikel">
        <Container>
          <div className="row">
            <div className="col-8">
              <img src="/assets/detail-artikel.png" width="100%" alt="" />
              <div className="title-detailkursus">
                <h4>Apa itu Digital Marketing?</h4>
              </div>
              <div className="profile-detailartikel">
                <div className="row">
                  <div className="col-1">
                    <img
                      src="/assets/profile-artikel4.png"
                      alt=""
                      width="180%"
                    />
                  </div>
                  <div className="col-4 ms-3 mt-2">
                    <h5>Jamal Ardiadi</h5>
                    <p>1 Desember 2022</p>
                  </div>
                  <div className="col-6 sosmed-artikel">
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-envelope-fill"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
                <hr />
                <br />
                <h4>Digital Marketing</h4>
                <p>
                  Pengertian digital marketing adalah suatu kegiatan pemasaran
                  atau promosi sebuah brand atau produk menggunakan media
                  digital atau internet. Tujuan digital marketing adalah untuk
                  menarik konsumen dan calon konsumen secara cepat.
                </p>
                <p>
                  Seperti yang kita tahu, penerimaan teknologi dan internet di
                  masyarakat sangat luas sehingga tidak heran kegiatan pemasaran
                  secara digital dijadikan pilihan utama oleh
                  perusahaan-perusahaan. Akibatnya, perusahaan saling
                  berkompetisi membuat konten yang menarik untuk ditampilkan
                  dalam pemasarannya di dunia maya.
                </p>
                <p>
                  Beberapa contoh teknik pemasaran yang termasuk dalam digital
                  marketing adalah SEO (Search Engine Optimization), periklanan
                  online seperti FB ads dan Google Ads, promosi media cetak,
                  iklan televisi dan radio, billboard elektronik, email
                  marketing, mobile marketing, dan lainnya.
                </p>
                <br />
                <br />
                <h4>Digital Marketing menurut Para Ahli</h4>
                <p>
                  Tentunya para ahli dalam digital marketing memiliki definisi
                  masing-masing. Adapun pengertian digital marketing menurut
                  para ahli adalah sebagai berikut, apa saja itu?
                </p>
                <p>
                  1. Ridwan Sanjaya & Josua Tarigan (2009) <br />
                  Digital marketing adalah kegiatan pemasaran termasuk branding
                  yang menggunakan berbagai media. Sebagai contoh yaitu blog,
                  website, e-mail, adwords, dan berbagai macam jaringan media
                  sosial.
                </p>
                <p>
                  2. Kleindl dan Burrow (2005) <br />
                  Pengertian digital marketing adalah suatu proses perencanaan
                  dan pelaksanaan dari konsep, ide, harga, promosi dan
                  distribusi. Secara sederhana dapat diartikan sebagai
                  pembangunan dan pemeliharaan hubungan yang saling
                  menguntungkan antara konsumen dan produsen.
                </p>
                <p>
                  3. Heidrick & Struggles (2009) <br />
                  Digital marketing menggunakan perkembangan dunia digital untuk
                  melakukan periklanan yang tidak digembar-gemborkan secara
                  langsung akan tetapi memiliki efek yang sangat berpengaruh.
                </p>
              </div>
            </div>
            <div className="col-4 content-detailartikel">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <h5>Artikel Populer</h5>
              <div className="detail-artikelpopuler">
                <div className="row">
                  <div className="col-5">
                    <img src="./assets/artikel/artikel-populer1.png" alt="" />
                  </div>
                  <div className="col-7">
                    <h6>Digital Marketing trend 2022 di Indonesia</h6>
                    <p>8 November 2022</p>
                  </div>
                </div>
              </div>
              <div className="detail-artikelpopuler">
                <div className="row">
                  <div className="col-5">
                    <img src="./assets/artikel/artikel-populer2.png" alt="" />
                  </div>
                  <div className="col-7">
                    <h6>Menentukan Audience di dalam Digital Marketing</h6>
                    <p>3 Desember 2022</p>
                  </div>
                </div>
              </div>
              <div className="detail-artikelpopuler">
                <div className="row">
                  <div className="col-5">
                    <img src="./assets/artikel/artikel-populer3.png" alt="" />
                  </div>
                  <div className="col-7">
                    <h6>Penggunaan KPI dalam Digital Marketing</h6>
                    <p>6 Desember 2022</p>
                  </div>
                </div>
              </div>
              <div className="detail-artikelpopuler">
                <div className="row">
                  <div className="col-5">
                    <img
                      src="./assets/artikel/digital-artikel-card8.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Kenapa Digital Marketing Penting?</h6>
                    <p>7 Desember 2022</p>
                  </div>
                </div>
              </div>
              <div className="detail-artikelpopuler">
                <div className="row">
                  <div className="col-5">
                    <img
                      src="./assets/artikel/digital-artikel-card6.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h6>Tradisional Vs Digital Marketing</h6>
                    <p>9 November 2022</p>
                  </div>
                </div>
              </div>
              <div className="btn-detailartikel text-center">
                <Link
                  to={DETAILVIDEOARTIKEL}
                  type="button"
                  className="btn btn-sm"
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="kursus-artikel">
            <h4>Kursus</h4>
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
                      Manajemen Pemasaran Industri Perikanan
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

export default DetailArtikel;
