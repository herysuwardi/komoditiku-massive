import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../components/HOC";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import Heroabout from "../images/hero-kontak.png";
import "./styles/contact.css";

const Contact = () => {
  return (
    <HOC title="Kontak - Komoditiku">
      <Navs />
      <div className="hero-contact">
        <img src={Heroabout} alt="" className="contact-img" />
      </div>
      <div className="text-contact">
        <h1>
          Kontak <b>Komoditiku</b>
        </h1>
        <p>
          Hubungi kami jika ada pertanyaan terkait komoditiku melalui <br />
          kontak kami dibawah ini
        </p>
        <Link href="#" className="btn btn-sm">
          Lihat Selengkapnya
        </Link>
      </div>
      <section className="wrapper__contact">
        <Container>
          <div className="row">
            <div className="col-5">
              <div className="kontak">
                <h3 className="mb-3">Kontak Kami</h3>
                <p>
                  Anda perlu bantuan? Berikut ini alamat yang bisa anda kunjungi
                  serta kontak yang bisa anda hubungi
                </p>
              </div>
              <hr></hr>
              <div className="alamat">
                <h4>Alamat</h4>
                <p>
                  <i className="bi bi-geo-alt me-2"></i>Jl. Dukuh V Blok Haji
                  Sairi No.21, RT.8/RW.2,
                </p>
                <p className="ms-4 lh-1">
                  Dukuh, Kec. Kramat jati, Kota Jakarta Timur,{" "}
                </p>
                <p className="ms-4 lh-1">Daerah Khusus Ibukota Jakarta 13550</p>
              </div>
              <div className="telepon">
                <h4 className="mt-4">Telepon</h4>
                <p>
                  <i className="bi bi-telephone me-2"></i>(+62) 811 1001 101
                </p>
                <p className="ms-4 lh-1">(+62) 823 456 789</p>
              </div>
              <div className="bantuan">
                <h4 className="mt-4">Bantuan</h4>
                <p>
                  <i className="bi bi-envelope me-2"></i>cs@komoditiku.com
                </p>
                <p className="ms-4 lh-1">help_komoditiku@support.com</p>
              </div>
              <div className="ikuti-kami">
                <h4 className="mt-4 mb-3">Ikuti Kami</h4>
                <a href="">
                  <i className="bi bi-facebook "></i>
                </a>
                <a href="">
                  <i className="bi bi-twitter ms-4"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram ms-4"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin ms-4"></i>
                </a>
              </div>
            </div>

            <div className="col-7">
              <div className="wrapper__formkontak">
                <h4>Kirim Pesan</h4>
                <p>
                  Lengkapi form berikut ini untuk mendapatkan bantuan dari kami!
                </p>
                <div className="row">
                  <div className="col mt-2">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nama Lengkap"
                    ></input>
                  </div>
                  <div className="col mt-2">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subjek"
                  ></input>
                </div>
                <div className="mt-4">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Apa yang bisa kami bantu?"
                  ></textarea>
                </div>
                <Link href="#" type="submit" className="btn btn-sm">
                  Kirim
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div className="text-center mt-5">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16895.57409219322!
                    2d106.87338904066482!3d-6.290792717411873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                    1s0x2e69f29c898a114b%3A0xbdc38eee360b6262!2sJasa%20Marga!5e0!3m2!1sen!2sid!4v1671957796762!5m2!1sen!2sid"
            width="1110"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <Footer />
    </HOC>
  );
};

export default Contact;
