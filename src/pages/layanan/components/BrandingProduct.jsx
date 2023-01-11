import { Link } from "react-router-dom";
import { COURSES, DETAILKURSUS } from "../../../router";

const BrandingProduct = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card6.png" />
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
              <img src="./assets/kursusonline/kursus-online-card7.png" />
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
              <img src="./assets/kursusonline/kursus-online-card8.png" />
              <h5 className="container mt-4 mb-3">
                Perencanaan dan Sistem Produksi Pertanian
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
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card-courses">
            <div className="card-title container text-center">
              <img src="./assets/kursusonline/kursus-online-card9.png" />
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
              <img src="./assets/kursusonline/kursus-online-card10.png" />
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
              <img src="./assets/kursusonline/kursus-online-card11.png" />
              <h5 className="container mt-4 mb-3">
                Perencanaan dan Sistem Produksi Pertanian
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
      </div>
    </>
  );
};

export default BrandingProduct;
