import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import axios from "axios";

const Product = () => {
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

  return (
    <div className="row">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
