import { Container } from "react-bootstrap";
import Logofooter from "../images/logo-footer.png"
import "./styles/footer.css";

const Footer = () => {
    return (
        <div>
            <div className="wrapper__footer">             
            <Container> 
                <div className="row">
                    <div className="col-4">
                        <div className="tentang-kami">
                            <a href="#"> <img src={Logofooter} alt="" width="55%" className="logo-footer" /></a>  
                            <p>Komoditiku berperan dalam pemberdayaan potensi  komoditas lokal/daerah  serta dapat
                            menciptakan lapangan pekerjaan baik individu maupun kelompok.</p>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>     
                    </div>
                    <div className="col-2">
                        <div className="tautan-cepat">
                            <h5>Tautan Cepat</h5>
                            <a href="#">Beranda</a>
                            <a href="#">Layanan</a>
                            <a href="#">Tentang kami</a>
                            <a href="#">Kontak</a>
                        </div>                       
                    </div>
                    <div className="col-3">
                        <div className="layanan-kami">
                            <h5>Layanan Kami</h5>
                            <a href="#">Pelatihan & Konsultasi</a>
                            <a href="#">Kursus Online</a>
                            <a href="#">Digital Pemasaran</a>
                            <a href="#">Explore Produk</a>
                        </div>            
                    </div>
                    <div className="col-3">
                        <div className="kontak-kami">
                            <h5>Kontak kami</h5>
                            <div className="icon-footer mb-2"><i className="bi bi-telephone me-2"></i>(+62) 811 1001 101</div>
                            <div className="icon-footer mb-2"><i className="bi bi-envelope me-2"></i>cs@komoditiku.com</div>
                            <div className="icon-footer"><i className="bi bi-geo-alt me-2"></i>Jakarta, Indonesia</div>
                        </div>            
                    </div>
                </div>
                <div className="line"></div>
                <div className="wrapper_copyright">Created By <b>Komoditiku Team</b> | All Rights Reserved.</div>
            </Container>
            </div>
        </div>

  );
}

export default Footer;