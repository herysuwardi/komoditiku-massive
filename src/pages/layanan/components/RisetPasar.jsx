import { Link } from "react-router-dom";
import { COURSES, DETAILKURSUS } from "../../../router";

const RisetPasar = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card12.png" />
              <h5 className="mt-4 mb-3">
                Strategi Perencanaan Produksi Pertanian
              </h5>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill me-2"></i>(20)
              </p>
              <hr />
            </div>
            <div className="card-pricing ms-4">
              <h5>Rp20.000</h5>
              <Link to={COURSES} type="button" className="btn btn-sm">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card13.png" />
              <h5 className="container mt-4 mb-3">
                Manajemen Pemasaran Industri Perikanan
              </h5>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill me-2"></i>(20)
              </p>
              <hr />
            </div>
            <div className="card-pricing ms-4">
              <h5>Rp20.000</h5>
              <Link to={DETAILKURSUS} type="button" className="btn btn-sm">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card14.png" />
              <h5 className="container mt-4 mb-3">
                Manajemen Pemasaran Industri Perikanan
              </h5>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill me-2"></i>(20)
              </p>
              <hr />
            </div>
            <div className="card-pricing ms-4">
              <h5>Rp20.000</h5>
              <Link to={DETAILKURSUS} type="button" className="btn btn-sm">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card15.png" />
              <h5 className="mt-4 mb-3">
                Strategi Perencanaan Produksi Pertanian
              </h5>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill me-2"></i>(20)
              </p>
              <hr />
            </div>
            <div className="card-pricing ms-4">
              <h5>Rp20.000</h5>
              <Link to={COURSES} type="button" className="btn btn-sm">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card16.png" />
              <h5 className="container mt-4 mb-3">
                Manajemen Pemasaran Industri Perikanan
              </h5>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill me-2"></i>(20)
              </p>
              <hr />
            </div>
            <div className="card-pricing ms-4">
              <h5>Rp20.000</h5>
              <Link to={DETAILKURSUS} type="button" className="btn btn-sm">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card17.png" />
              <h5 className="container mt-4 mb-3">
                Manajemen Pemasaran Industri Perikanan
              </h5>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill me-2"></i>(20)
              </p>
              <hr />
            </div>
            <div className="card-pricing ms-4">
              <h5>Rp20.000</h5>
              <Link to={DETAILKURSUS} type="button" className="btn btn-sm">
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RisetPasar;
