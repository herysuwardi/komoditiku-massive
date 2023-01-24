import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import ApiProductJadi from "../../components/ApiProductJadi";
import FreeJoin from "../../components/FreeJoin";
import Footer from "../../components/Footer";
import Heroexploreproduk from "../../images/hero-eksplorproduk.png";
import "./styles/produkmentahjadi.css";
import Swal from "sweetalert2";
import { DETAILPRODUK } from "../../router";

const BtnDetailProduk = () => {
  Swal.fire({
    text: "Untuk melihat detail produk, anda harus login telebih dahulu!",
    icon: "warning",
    cancelButtonText: "Kembali",
    confirmButtonText: "Login",
    confirmButtonColor: "#1F8F4A",
    showCancelButton: true,
  });
};

const ProdukJadi = () => {
  return (
    <HOC title="Produk Jadi - Komoditiku">
      <Navs />
      <section className="wrapper__product">
        <Container>
          <div className="row">
            <div className="col-6">
              <div className="text-product">
                <h1>
                  Produk Jadi <b>Komoditiku</b>
                </h1>
                <p>
                  Komoditiku menyediakan berbagai produk berkualitas dari para
                  pelaku UMKM. Pada eksplor produk ini kami menyediakan berbagai
                  produk jadi yang dihasilkan oleh petani-petani terampil dengan
                  kualitas yang terjaga.
                </p>
                <Link href="#" type="button" className="btn btn-sm">
                  Temukan Produk<i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <div className="input-group search-product">
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
      <div className="shape-product">
        <img src="/assets/hero-shape1.png" alt="" className="" />
      </div>
      <section className="wrapper-cardproduk">
        <Container>
          <div className="text-produk text-center">
            <h1>
              Produk Jadi <b>Komoditiku</b>
            </h1>
            <p>
              Temukan produk komoditi yang anda inginkan pada komoditiku, <br />
              kami menyediakan berbagai jenis produk sesuai kebutuhan anda!
            </p>
          </div>
          <ApiProductJadi />
        </Container>
      </section>

      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default ProdukJadi;
