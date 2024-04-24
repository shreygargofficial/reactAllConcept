import React, { FunctionComponent, useState } from "react";
import { Product } from "./FunctionTest";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const Card: FunctionComponent<Props> = ({ product }) => {
  const [moreStatus, setMoreStatus] = useState(false as boolean);

  const handleMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMoreStatus((status) => !status);
  };

  return (
    <article className="card-flex-item">
      <div className="card">
        <Link to={`/function/products/${product.id}`}>
          {product.images && <img src={product.images[0]} className="card-img" />}
        </Link>
        <header className="card-header">{product.title}</header>
        <section className="card-body">
          <div className="card-tag-list">
            <div className="card-tag">{product.brand}</div>
            <div className="card-tag">{product.category}</div>
            <div className="card-tag">{product.stock}</div>
          </div>
          {moreStatus && (
            <div className="card-description">{product.description}</div>
          )}
          <footer className="card-footer">
            <div className="card-tag-list">
              <del className="card-del">
                {Math.round(
                  (product.price * 100) / (100 - product.discountPercentage)
                )}
                $
              </del>
              <div className="card-price">{product.price}$</div>
              <div className="card-discount">{product.discountPercentage}%</div>
            </div>
            <center>
              <button
                style={{ marginTop: "20px" }}
                onClick={(e) => handleMore(e)}
              >
                {moreStatus ? "Less" : "More"}
              </button>
            </center>
          </footer>
        </section>
      </div>
    </article>
  );
};

export default Card;
