import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Herojoin from "../images/gabung-komoditiku.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/freejoin.css";

const Freejoin = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="wrapper__join">
      <Container>
        <div className="row">
          <div className="col-6" data-aos="fade-right">
            <img src={Herojoin} alt="herojoin" width="100%" />
          </div>
          <div className="col-6" data-aos="fade-up">
            <h1>
              Gabung bersama <b>Komodotiku</b> dan nikmati keuntungannya.
            </h1>
            <p>Mulailah belajar dengan mendaftar secara gratis</p>
            <Link to="#" className="btn btn-sm">
              Mendaftar Gratis
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Freejoin;
