import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/cardlayanan.css";
import { CONSUL, COURSES } from "../router";

const Cardlayanan = () => {
    return (
        <div>   
            <section className="wrapper__layanan">
                <Container>
                <div className="text-layanan text-center">
                    <h1>Layanan yang kami Sediakan</h1>
                    <p>Apa saja layanan yang disediakan oleh Komoditiku? Simak beberapa<br></br> layanan yang kami sediakan dibawah ini!</p>
                </div>   
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="card__wrapper text-center">
                        <img src="/assets/icon-layanan1.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Konsultasi</h5>
                            <p className="text-center container mt-4">Menyediakan sesi konsultasi untuk membantu anda dalam mencapai target bisnis yang ingin dicapai.</p> 
                            <Link to={CONSUL} className="btn btn-sm">Lihat Detail</Link>           
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card__wrapper text-center">
                        <img src="/assets/icon-layanan2.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Kursus Online</h5>
                            <p className="text-center container mt-4">Sebagai tempat para pelaku UMKM dalam mempelajari teknis penjualan yang tepat sasaran.</p> 
                            <Link to={COURSES} className="btn btn-sm">Lihat Detail</Link>           
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card__wrapper text-center">
                        <img src="/assets/icon-layanan3.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Digital Pemasaran</h5>
                            <p className="text-center container mt-4">Sebagai tempat penyedia <br />media mengenai desain media promosi bagi pelaku usaha komoditi.</p> 
                            <Link href="#" className="btn btn-sm">Lihat Detail</Link>           
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card__wrapper text-center">
                        <img src="/assets/icon-layanan4.png" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Explore Produk</h5>
                            <p className="text-center container mt-4">Sebagai wadah bagi pelaku UMKM dalam menyediakan produk mereka untuk dipasarkan.</p> 
                            <Link href="#" className="btn btn-sm">Lihat Detail</Link>           
                        </div>
                        </div>
                    </div>
                </div>
                </Container>   
            </section>  
        </div>

  );
}

export default Cardlayanan;