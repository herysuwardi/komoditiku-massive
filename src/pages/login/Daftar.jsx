import HOC from "../../components/HOC";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Bglogin from "../../images/bg-login.png";
import Logologin from "../../images/logo-footer.png";
import "./login.css";
import { HOME, LOGIN } from "../../router";

const Daftar = () => {
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/user-register`,
        value
      );
      Swal.fire("Daftar Berhasil!", "Silakan login untuk masuk!", "success");
      navigate("/masuk");
    } catch (error) {
      Swal.fire("Daftar Gagal!", "Pengguna sudah ada!", "error");
    }
  };
  return (
    <HOC title="Daftar - Komoditiku">
      <div className="wrapper__login">
        <div className="back-login">
          <Link to={HOME}>
            <i className="bi bi-x"></i>
          </Link>
        </div>
        <img src={Bglogin} alt="" className="bg-login" width="100%" />
        <div className="row">
          <div className="col-5">
            <div className="text-login">
              <img src={Logologin} alt="" />
              <h5>
                Mengembangkan, Membangun UMKM dengan <br />
                Inovasi dan Teknologi
              </h5>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-7">
            <div className="form-logindaftar">
              <h1>Silakan Daftar</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="formlogin-box">
                <div className="form-floating mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingText"
                    placeholder="text"
                    {...register("name", { required: true })}
                  />
                  <label htmlFor="floatingText">Nama Lengkap</label>
                </div>
                <div className="form-floating mt-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("email", { required: true })}
                  />
                  <label htmlFor="floatingInput">E-mail</label>
                </div>
                <div className="form-floating mt-4 mb-3">
                  <input
                    type={password ? "text" : "password"}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <label htmlFor="floatingPassword">Kata Sandi</label>
                  {password ? (
                    <i
                      className="bi bi-eye password-check"
                      onClick={() => setPassword(!password)}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-eye-slash password-check"
                      onClick={() => setPassword(!password)}
                    ></i>
                  )}
                </div>
                <p>
                  Lupa Akun?{" "}
                  <span>
                    <Link href="">Klik Disini!</Link>
                  </span>
                </p>

                <div className="btn-login text-center">
                  <button className="btn" type="submit">
                    Daftar
                  </button>
                </div>
                <div className="text-auth text-center mt-3">
                  <p>
                    Sudah memiliki akun?{" "}
                    <span>
                      <Link to={LOGIN}>Masuk</Link>
                    </span>
                  </p>
                  <p>
                    Apakah anda pelaku UMKM?{" "}
                    <span>
                      <Link to={LOGIN}>Daftar sebagai pelaku UMKM</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HOC>
  );
};

export default Daftar;
