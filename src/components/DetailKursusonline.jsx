import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/detailkursusonline.css";
import Swal from "sweetalert2";

const BtnBuyerKursus = () => {
  Swal.fire({
    title: "Pembayaran Kursus Online",
    text: "Anda harus login terlebih dahulu!",
    icon: "warning",
    cancelButtonText: "Kembali",
    confirmButtonText: "Login",
    confirmButtonColor: "#1F8F4A",
    showCancelButton: true,
  });
};

const DetailKursus = () => {
  return (
    <div>
      <Navs />
      <section className="wrapper__detailkursus">
        <Container>
          <div className="row">
            <div className="col-8">
              <img
                src="/assets/detail-kursus-online1.png"
                width="100%"
                alt=""
              />
              <div className="title-detailkursus">
                <div className="row">
                  <div className="col-9">
                    <h4>Manajemen Pemasaran Industri Perikanan</h4>
                    <p>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill me-2"></i>(20)
                    </p>
                    <p>
                      Kursus online dengan materi pembelajaran mengenai
                      Manajemen Pemasaran Industri Perikanan.
                    </p>
                  </div>
                  <div className="col-3">
                    <Link
                      to={""}
                      type="button"
                      className="btn btn-sm"
                      onClick={() => BtnBuyerKursus()}
                    >
                      Rp. 200.000
                    </Link>
                  </div>
                </div>
              </div>
              <div className="profile-detailkursus">
                <h4>Instruktur</h4>
                <div className="row">
                  <div className="col-1">
                    <img src="/assets/profile-detail-kursus.png" alt="" />
                  </div>
                  <div className="col-8 ms-3 mt-1">
                    <h5>Tyler Ghapin</h5>
                    <p>Manajer Pemasaran di Ikan Segar Jaya</p>
                  </div>
                </div>
                <hr />
                <br />
                <h4>Deskripsi Kursus</h4>
                <p>
                  Sebagai proses produksi yang komersial, pemasaran hasil
                  perikanan merupakan syarat mutlak yang diperlukan dalam
                  pembangunan di sektor perikanan karena sistem pemasaran mampu
                  menciptakan nilai tambah melalui guna tempat, guna bentuk dan
                  guna waktu.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, excepturi est. Laborum provident sapiente, autem vero
                  quaerat porro amet, quidem quos voluptatum rerum assumenda qui
                  harum id pariatur? Numquam, dolorum. quidem quos voluptatum
                  rerum assumenda dolor sit amet consectetur adipisicing elit.
                  Rerum, excepturi est.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident rerum illo aliquam culpa nam dicta beatae
                  consequatur explicabo officia maiores in ipsam, animi,
                  perferendis numquam perspiciatis vitae nesciunt quia ad, optio
                  obcaecati? Saepe, dicta in! dolor sit amet consectetur
                  adipisicing elit. Rerum, excepturi dolor sit amet consectetur
                  est.
                </p>
                <br />
                <hr />
                <br />
                <h4>Apa yang akan anda pelajari</h4>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Industri perikanan di
                  indonesia
                </p>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Manajemen pemasaran
                </p>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Dasar pemasaran
                  perikanan bagi pemula
                </p>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Dasar pemasaran
                  perikanan bagi pemula
                </p>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Manajemen pemasaran
                  industri perikanan bagi pemula
                </p>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Manajemen pemasaran
                  industri perikanan lanjutan
                </p>
                <p>
                  <i class="bi bi-check-circle me-3"></i>Manajemen pemasaran
                  industri perikanan ahli
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="card-benefitkursus">
                <h5>Apa yang akan anda dapatkan</h5>
                <p>
                  <i class="bi bi-camera-video me-3"></i>42 Jam Video
                  Pembelajaran
                </p>
                <p>
                  <i class="bi bi-card-text me-3"></i>20 Artikel Terkait
                </p>
                <p>
                  <i class="bi bi-cloud-download  me-3"></i>Download Materi
                </p>
                <p>
                  <i class="bi bi-credit-card me-3"></i>Akses Selamanya
                </p>
                <p>
                  <i class="bi bi-folder-symlink me-3"></i>Tugas dan Latihan
                </p>
                <p>
                  <i class="bi bi-person-vcard me-3"></i>Sertifikat Tanda
                  Selesai
                </p>
                <div className="btn-benefitkursus text-center">
                  <Link to="#" type="button" className="btn btn-sm">
                    Daftar Kursus
                  </Link>
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

export default DetailKursus;
