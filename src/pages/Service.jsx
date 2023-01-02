import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../components/HOC";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import Heroservice from "../images/hero-layanan.png"
import "./styles/service.css";
import { CONSUL, COURSES } from "../router";

const Service = () => {
    return (
        <HOC title="Layanan - Komoditiku">
            <Navs />  
            <div className="hero-service">
                <img src={Heroservice} alt="" className="service-img" />
            </div> 
            <div className="text-service">
                <h1>Layanan <b>Komoditiku</b></h1>
                <p>Apa saja layanan yang disediakan oleh Komoditiku? Simak beberapa <br />layanan yang kami sediakan dibawah ini!</p>
                <Link href="#" className="btn btn-sm">Lihat Selengkapnya</Link> 
            </div>
            <section className="wrapper__service">
                <Container>
                    <div className="title-service text-center">
                        <h1>Layanan Yang Kami Sediakan</h1>
                        <p>Apa saja layanan yang disediakan oleh Komoditiku? Simak beberapa <br />layanan yang kami sediakan dibawah ini!</p>
                    </div>                  
                    <div className="card-service">
                        <div className="row">
                            <div className="col-4">
                                <img src="/assets/card-layanan1.png" alt="" />
                            </div>
                            <div className="col-7">
                                <h5>Konsultasi</h5>
                                <p>Komoditiku menyediakan sesi konsultasi untuk membantu anda dalam mencapai target bisnis. 
                                    Pada layanan ini anda dapat melakukan konsultasi permasalahan bisnis anda sesuai dengan kebutuhan anda</p>
                                <Link to={CONSUL} type="button" className="btn btn-sm">Lihat Selengkapnya</Link>
                            </div>
                        </div>    
                    </div>
                    <div className="card-service">
                        <div className="row">
                            <div className="col-4">
                                <img src="/assets/card-layanan2.png" alt="" />
                            </div>
                            <div className="col-7">
                                <h5>Kursus Online</h5>
                                <p>Komoditiku menyediakan sesi konsultasi untuk membantu anda dalam mencapai target bisnis. 
                                    Pada layanan ini anda dapat melakukan konsultasi permasalahan bisnis anda sesuai dengan kebutuhan anda</p>
                                <Link to={COURSES} type="button" className="btn btn-sm">Lihat Selengkapnya</Link>
                            </div>
                        </div>    
                    </div>
                    <div className="card-service">
                        <div className="row">
                            <div className="col-4">
                                <img src="/assets/card-layanan3.png" alt="" />
                            </div>
                            <div className="col-7">
                                <h5>Digital Pemasaran</h5>
                                <p>Komoditiku menyediakan sesi konsultasi untuk membantu anda dalam mencapai target bisnis. 
                                    Pada layanan ini anda dapat melakukan konsultasi permasalahan bisnis anda sesuai dengan kebutuhan anda</p>
                                <Link to="#" type="button" className="btn btn-sm">Lihat Selengkapnya</Link>
                            </div>
                        </div>    
                    </div>
                    <div className="card-service">
                        <div className="row">
                            <div className="col-4">
                                <img src="/assets/card-layanan4.png" alt="" />
                            </div>
                            <div className="col-7">
                                <h5>Explore Produk</h5>
                                <p>Komoditiku menyediakan sesi konsultasi untuk membantu anda dalam mencapai target bisnis. 
                                    Pada layanan ini anda dapat melakukan konsultasi permasalahan bisnis anda sesuai dengan kebutuhan anda</p>
                                <Link to="#" type="button" className="btn btn-sm">Lihat Selengkapnya</Link>
                            </div>
                        </div>    
                    </div>
                </Container>
            </section>
            <Footer />
        </HOC>

    );
}

export default Service;