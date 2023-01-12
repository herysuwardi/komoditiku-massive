import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../components/HOC";
import Navs from "../components/Navbar";
import Cardlayanan from "../components/Cardlayanan";
import Slidertim from "../components/Slidertim";
import Footer from "../components/Footer";
import Heroabout from "../images/hero-tentangkami.png";
import Aboutkomoditiku from "../images/tentang-komoditiku.png";
import Iconmisi from "../images/icon-misi.png";
import Iconvisi from "../images/icon-visi.png";
import "./styles/about.css";

const About = () => {
  return (
    <HOC title="Tentang Kami - Komoditiku">
      <Navs />
      <div className="hero-about">
        <img src={Heroabout} alt="" className="about-img" />
      </div>
      <div className="text-about">
        <h1>
          Profil <b>Komoditiku</b>
        </h1>
        <p>
          Kenali Komoditiku lebih dekat, cari tahu apa saja layanan yang kami{" "}
          <br />
          sediakan untuk membantu bisnis anda!
        </p>
        <Link href="#" className="btn btn-sm">
          Lihat Selengkapnya
        </Link>
      </div>
      <section className="wrapper__about">
        <Container>
          <div className="row">
            <div className="col-6">
              <h1>
                Tentang <b>Komoditiku</b>
              </h1>
              <p>
                Komoditiku merupakan sebuah website yang membantu masyarakat,
                khususnya masyarakat lokal, daerah atau pelaku usaha yang
                memliki potensi komoditi yang dapat di eksplor kepada buyer yang
                tentunya lebih bertanggung jawab sehingga barang atau produk
                yang ditawarkan, budgetnya sesuai yang diharapkan.
              </p>
            </div>
            <div className="col-6">
              <img src={Aboutkomoditiku} alt="" />
            </div>
          </div>
        </Container>
      </section>
      <Cardlayanan />

      <section className="visi-misi text-center">
        <div className="container">
          <h1>
            Visi & Misi <b>Komoditiku</b>
          </h1>
          <div className="row">
            <div className="col-5 visi">
              <div className="card-about">
                <img src={Iconvisi} alt="" />
                <h2>Visi</h2>
                <p>
                  Menyediakan berbagai layanan fasilitas dengan solusi secara
                  teknologi untuk bisnis pelaku UMKM yang ada di Indonesia
                  dengan reputasi keunggulan, inovasi dan integritas, serta bisa
                  membantu dalam mewujudkan bisnis impian yang akan dibangun
                  bersama dengan komoditiku.
                </p>
              </div>
            </div>
            <div className="col-5 misi">
              <div className="card-about">
                <img src={Iconmisi} alt="" />
                <h2>Misi</h2>
                <p>
                  Membantu mengedukasikan dan memperdayakan Usaha Kecil dan
                  Menengah (UMKM) dan Pemilik Usaha dalam pemanfaatan teknologi
                  dalam digital secara efektif untuk menghasilkan Keuntungan
                  yang lebih banyak, Meningkatkan Produktivitas, dan Mempercepat
                  Terciptanya Nilai Bisnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slidertim />
      <Footer />
    </HOC>
  );
};

export default About;
