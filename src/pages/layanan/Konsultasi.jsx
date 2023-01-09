import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import Sliderfeedback from "../../components/Sliderfeedback";
import FreeJoin from "../../components/FreeJoin";
import InformasiUmum from "./components/InformasiUmum";
import DetailKonsultasi from "./components/DetailKonsultasi";
import InstruksiKonsultasi from "./components/InstruksiKonsultasi";
import Footer from "../../components/Footer";
import Herokonsultasi from "../../images/hero-konsultasi.png";
import Konsulhero from "../../images/consul-image.png";
import "./styles/konsultasi.css";

const BtnKonsultasi = ({ title, imageSrc, imageAlt, onClick }) => {
  return (
    <div className="section-form text-center" onClick={onClick}>
      <img src={imageSrc} alt={imageAlt} width="20%" />
      <p>{title}</p>
    </div>
  );
};

const Konsultasi = () => {
  const [content, setContent] = useState(0);

  const changeContent = (numberContent) =>
    setContent((prevState) => (prevState = numberContent));

  const displayContent =
    content === 0 ? (
      <InformasiUmum />
    ) : content === 1 ? (
      <DetailKonsultasi />
    ) : (
      <InstruksiKonsultasi />
    );

  return (
    <HOC title="Konsultasi - Komoditiku">
      <Navs />
      <div className="hero-consul">
        <img src={Herokonsultasi} alt="" className="consul-img" />
      </div>
      <div className="text-consul">
        <h1>Konsultasi</h1>
        <p>
          Kami menawarkan layanan konsultasi untuk membantu bisnis anda, <br />
          anda dapat melakukan konsultasi terkait kendala yang anda alami
        </p>
        <Link href="#" className="btn btn-sm">
          Lihat Selengkapnya
        </Link>
      </div>
      <section className="wrapper__Konsultasi">
        <Container>
          <div className="row">
            <div className="col-6">
              <h1>
                Mulai <b>Kobsultasi</b> Anda Bersama <b>Komoditiku</b> Sekarang!
              </h1>
              <p>
                Anda dapat melakukan konsultasi secara langsung bersama tim{" "}
                <br />
                komoditiku secara online, konsultasi ini bersifat fleksibel bisa{" "}
                <br />
                dilakukan dimanapun anda berada. Lengkapi form dibawah <br />
                ini untuk memulai konsultasi anda bersama komoditiku!
              </p>
              <Link href="#" className="btn btn-sm">
                Mulai Konsultasi
              </Link>
            </div>
            <div className="col-6">
              <img src={Konsulhero} alt="" width="100%" />
            </div>
          </div>
          <div className="form-konsultasi">
            <h1>
              Lengkapi Form Konsultasi Berikut Untuk Memulai <br />
              Konsultasi!
            </h1>
            <div className="row">
              <div className="col-4">
                <BtnKonsultasi
                  imageSrc="/assets/icon1-formkonsultasi.png"
                  alt=""
                  title="Informasi Umum"
                  onClick={() => changeContent(0)}
                />
                <BtnKonsultasi
                  imageSrc="/assets/icon2-formkonsultasi.png"
                  alt=""
                  title="Detail Konsultasi"
                  onClick={() => changeContent(1)}
                />
                <BtnKonsultasi
                  imageSrc="/assets/icon3-formkonsultasi.png"
                  alt=""
                  title="Instruktur Konsultasi"
                  onClick={() => changeContent(2)}
                />
              </div>
              <div className="col-8">
                <div className="wrapper__formkonsultasi">
                  {displayContent}
                  <Link href="#" type="submit" className="btn btn-sm">
                    Kirim
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Sliderfeedback />
      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default Konsultasi;
