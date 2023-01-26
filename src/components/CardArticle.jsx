import React from "react";
import { Link } from "react-router-dom";
import { DETAILARTIKEL } from "../router";

const CardArticle = ({ article }) => {
  return (
    <div className="col-3">
      <div className="card-artikel">
        <div className="card-titleartikel">
          <img
            src={`http://localhost:4000/article/${article.foto_artikel}`}
            alt="foto-artikel"
            width="100%"
          />
          <div className="container">
            <h5>{article.judul_artikel}</h5>
          </div>
          <hr />
          <div className="row mt-2">
            <div className="col-2">
              <img
                src={`http://localhost:4000/article/${article.foto_penulis}`}
                alt="foto-penulis"
                width="50"
                height="50"
                className="ms-2"
              />
            </div>
            <div className="col-6 mt-2">
              <h6>
                <b>{article.penulis}</b>
                <br />
                {article.tanggal_publikasi}
              </h6>
            </div>
            <div className="col-4 mt-3">
              <a href="">
                <i className="bi bi-share me-3"></i>
              </a>
              <a href="">
                <i className="bi bi-bookmark"></i>
              </a>
            </div>
          </div>
          <div className="btn-artikel text-center">
            <Link to={DETAILARTIKEL} className="btn btn-sm">
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
