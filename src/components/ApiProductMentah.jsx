import React, { useState, useEffect } from "react";
import CardProductMentah from "./CardProductMentah";
import axios from "axios";

const ApiProductMentah = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API}/products-mentah`
    );
    setProduct(response.data);
  };

  return (
    <div className="row">
      {products.map((product, key) => (
        <CardProductMentah key={key} product={product} />
      ))}
    </div>
  );
};

export default ApiProductMentah;
