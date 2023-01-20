import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Logoheading from "../images/logo-heading.png";
import "./styles/navbar.css";
import { HOME, SERVICE, ABOUT, CONTACT, LOGIN, REGISTER } from "../router";

const Navs = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem(process.env.REACT_APP_AUTH);
  const splitToken = token.split(" ")[1];
  const { email } = jwtDecode(splitToken);

  const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_AUTH);
    navigate("/masuk", { replace: true });
  };

  const displayButton =
    splitToken !== undefined ? (
      <button
        className="btn btn-profile"
        type="button"
        onClick={() => logout()}
      >
        <b>Hy, Salman Fardinan!</b>
        <i className="bi bi-person-circle ms-2"></i>
        {email}
      </button>
    ) : (
      <>
        <Link to={LOGIN} className="btn1-nav me-2">
          Masuk
        </Link>
        <Link to={REGISTER} className="btn2-nav">
          Daftar
        </Link>
      </>
    );
  return (
    <Navbar className="wrapper-nav fixed-top">
      <Container>
        <Navbar.Brand href={HOME}>
          <img src={Logoheading} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="wrapper-navbar ms-auto">
            <NavLink className="navbar-link" to={HOME}>
              Beranda
            </NavLink>
            <NavLink className="navbar-link" to={SERVICE}>
              Layanan
            </NavLink>
            <NavLink className="navbar-link" to={ABOUT}>
              Tentang Kami
            </NavLink>
            <NavLink className="navbar-link" to={CONTACT}>
              Kontak
            </NavLink>
          </Nav>
          {displayButton}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
