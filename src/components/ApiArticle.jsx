import React, { useState, useEffect } from "react";
import CardArticle from "./CardArticle";
import axios from "axios";

const ApiArticle = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    getAllArticle();
  }, []);

  const getAllArticle = async () => {
    const { data: response } = await axios.get(
      `${process.env.REACT_APP_API}/article`
    );
    setArticle(response.data);
  };

  return (
    <div className="row">
      {articles.map((article) => (
        <CardArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ApiArticle;
