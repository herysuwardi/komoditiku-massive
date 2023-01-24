import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { DETAILPRODUK } from "../router";

const BtnDetailProduk = () => {
  Swal.fire({
    text: "Untuk melihat detail produk, anda harus login telebih dahulu!",
    icon: "warning",
    cancelButtonText: "Kembali",
    confirmButtonText: "Login",
    confirmButtonColor: "#1F8F4A",
    showCancelButton: true,
  });
};

const CardProductJadi = ({ product }) => {
  return (
    <div className="col-3">
      <div className="card-produk">
        <img
          src={`http://localhost:4000/product/${product.foto_produk}`}
          className="img-header"
          width="100%"
        />
        <div className="label-produk text-center">
          <p>{product.kategori}</p>
        </div>
        <div className="label-harga text-center">
          <p>{product.harga}</p>
        </div>
        <div className="card-produk1 px-4 mt-3">
          <div className="row d-flex justify-content-between">
            <div className="col col-9">
              <h5>{product.nama_produk}</h5>
              <p className="rating">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                {product.jumlah_ulasan == null
                  ? ""
                  : product.jumlah_ulasan == "undefined"
                  ? ""
                  : `(${product.jumlah_ulasan})`}
              </p>
            </div>
            <div className="col col-2 save">
              <Link>
                <i className="bi bi-bookmark text-muted"></i>
              </Link>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row d-flex arrow">
            <div className="col col-2 mt-2 me-2">
              <img
                src={`http://localhost:4000/pelaku_umkm/${product.foto_umkm}`}
              />
            </div>
            <div className="col col-6 mt-2">
              <p>{product.nama_umkm}</p>
              <p className="text-muted">{product.asal_umkm}</p>
            </div>
            <div className="col col-3 mt-2">
              <Link to={DETAILPRODUK} onClick={() => ""()}>
                <i className="bi bi-arrow-up-right-square-fill fs-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductJadi;
