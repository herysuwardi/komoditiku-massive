import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import Footer from "../components/Footer";
import Heroabout from "../img/hero-kontak.png"
import "./styles/contact.css";

const Contact = () => {
    return (
        <div>
            <Navs />  
            <div className="hero-contact">
                <img src={Heroabout} alt="" className="contact-img" />
            </div> 
            <div className="text-about">
                <h1>Profil <b>Komoditiku</b></h1>
            </div> 

            <Footer />
        </div>

    );
}

export default Contact;