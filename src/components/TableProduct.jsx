import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/tableproduct.css";

const TableProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API}/products`
    );
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/products/${id}`);
      getAllProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="table-product">
        <Link to="/addproduct" className="btn btn-success mb-3">
          <i className="bi bi-clipboard-plus me-2"></i>
          Tambah Produk
        </Link>
        <table className="table table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th className="table-success">No</th>
              <th className="table-success">Nama produk</th>
              <th className="table-success">harga</th>
              <th className="table-success">kategori</th>
              <th className="table-success">Persedian</th>
              <th className="table-success">Pelaku UMKM</th>
              <th className="table-success">Asal Produk</th>
              <th className="table-success">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="table-light">{index + 1}</td>
                <td className="table-light">{product.nama_produk}</td>
                <td className="table-light">{product.harga}</td>
                <td className="table-light">{product.kategori}</td>
                <td className="table-light">{product.persediaan}</td>
                <td className="table-light">{product.nama_umkm}</td>
                <td className="table-light">{product.asal_umkm}</td>
                <td className="table-light">
                  <div className="btn-edit">
                    <Link
                      to={`/edit/${product.id}`}
                      className="btn btn-edit me-2"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProduct;
