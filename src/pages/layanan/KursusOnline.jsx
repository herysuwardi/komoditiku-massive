import { useState } from "react";
import { Container } from "react-bootstrap";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import ManagementProduksi from "./components/ManagementProduksi";
import BrandingProduct from "./components/BrandingProduct";
import RisetPasar from "./components/RisetPasar";
import FourMarketing from "./components/FourMarketing";
import SliderKursuspopuler from "../../components/SliderKursuspopuler";
import SliderInstruktur from "../../components/SliderInstruktur";
import Sliderfeedback from "../../components/Sliderfeedback";
import FreeJoin from "../../components/FreeJoin";
import Footer from "../../components/Footer";
import Herocourses from "../../images/hero-kursusonline.png";
import "./styles/kursusonline.css";

const BtnKursusonline = ({ title, onClick }) => {
  return (
    <div className="btn-kursusonline" onClick={onClick}>
      {title}
    </div>
  );
};

const KursusOnline = () => {
  const [content, setContent] = useState(0);

  const changeContent = (numberContent) =>
    setContent((prevState) => (prevState = numberContent));

  const displayContent =
    content === 0 ? (
      <ManagementProduksi />
    ) : content === 1 ? (
      <BrandingProduct />
    ) : content === 2 ? (
      <RisetPasar />
    ) : (
      <FourMarketing />
    );

  return (
    <HOC title="Kursus Online - Komoditiku">
      <Navs />
      <section className="wrapper__kursusonline">
        <Container>
          <div className="row">
            <div className="col-5">
              <div className="text-courses">
                <h1>
                  Kursus <b>Online</b>
                </h1>
                <h2>
                  Aksess Ke <b>5000+ </b>Kursus, dari <b>300</b> Insturktur &
                  Partner <b>Komoditiku</b>
                </h2>
                <p>Ikuti dan tambahkan Pengetahuan anda</p>
                <div className="input-group">
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
            <div className="col-7">
              <img
                src={Herocourses}
                alt="herokursus"
                className="hero-courses"
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="shape-courses">
        <img src="/assets/hero-shape1.png" alt="" className="" />
      </div>
      <Container>
        <div className="text-kursus text-center container">
          <h1>
            Topik <b>Kursus Online</b> Komoditiku
          </h1>
          <p>Temukan Kursus yang dapat menunjang pertumbuhan bisnis kamu</p>
          <div className="row d-flex justify-content-center container btn-center">
            <div className="col-3">
              <BtnKursusonline
                title="Management Produksi"
                onClick={() => changeContent(0)}
              />
            </div>
            <div className="col-3">
              <BtnKursusonline
                title="Branding Produk"
                onClick={() => changeContent(1)}
              />
            </div>
            <div className="col-3">
              <BtnKursusonline
                title="Riset Pasar"
                onClick={() => changeContent(2)}
              />
            </div>
            <div className="col-3">
              <BtnKursusonline
                title="4P Marketing"
                onClick={() => changeContent(3)}
              />
            </div>
          </div>
        </div>
        <section className="wrapper-cardkursus">{displayContent}</section>
      </Container>
      <SliderKursuspopuler />
      <SliderInstruktur />
      <Sliderfeedback />
      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default KursusOnline;
