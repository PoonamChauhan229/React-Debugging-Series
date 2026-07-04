import React from "react";

const ProductCard = React.memo(({ product }) => {
  console.log("ProductCard Rendered");

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
    </div>
  );
});

export default ProductCard;