import React, { useState, useEffect } from "react";
import CardProductJadi from "./CardProductJadi";
import axios from "axios";

const ApiProductJadi = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API}/products-jadi`
    );
    setProduct(response.data);
  };

  return (
    <div className="row">
      {products.map((product, key) => (
        <CardProductJadi key={key} product={product} />
      ))}
    </div>
  );
};

export default ApiProductJadi;
