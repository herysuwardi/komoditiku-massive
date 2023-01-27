import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderfeedback.css";

const Sliderfeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <section className="wrapper__feedback">
        <Container>
          <div className="text-feedback">
            <h1>
              <b>Feedback</b> Kursus
            </h1>
          </div>
          <Slider href={(slider) => (this.slider = slider)} {...settings}>
            <div className="row">
              <div className="col">
                <div className="card-feedback container">
                  <div className="row mb-3 container">
                    <div className="col-2">
                      <img
                        src="/assets/profil-feedback-kursus1.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 mt-2">
                      <h5>Johana Jane</h5>
                      <p>UI-UX Designer</p>
                    </div>
                    <div className="col-5">
                      <img
                        src="/assets/icon-quote.png"
                        className="icon-quote"
                      />
                    </div>
                  </div>
                  <div className="deskripsi-feedback container">
                    <p>
                      "Terus terang satu-satunya keraguan saya adalah apakah ini
                      akan menjadi kelas yang membosankan, dan apakah itu
                      sepadan dengan investasi yang telah saya bayarkan.
                    </p>
                    <p>
                      Kenyataannya kelas tersebut tidak membosankan sama sekali,
                      dan juga mentor memberikan materi mudah dipahami."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-feedback container">
                  <div className="row mb-3 container">
                    <div className="col-2">
                      <img
                        src="/assets/profil-feedback-kursus2.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 mt-2">
                      <h5>Ajax Petropolus</h5>
                      <p>Developer</p>
                    </div>
                    <div className="col-5">
                      <img
                        src="/assets/icon-quote.png"
                        className="icon-quote"
                      />
                    </div>
                  </div>
                  <div className="deskripsi-feedback container">
                    <p>
                      "Bergabung dengan Komoditiku membuat jalur perpindahan
                      karir saya ke pemasaran digital menjadi lebih jelas, dan
                      lebih mudah. Ini sangat membantu dalam membranding usaha
                      saya nantinya.
                    </p>
                    <p>
                      Saya merasa lebih percaya diri menampilkan diri di
                      LinkedIn dan di mana pun, instrukturnya juga profesional."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-feedback container">
                  <div className="row mb-3 container">
                    <div className="col-2">
                      <img
                        src="/assets/profil-feedback-kursus3.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 mt-2">
                      <h5>Eugene Otinger</h5>
                      <p>Project Manajemen</p>
                    </div>
                    <div className="col-5">
                      <img
                        src="/assets/icon-quote.png"
                        className="icon-quote"
                      />
                    </div>
                  </div>
                  <div className="deskripsi-feedback container">
                    <p>
                      "Selama mengikuti sesi konsultasi bersama komoditiku, saya
                      menjadi lebih mengetahui banyak hal mengenai solusi dalam
                      mengembangkan bisnis yang sedang saya jalani saat ini.
                    </p>
                    <p>
                      Saya dapat mengatasi dan meminimalisir dampak dari
                      permasalahan yang terjadi."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card-feedback container">
                  <div className="row mb-3 container">
                    <div className="col-2">
                      <img
                        src="/assets/profil-feedback-kursus4.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-5 mt-2">
                      <h5>Yoko Tanaka</h5>
                      <p>Manajemen Bisnis</p>
                    </div>
                    <div className="col-5">
                      <img
                        src="/assets/icon-quote.png"
                        className="icon-quote"
                      />
                    </div>
                  </div>
                  <div className="deskripsi-feedback container">
                    <p>
                      "Saya sangat bahagia dan juga senang penjualan kentang
                      saya mengalami kemajuan dan peningkatan dengan penjualan
                      saya sebelum mengenal komoditiku.
                    </p>
                    <p>
                      Berkat berkonsultasi dengan tim komoditiku saya jadi bisa
                      mengeksplor komoditi yang saya miliki."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </div>
  );
};

export default Sliderfeedback;
