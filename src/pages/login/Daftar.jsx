import { Link } from "react-router-dom";
import "./login.css";
import { HOME, LOGIN } from "../../router";

const Daftar = () => {
    return (
        <div className="wrapper__login">               
            <Link to={HOME}><i className="bi bi-box-arrow-left"></i></Link>
            <div className="row">
                <div className="col-5">
                    <img src="/assets/img-daftar.png" alt="..." className="daftar__img" />      
                </div>
                <div className="col-7">
                    <h1>Daftar Akun</h1>
                    <div className="wrapper__box">
                        <div className="form-floating mt-4">
                            <input type="text" className="form-control" id="floatingText" placeholder="text" />
                            <label htmlFor="floatingText">Nama Lengkap</label>
                        </div>
                        <div className="form-floating mt-4">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">E-mail</label>
                        </div>
                        <div className="form-floating mt-4 mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Kata Sandi</label>
                        </div>
                        <p>Lupa Akun? <span><Link href="">Klik Disini!</Link></span></p>
                    </div>   
                <div className="button__daftar text-center">
                    <Link href="#" className="btn">Kirim</Link> 
                </div>
                <div className="noakun text-center mt-3">
                    <p>Belum punya akun? <span><Link to={LOGIN}>Masuk</Link></span></p>
                </div>
                </div>
            </div>    
        </div>
  );
}

export default Daftar;