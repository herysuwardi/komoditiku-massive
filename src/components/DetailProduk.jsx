import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/detailproduk.css";

const DetailProduk = () => {
  return (
    <div>
      <Navs />
      <section className="wrapper__detailproduk">
        <Container>
          <div className="row">
            <div className="col">
              <img src="/assets/exploreproduk/detail-beras.png" alt="" />
              <div className="icon-leftright mt-2">
                <img
                  src="/assets/exploreproduk/lite-beras.png"
                  alt=""
                  className="me-3"
                />
                <img
                  src="/assets/exploreproduk/lite-beras.png"
                  alt=""
                  className="me-3"
                />
                <img src="/assets/exploreproduk/lite-beras.png" alt="" />
                <i class="bi bi-arrow-left-square me-3"></i>
                <i class="bi bi-arrow-right-square-fill"></i>
              </div>
              <div className="profile-detailproduk">
                <h5>
                  <b>Pelaku UMKM</b>{" "}
                </h5>
                <div className="row">
                  <div className="col-1 me-4">
                    <img src="/assets/profil-feedback-kursus3.png" alt="" />
                  </div>
                  <div className="col-9 mt-2 ms-2">
                    <h6>
                      <b>Kevin Pratama</b>
                    </h6>
                    <p className="text-muted">Kab. Bogor</p>
                  </div>
                </div>
              </div>
              <hr />
              <br />
              <div className="deskripsi-detailproduk">
                <h5>
                  <b>Deskripsi Produk</b>
                </h5>
                <br />
                <p>
                  Pihak UMKM komoditiku menyediakan beras dengan kualitas
                  bermutu, kami menyediakan beras dari kabupaten bogor untuk
                  dipasarkan ke seluruh penjuru indonesia. Beras yang kami
                  hasilkan terjamin kualitasnya hingga ke tangan anda. Segera
                  hubungi kami melalui email ataupun whatsapp untuk info lebih
                  lanjut.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="card-detailproduk">
                <h5>
                  <b>Beras</b>
                </h5>
                <p>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>(20)
                </p>
                <div className="list-produk">
                  <p>
                    <i className="bi bi-grid me-3"></i>Kategori : Produk
                    Pertanian
                  </p>
                  <p>
                    <i class="bi bi-calendar4 me-3"></i>Publikasi : 1 Desember
                    2022
                  </p>
                  <p>
                    <i className="bi bi-eye me-3"></i>Dilihat : 1001 kali
                  </p>
                  <p>
                    <i className="bi bi-box me-3"></i>Persedian : 25.000 kg
                  </p>
                  <p>
                    <i className="bi bi-clock me-3"></i>Tanggal Panen : 29
                    November 2022
                  </p>
                  <p>
                    <i className="bi bi-telephone-plus me-3"></i>Hubungi : 101
                    kali
                  </p>
                </div>
              </div>
              <div className="btn-detailproduk text-center mt-4">
                <a href="https://web.whatsapp.com/" className="btn btn-sm me-4">
                  <i class="bi bi-whatsapp me-2"></i>
                  Hubungi Whatsapp
                </a>
                <a href="https://mail.google.com/" className="btn btn-sm">
                  <i class="bi bi-envelope me-2"></i>
                  Hubungi Email
                </a>
              </div>
              <div className="ulasan-produk mt-5">
                <h5>
                  <b>Penilaian Produk</b>
                </h5>
                <p>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2">5/5</i>(20 Ulasan)
                </p>
                <a href="#" className="btn btn-sm">
                  Beri Penilaian
                </a>
                <p className="text-muted all-see">
                  Lihat Semua Ulasan <i class="bi bi-arrow-right-short"></i>
                </p>
                <hr />
                <div className="card-ulasanproduk">
                  <div className="row">
                    <div className="col-1 me-4">
                      <img
                        src="/assets/profil-feedback-kursus1.png"
                        alt=""
                        width="60"
                      />
                    </div>
                    <div className="col-9 mt-2 ms-3 mb-3">
                      <h6>
                        <b>Kurnia Salsabila</b>
                      </h6>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                    </div>
                    <p>
                      Alhamdulillah kualitas berasnya sangat baik, penjual
                      sangat jujur. Jangan ragu untuk bertransaksi dengan pelaku
                      UMKM ini, sangat amanah
                    </p>
                  </div>
                  <img
                    src="/assets/exploreproduk/ulasan-beras1.png"
                    alt=""
                    className="me-3"
                  />
                  <img src="/assets/exploreproduk/ulasan-beras2.png" alt="" />
                </div>
                <div className="card-ulasanproduk">
                  <div className="row">
                    <div className="col-1 me-4">
                      <img
                        src="/assets/profil-feedback-kursus1.png"
                        alt=""
                        width="60"
                      />
                    </div>
                    <div className="col-9 mt-2 ms-3 mb-3">
                      <h6>
                        <b>Kurnia Salsabila</b>
                      </h6>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                      <i className="bi bi-star-fill me-2"></i>
                    </div>
                    <p>
                      Alhamdulillah kualitas berasnya sangat baik, penjual
                      sangat jujur. Jangan ragu untuk bertransaksi dengan pelaku
                      UMKM ini, sangat amanah
                    </p>
                  </div>
                  <img
                    src="/assets/exploreproduk/ulasan-beras1.png"
                    alt=""
                    className="me-3"
                  />
                  <img src="/assets/exploreproduk/ulasan-beras2.png" alt="" />
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

export default DetailProduk;
