import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/detailvideoartikel.css";

const DetailVideoartikel = () => {
  return (
    <div>
      <Navs />
      <section className="wrapper__detailvideoartikel">
        <Container>
          <div className="row">
            <div className="col-8">
              <Link to="#">
                <img
                  src="/assets/detail-videoartikel.png"
                  width="100%"
                  alt=""
                />
              </Link>
              <div className="title-detailkursus">
                <h4>Tradisional Vs Digital Marketing</h4>
              </div>
              <div className="profile-detailartikel">
                <div className="row">
                  <div className="col-1">
                    <img
                      src="/assets/profile-artikel1.png"
                      alt=""
                      width="180%"
                    />
                  </div>
                  <div className="col-4 ms-3 mt-2">
                    <h5>Sonya Andini</h5>
                    <p>9 November 2022</p>
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
                <p>
                  Ketika menghadapi pilihan untuk melakukan pemasaran produk,
                  tentunya kamu mencari medium terbaik agar teknik yang
                  dilakukan dapat mengenai sasaran dengan tepat. Mulai dari
                  pemasangan iklan di billboard, koran, radio, dan TV kerap
                  dilakukan demi mencapai target sebanyak-banyaknya.
                </p>
                <p>
                  Namun, kini muncul istilah digital marketing atau “pemasaran
                  digital” sehingga teknik marketing yang tidak dilakukan secara
                  online dijuluki sebagai traditional marketing. Berikut ini
                  adalah perbedaan keduanya.
                </p>
                <br />
                <h4>Digital Marketing</h4>
                <p>
                  Digital marketing atau pemasaran digital merupakan suatu usaha
                  memasarkan produk melalui jaringan internet (online). Seiring
                  berkembangnya teknologi, kini semakin banyak perusahaan yang
                  menggunakan digital marketing sebagai strategi yang digunakan
                  untuk memasarkan produk mereka. Beberapa contoh medium yang
                  termasuk dalam teknik digital marketing adalah website, media
                  sosial, online advertising, dan email marketing.
                </p>
                <p>
                  Kelebihan pemasaran produk melalui digital marketing lebih
                  personal karena iklan atau pesan yang dipasarkan langsung
                  mengenai target sasaran yang sudah ditentukan, yaitu para
                  pengguna internet. Selain itu, pemasar bisa lebih mudah
                  menghitung seberapa akurat media yang digunakan dalam
                  memasarkan produk. Kelebihan lainnya, digital marketing
                  menawarkan biaya yang lebih terjangkau, contohnya adalah
                  Facebook yang menawarkan CPM (Cost Per Thousand Impressions)
                  termurah pada keseluruhan iklan.
                </p>
                <br />
                <h4>Tradisional Marketing</h4>
                <p>
                  Sama seperti namanya, teknik marketing ini menggunakan
                  cara-cara “tradisional” yang biasanya menggunakan media cetak
                  seperti billboard, banner, flyer, atau koran. Seiring
                  perkembangan zaman, traditional marketing mulai merambah ke
                  dunia elektronik, seperti radio dan TV. Meskipun disebut
                  tradisional, namun traditional marketing tidak selalu
                  menggunakan cara yang bertele-tele dan tidak efektif.
                </p>
                <p>
                  Traditional marketing, tentu saja tetap mempunyai beberapa
                  kelebihan, di antaranya yaitu cakupan target yang luas dan
                  mudah dipahami audiens, tidak seperti digital marketing yang
                  kadang membingungkan para pengguna baru di internet karena
                  seringkali muncul dalam bentuk pop-up.
                </p>
                <p>
                  Selain itu, jika dilakukan dengan tepat melalui cara yang
                  kreatif, dampak yang ditimbulkan bisa lebih menarik daripada
                  digital marketing. Beberapa contohnya adalah billboard NüTea
                  (Jakarta, Indonesia) dan billboard digital di Piccadilly,
                  London, yang mengiklankan British Airways.
                </p>
                <p>
                  Namun, ada beberapa kekurangan traditional marketing yang
                  membuat digital marketing menjadi lebih unggul, yaitu target
                  sasaran yang tidak dapat dituju secara personal, sebab iklan
                  yang ditampilkan dapat dilihat oleh semua orang, seperti
                  billboard atau koran.
                </p>
                <p>
                  Lalu ketidakmampuan untuk melakukan interaksi langsung dengan
                  target audiens juga menjadi kendala, karena tidak seperti
                  digital marketing yang bisa menghadirkan chatbot di website
                  atau admin yang mengurus akun media sosial, iklan yang
                  ditayangkan di media cetak maupun elektronik hanya
                  menyampaikan pesan searah yang tidak dapat direspon langsung
                  oleh audiens.
                </p>
                <p>
                  Ditambah lagi, biaya yang dikeluarkan juga mungkin jauh lebih
                  tinggi ketimbang digital marketing, terlebih jika harus
                  mencetak flyer, billboard, dan banner, atau memasang iklan di
                  media massa.
                </p>
                <br />
                <h4>Kesimpulan</h4>
                <p>
                  Baik digital marketing dan traditional marketing mempunyai
                  kelebihan dan kekurangan masing-masing, tergantung apa yang
                  kamu butuhkan. Jika kamu ingin melakukan pemasaran yang dapat
                  berinteraksi langsung dengan audiens atau calon konsumen,
                  gunakan teknik digital marketing, website dan media sosial
                  adalah dua medium yang disarankan.
                </p>
                <p>
                  Tips tambahan, kamu juga bisa menambahkan chatbot dalam
                  website agar para pengunjung bisa segera menyampaikan
                  pertanyaan yang berkenaan dengan website atau produkmu. Tapi
                  ingat lho ya, pastikan website-mu handal dan tidak eror saat
                  mendapat banyak kunjungan sekaligus, gunakan hosting murah
                  berkualitas yang sudah terjamin kecepatan dan keamanannya.
                </p>
                <p>
                  Nah, jika target pasarmu adalah orang-orang yang tidak
                  berhubungan langsung dengan internet dan media sosial,
                  traditional marketing adalah pilihan yang tepat. Luasnya
                  cakupan wilayah dan kemudahan untuk mengakses informasi yang
                  disampaikan menjadi alasan mengapa kamu harus memilih teknik
                  ini. Jangan lupa gunakan bahasa dan cara penyampaian sederhana
                  agar informasi yang disampaikan dapat dicerna dengan baik oleh
                  audiens. Terakhir, pertimbangkan setiap faktor yang
                  memungkinkan untuk menentukan teknik marketing yang akan kamu
                  pilih.
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
                <Link to="#" type="button" className="btn btn-sm">
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
                    <img src="./assets/kursusonline/kursus-online-card9.png" />
                    <h5 className="container mt-4 mb-3">
                      Strategi Perencanaan Branding Produk
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
                    <img src="./assets/kursusonline/kursus-online-card14.png" />
                    <h5 className="container mt-4 mb-3">
                      Strategi Pemasaran Produksi 4P Marketing
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
                    <img src="./assets/kursusonline/kursus-online-card23.png" />
                    <h5 className="container mt-4 mb-3">
                      Membangun Strategi Pemasaran 4P Pada Promosi
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

export default DetailVideoartikel;
