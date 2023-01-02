import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../components/HOC";
import Navs from "../../components/Navbar";
import Sliderfeedback from "../../components/Sliderfeedback";
import Footer from "../../components/Footer";
import Herokonsultasi from "../../images/hero-konsultasi.png"
import Konsulhero from "../../images/consul-image.png"
import "./styles/konsultasi.css";
import { COURSES, DETAILKURSUS  } from "../../router";

const Konsultasi = () => {
    return (
        <HOC title="Konsultasi - Komoditiku">
            <Navs />
            <div className="hero-consul">
                <img src={Herokonsultasi} alt="" className="consul-img" />
            </div> 
            <div className="text-consul">
                <h1>Konsultasi</h1>
                <p>Kami menawarkan layanan konsultasi untuk membantu bisnis anda, <br />anda dapat melakukan konsultasi terkait kendala yang anda alami</p>
                <Link href="#" className="btn btn-sm">Lihat Selengkapnya</Link> 
            </div>
            <section className="wrapper__Konsultasi">
                <Container>          
                    <div className="row">
                        <div className="col-6">
                            <h1>Mulai <b>Kobsultasi</b> Anda Bersama <b>Komoditiku</b> Sekarang!</h1>
                            <p>Anda dapat melakukan konsultasi secara langsung bersama tim <br />komoditiku secara online, konsultasi ini bersifat fleksibel
                            bisa <br />dilakukan dimanapun anda berada. Lengkapi form dibawah <br />ini untuk memulai konsultasi anda bersama komoditiku!</p>
                            <Link href="#" className="btn btn-sm">Mulai Konsultasi</Link>                      
                        </div>
                        <div className="col-6">
                            <img src={Konsulhero} alt="" width="100%" />
                        </div>
                    </div>
                    <div className="form-konsultasi">
                        <h1>Lengkapi Form Konsultasi Berikut Untuk Memulai <br />Konsultasi!</h1>
                        <div className="row">
                            <div className="col-4">
                                <div className="section-form text-center">
                                    <img src="/assets/icon1-formkonsultasi.png" alt="" width="20%" />
                                    <p>Informasi Umum</p>
                                </div>                              
                                <div className="section-form text-center">
                                    <img src="/assets/icon2-formkonsultasi.png" alt="" width="20%" />
                                    <p>Detail Konsultasi</p>
                                </div>                              
                                <div className="section-form text-center">
                                    <img src="/assets/icon3-formkonsultasi.png" alt="" width="20%" />
                                    <p>Instruktur Konsultasi</p>
                                </div>                              
                            </div>
                            <div className="col-8">
                                <div className="wrapper__formkonsultasi">
                                    <h4>Lengkapi Form Konsultasi</h4>
                                    <p>Lengkapi form berikut ini untuk mendapatkan bantuan dari kami!</p>
                                    <div className="row">
                                        <div className="col mt-2">                           
                                            <input type="text" className="form-control" id="name" placeholder="Nama Lengkap"></input>                      
                                        </div>                    
                                        <div className="col mt-2">   
                                            <input type="email" className="form-control" id="email" placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col mt-4">                           
                                            <input type="text" className="form-control" id="text" placeholder="Nomor Telepon"></input>                      
                                        </div>                    
                                        <div className="col mt-4">   
                                            <input type="text" className="form-control" id="text" placeholder="Nomor Whatshapp"></input>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Alamat Bisnis"></textarea>
                                    </div>
                                    <Link href="#" type="submit" className="btn btn-sm">Kirim</Link> 
                                </div>   
                            </div>
                        </div>  
                    </div>                        
                </Container>
            </section>
            
            <Sliderfeedback />
            <Footer />
        </HOC>

    );
}

export default Konsultasi;