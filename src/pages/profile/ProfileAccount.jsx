import { Container } from "react-bootstrap";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./profileaccount.css";

const ProfileAccount = () => {
  return (
    <HOC title="Akun Profil - Komoditiku">
      <Navs />
      <section className="profile-account">
        <Container>
          <div className="row">
            <div className="col-5">
              <div className="edit-profile">
                <div className="profile-img">
                  <img src="/assets/profile-artikel2.png" alt="" width="50%" />
                  <h5 className="mt-3">Salman Fardinan</h5>
                  <h6>Kota, Jakarta Selatan</h6>
                  <a href="#" type="file" className="camera-fill">
                    <i className="bi bi-camera"></i>
                  </a>
                  <hr />
                </div>
                <div className="list-profile">
                  <p>
                    <a href="#">
                      <i className="bi bi-person-circle me-3"></i>Profil
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="bi bi-box me-3"></i>Produk tersimpan
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="bi bi-card-text me-3"></i>Daftar Kursus
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="bi bi-chat-right me-3"></i>Riwayat
                      Konsultasi
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="bi bi-ui-checks-grid me-3"></i>Artikel
                      tersimpan
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="bi bi-person-gear me-3"></i>Ganti kata Sandi
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <i className="bi bi-box-arrow-right me-3"></i>Keluar
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="data-profile">
                <div className="d-flex">
                  <h4>Profil</h4>
                  <a href="#" className="ms-auto edit-data">
                    <h5>Edit Profile</h5>
                  </a>
                </div>
                <hr />
                <div className="list-dataprofile">
                  <h6>Nama</h6>
                  <h5>Salman Fardinan</h5>
                  <h6>Nomor Telepon</h6>
                  <h5>+62 8123 4567 890</h5>
                  <h6>Email</h6>
                  <h5>salmanfardinan@gmail.com</h5>
                  <h6>Jenis Kelamin</h6>
                  <h5>Laki-laki</h5>
                  <h6>Tanggal Lahir</h6>
                  <h5>17 Januari 2000</h5>
                  <h6>Alamat</h6>
                  <h5>Kota, Jakarta Selatan</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </HOC>
  );
};

export default ProfileAccount;
