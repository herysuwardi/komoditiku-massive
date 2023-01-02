import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../components/HOC";
import Navs from "../components/Navbar";
import Cardlayanan from "../components/Cardlayanan";
import Footer from "../components/Footer";
import Heroberanda from "../images/hero-image.png"
import Benefit from "../images/benefit-image.png"
import Comment from "../images/comment-image.png"
import Heroshape1 from "../images/hero-shape1.png"
import Heroshape2 from "../images/hero-shape2.png"
import "./styles/home.css";

const Home = () => {
    return (
        <HOC title="Komoditiku"> 
            <Navs />  
            <div className="wrapper__hero">
                <img src={Heroberanda} alt="" className="hero__img" />
            </div>         
            <Container>
                <div className="wrapper-tagline">
                    <h1>Bergabung Bersama <b>Komoditiku</b>,<br></br><b>Solusi</b> Tepat Untuk Bisnis Anda</h1>
                    <p>Temukan solusi bagaimana cara mengeksplor potensi komoditas pada <br></br>masyarakat lokal ataupun 
                    daerah dengan berbagai macam kegiatan, <br></br>keterampilan dan pengerjaan pada potensi komoditas yang ada.</p>   
                    <div className="btn-herohome">
                        <Link className="btn" href="#">Temukan Solusimu <i className="bi bi-arrow-right"></i></Link>
                    </div>      
                </div> 
            </Container>
                <div className="hero-shape1">
                    <img src={Heroshape1} alt="" className="hero-shape" />
                </div>  
            <Cardlayanan />

            <section className="wrapper__mitra">
                <Container>
                <div className="row">
                    <div className="col-5">
                        <div className="text-mitra">
                            <h1>Mitra <b>Komoditiku</b> Digital</h1>
                            <p>Komoditiku bekerjasama dengan beberapa mitra untuk membantu pihak UMKM dalam mengeksplor
                                produk yang dihasilkan.</p>
                            <Link href="#" className="btn btn-sm">Detail</Link>
                        </div>      
                    </div>
                    <div className="col-3 mitra-icon">           
                        <img src="/assets/mitra-1.png" alt="" className="mb-4" />
                        <img src="/assets/mitra-3.png" alt="" className="mb-4" />        
                        <img src="/assets/mitra-5.png" alt="" />        
                    </div>
                    <div className="col-3 ms-2">           
                        <img src="/assets/mitra-2.png" alt="" className="mb-4" />
                        <img src="/assets/mitra-4.png" alt="" className="mb-4" />        
                        <img src="/assets/mitra-6.png" alt="" />        
                    </div>   
                </div>
                </Container>               
            </section>

            <section className="wrapper__kelebihan">
                <Container>
                <div className="text-kelebihan text-center">
                    <h1>Apa Kelebihan <b>Komoditiku?</b></h1>
                    <p>Apa saja kelebihan Komoditiku? Simak beberapa kelebihan yang <br></br>dimiliki oleh komoditiku dibawah ini!</p>
                </div>
                <div className="row">
                    <div className="col-5">
                        <img src={Benefit} alt="" width="100%" className="kelebihan-img" />
                    </div>

                    <div className="col-6">
                    <div className="row">
                        <div className="card-kelebihan">
                            <div className="col d-flex flex-row align-items-center">
                            <img src="/assets/icon-kelebihan1.png" className="me-3" alt="" />
                            <div className="text-card">
                                <h5 className="mt-3">Membantu Perkembangan Ekonomi</h5>
                                <p>Komoditiku membantu masyarakat lokal atau daerah untuk memahami pentingnya eksplor
                                    potensi komoditi yang dimiliki, sehingga dapat meningkatkan perkembangan ekonomi.</p>
                                </div>
                            </div>
                        </div>      
                    </div>
                    <div className="row">
                        <div className="card-kelebihan">
                            <div className="col d-flex flex-row align-items-center">
                                <img src="/assets/icon-kelebihan2.png" className="me-3" alt="" />
                                <div className="">
                                    <h5 className="mt-3">Menentukan buyer yang Bertanggung Jawab</h5>
                                    <p>Komoditiku membantu para pelaku penghasil komoditi untuk dapat menentukan buyer yang
                                        bertanggung jawab, sehingga penyaluran produk dapat berjalan lancar.</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="card-kelebihan">
                            <div className="col d-flex flex-row align-items-center">
                                <img src="/assets/icon-kelebihan3.png" className="me-3" alt="" />
                                <div className="">
                                    <h5 className="mt-3">Menciptakan Lapangan Pekerjaan</h5>
                                    <p>Komoditiku membantu para pelaku komoditi untuk menciptakan lapangan pekerjaan dengan
                                        potensi komoditi yang mereka miliki, sehingga dapat membantu orang lain yang membutuhkan
                                        pekerjaan.</p>
                                </div>
                            </div>
                        </div>       
                    </div>
                </div>
                </div>
                </Container>                
            </section>

            <div className="hero-shape1">
                <img src={Heroshape2} alt="" className="hero-shape" />
            </div>
            <section className="wrapper__comment">
                <Container>
                    <div className="row">
                        <div className="col-6">
                            <h1>Ada Komentar, Kritik, dan Saran Tentang <b>Komoditiku</b>?</h1>
                            <p>Masukkan komentar, kritik, ataupun saran anda tentang komoditiku <br></br>dibawah ini!</p>
                            <Form>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="email" placeholder="nama" />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="email" placeholder="profesi" />
                                    </Form.Group>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" placeholder="isi komentar, kritik atau saran" rows={3} />
                                </Form.Group>
                            </Form>
                            <div className="btn-comment">
                            <Link href="#" className="btn btn-sm">Kirim</Link> 
                            </div>       
                        </div>
                        <div className="col-6">
                            <img src={Comment} alt="..." className="ms-5" />      
                        </div>
                    </div>
                </Container>
            </section> 
            <Footer />   
        </HOC>

  );
}

export default Home;