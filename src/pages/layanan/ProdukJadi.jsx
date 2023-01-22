import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
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
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/browniespisang.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Brownies Pisang</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile5.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Laura Monica</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={""} onClick={() => BtnDetailProduk()}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kerupukikan.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Kerupuk Ikan</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile3.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Sonya felin</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={""} onClick={() => BtnDetailProduk()}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kopirobusta.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Kopi Robusta</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile2.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Ferry Tono</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={""} onClick={() => BtnDetailProduk()}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kripikpisang.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Kripik Pisang</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile6.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Anie Lohan</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={""} onClick={() => BtnDetailProduk()}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/kripiksingkong.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Kripik Singkong</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile7.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Beti Hesnia</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/nugetikan.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Nuget Ikan</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile9.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Septi Putri</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/pudding.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Pudding</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile10.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Sonya Ketti</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/salepisang.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Sale Pisang</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile11.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Jepri Hardono</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/sambalbawang.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Sambal Bawang</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile12.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Mutia Juwita</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/susukedelai.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Susu Kedelai</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile13.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Dikta Pramono</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/abon.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Perikanan</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Abon Ikan</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile14.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Erna Julia</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-produk">
                <img
                  src="./assets/exploreproduk/minyakkelapa.png"
                  className="img-header"
                  width="100%"
                />
                <div className="label-produk text-center">
                  <p>Produk Pertanian</p>
                </div>
                <div className="label-harga text-center">
                  <p>Rp10.000/Kg</p>
                </div>
                <div className="card-produk1 px-4 mt-3">
                  <div className="row d-flex justify-content-between">
                    <div className="col col-9">
                      <h5>Minyak Kelapa</h5>
                      <p className="rating">
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>
                        <i className="bi bi-star-fill me-1"></i>(87)
                      </p>
                    </div>
                    <div className="col col-2 save">
                      <Link>
                        <i className="bi bi-bookmark text-muted"></i>
                      </Link>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="container">
                  <div className="row d-flex arrow">
                    <div className="col col-2 mt-2 me-2">
                      <img src="./assets/exploreproduk/profile13.png" />
                    </div>
                    <div className="col col-6 mt-2">
                      <p>Vincent Lee</p>
                      <p className="text-muted">Kab. Sleman</p>
                    </div>
                    <div className="col col-3 mt-2">
                      <Link to={DETAILPRODUK}>
                        <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FreeJoin />
      <Footer />
    </HOC>
  );
};

export default ProdukJadi;
