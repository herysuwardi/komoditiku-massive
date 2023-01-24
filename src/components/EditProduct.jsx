import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Navs from "./Navbar";
import Footer from "./Footer";
import "./styles/tableproduct.css";

const EditProduct = () => {
  const [nama_produk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [persediaan, setPersediaan] = useState("");
  const [pelaku_umkm, setPelakuUmkm] = useState("");
  const [asal_produk, setAsalProduk] = useState("");
  const [foto_produk, setFotoProduk] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_API}/products/${id}`, {
        nama_produk,
        harga,
        kategori,
        persediaan,
        pelaku_umkm,
        asal_produk,
        foto_produk,
      });
      navigate("/detailprodukmentah");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async () => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API}/products/${id}`
    );
    setNamaProduk(response.data.nama_produk);
    setHarga(response.data.harga);
    setKategori(response.data.kategori);
    setPersediaan(response.data.persediaan);
    setPelakuUmkm(response.data.pelaku_umkm);
    setAsalProduk(response.data.asal_produk);
  };

  return (
    <>
      <Navs />
      <div className="columns text-center">
        <div className="column">
          <form onSubmit={updateProduct}>
            <h2>Form Edit Produk</h2>
            <div className="field mt-4">
              <label className="col-form-label d-flex">Nama Produk</label>
              <input
                type="text"
                className="form-control"
                value={nama_produk}
                onChange={(e) => setNamaProduk(e.target.value)}
                placeholder="Nama Produk"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">Harga</label>
              <input
                type="text"
                className="form-control"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">Kategori</label>
              <input
                type="text"
                className="form-control"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                placeholder="kategori"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">Persediaan</label>
              <input
                type="text"
                className="form-control"
                value={persediaan}
                onChange={(e) => setPersediaan(e.target.value)}
                placeholder="persediaan"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">Pelaku UMKM</label>
              <input
                type="text"
                className="form-control"
                value={pelaku_umkm}
                onChange={(e) => setPelakuUmkm(e.target.value)}
                placeholder="pelaku UMKM"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">Asal Produk</label>
              <input
                type="text"
                className="form-control"
                value={asal_produk}
                onChange={(e) => setAsalProduk(e.target.value)}
                placeholder="asal produk"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">
                Upload Foto Produk
              </label>
              <input
                type="file"
                value={foto_produk}
                onChange={(e) => setFotoProduk(e.target.value)}
              />
            </div>
            <div className="btn-update mt-2">
              <button type="submit" className="btn btn-success mt-4">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
