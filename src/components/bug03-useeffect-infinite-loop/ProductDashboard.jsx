import { useEffect, useState } from "react";
import "./ProductDashboard.css";

const ProductDashboard = () => {
  const [product, setProduct] = useState({
    name: "MacBook Pro",
    price: 1999,
    stock: 10,
  });

  console.log("Component Rendered");

// useEffect(() => {
//   setProduct((prev) => ({
//     ...prev,
//     stock: prev.stock + 1,
//   }));
// }, [[product]]);
  
useEffect(() => {
  setProduct((prev) => ({
    ...prev,
    stock: prev.stock + 1,
  }));
}, []);

return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #03 - useEffect Infinite Loop</h3>

        <div className="product-details">
          <p>
            <strong>Product:</strong> {product.name}
          </p>

          <p>
            <strong>Price:</strong> ${product.price}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDashboard;