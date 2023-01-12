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
                Memahami pentingnya riset pasar dalam membangun bisnis
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
                Cara riset market online untuk bisnis
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
                Mengetahui manfaat dari riset pasar
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
                5 hal yang perlu di perhatikan ketika melakukan riset pasar
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
                7 Cara riset pasar yang tepat untuk keputusan bisnis
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
                Mengetahui tips apa saja dalam melakukan riset pasar
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
