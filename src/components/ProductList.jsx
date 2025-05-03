import React from "react";
import ProductItem from "./ProductItem.jsx";
import "../styles/ProductList.css";

// This component represents a list of products. It receives an array of product objects as props and maps over them to render a list of ProductItem components.
// Each ProductItem component displays the product's name, price, and description.
function ProductList({ products }) {

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;