import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logoheading from "../img/logo-heading.png"
import "./styles/navbar.css";
import { HOME, SERVICE, ABOUT, CONTACT, LOGIN, REGISTER } from "../router";

const Navs = () => {
  return (
    <Navbar className="wrapper-nav fixed-top">
      <Container>     
        <Navbar.Brand href={HOME}><img src={Logoheading} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="wrapper-navbar ms-auto">
            <NavLink className="navbar-link" to={HOME}>Beranda</NavLink>
            <NavLink className="navbar-link" to={SERVICE}>Layanan</NavLink>
            <NavLink className="navbar-link" to={ABOUT}>Tentang Kami</NavLink>
            <NavLink className="navbar-link" to={CONTACT}>Kontak</NavLink>
          </Nav>  
          <Link to={LOGIN} className="btn1-nav me-2">Masuk</Link>
          <Link to={REGISTER} className="btn2-nav">Daftar</Link>  
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navs;