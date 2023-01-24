import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navs from "./Navbar";
import Footer from "./Footer";
import "./styles/tableproduct.css";

const AddProduct = () => {
  const [nama_produk, setNamaProduk] = useState("");
  const [jumlah_ulasan, setJumlahUlasan] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [persediaan, setPersediaan] = useState("");
  const [nama_umkm, setPelakuUmkm] = useState("");
  const [asal_umkm, setAsalProduk] = useState("");
  const [foto_produk, setFotoProduk] = useState("");
  const navigate = useNavigate();

  const createCardProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API}/products`, {
        nama_produk,
        jumlah_ulasan,
        harga,
        kategori,
        persediaan,
        nama_umkm,
        asal_umkm,
        foto_produk,
      });
      navigate("/detailprodukmentah");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navs />
      <div className="columns text-center">
        <div className="column">
          <form onSubmit={createCardProduct}>
            <h2>Form Tambah Produk</h2>
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
            <div className="field mt-4">
              <label className="col-form-label d-flex">Jumlah Ulasan</label>
              <input
                type="text"
                className="form-control"
                value={jumlah_ulasan}
                onChange={(e) => setJumlahUlasan(e.target.value)}
                placeholder="Jumlah Ulasan"
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
                value={nama_umkm}
                onChange={(e) => setPelakuUmkm(e.target.value)}
                placeholder="pelaku UMKM"
              />
            </div>
            <div className="field mt-2">
              <label className="col-form-label d-flex">Asal Produk</label>
              <input
                type="text"
                className="form-control"
                value={asal_umkm}
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
            <div className="btn-add mt-2">
              <button type="submit" className="btn btn-success mt-4">
                Tambah Produk
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
