import { useState } from "react";
import { Container } from "react-bootstrap";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import TableProduct from "../../components/TableProduct";
import Footer from "../../components/Footer";
import Profil from "./components/Profil";
import ProdukTersimpan from "./components/ProdukTersimpan";
import DaftarKursus from "./components/DaftarKursus";
import RiwayatKonsultasi from "./components/RiwayatKonsultasi";
import ArtikelTersimpan from "./components/ArtikelTersimpan";
import GantiPassword from "./components/GantiPassword";
import "./profileaccount.css";

const BtnProfile = ({ title, onClick }) => {
  return (
    <div className="list-profile" onClick={onClick}>
      <p>{title}</p>
    </div>
  );
};

const ProfileAccount = () => {
  const [content, setContent] = useState(0);

  const changeContent = (numberContent) =>
    setContent((prevState) => (prevState = numberContent));

  const displayContent =
    content === 0 ? (
      <Profil />
    ) : content === 1 ? (
      <ProdukTersimpan />
    ) : content === 2 ? (
      <DaftarKursus />
    ) : content === 3 ? (
      <RiwayatKonsultasi />
    ) : content === 4 ? (
      <ArtikelTersimpan />
    ) : content === 5 ? (
      <GantiPassword />
    ) : (
      <Profil />
    );
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
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-person-circle me-3"></i>Profil
                      </>
                    }
                    onClick={() => changeContent(0)}
                  />
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-box me-3"></i>Produk Tersimpan
                      </>
                    }
                    onClick={() => changeContent(1)}
                  />
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-card-text me-3"></i>Daftar Kursus
                      </>
                    }
                    onClick={() => changeContent(2)}
                  />
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-chat-right me-3"></i>Riwayat
                        Konsultasi
                      </>
                    }
                    onClick={() => changeContent(3)}
                  />
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-ui-checks-grid me-3"></i>Artikel
                        Tersimpan
                      </>
                    }
                    onClick={() => changeContent(4)}
                  />
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-person-gear me-3"></i>Ganti Kata
                        Sandi
                      </>
                    }
                    onClick={() => changeContent(5)}
                  />
                  <BtnProfile
                    title={
                      <>
                        <i className="bi bi-box-arrow-right me-3"></i>Keluar
                      </>
                    }
                    onClick={() => changeContent(6)}
                  />
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="data-profile">{displayContent}</div>
            </div>
          </div>
          <h3 className="mt-5">Kelola Data Produk</h3>
          <TableProduct />
        </Container>
      </section>
      <Footer />
    </HOC>
  );
};

export default ProfileAccount;
