import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/cardlayanan.css";

const Cardlayanan = () => {
    return (
        <div>   
            <div className="wrapper__layanan">
            <Container>
            <div className="text-layanan text-center">
                <h1>Layanan yang kami Sediakan</h1>
                <p>Apa saja layanan yang disediakan oleh Komoditiku? Simak beberapa<br></br> layanan yang kami sediakan dibawah ini!</p>
            </div>   
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="card__wrapper1 text-center">
                    <img src="/assets/icon-layanan1.png" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Pelatihan & Konsultasi</h5>
                        <p className="text-center container mt-4">Melatih dan membantu anda dalam mencapai target bisnis Anda.</p> 
                        <Link href="#" className="btn btn-sm">Detail</Link>           
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card__wrapper2 text-center">
                    <img src="/assets/icon-layanan2.png" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Kursus Online</h5>
                        <p className="text-center container mt-4">Tempat untuk pelaku UMKM dalam mempelajari penjualan yang tepat dan sasaran.</p> 
                        <Link href="#" className="btn btn-sm">Detail</Link>           
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card__wrapper1 text-center">
                    <img src="/assets/icon-layanan3.png" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Digital Pemasaran</h5>
                        <p className="text-center container mt-4">Menyediakan media seperti website dan desain media promosi.</p> 
                        <Link href="#" className="btn btn-sm">Detail</Link>           
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card__wrapper2 text-center">
                    <img src="/assets/icon-layanan4.png" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Explore Produk</h5>
                        <p className="text-center container mt-4">Menyediakan produk-produk unggulan bidang pertanian dan perikanan dari mitra.</p> 
                        <Link href="#" className="btn btn-sm">Detail</Link>           
                    </div>
                    </div>
                </div>
            </div>
            </Container>   
            </div>  
        </div>

  );
}

export default Cardlayanan;