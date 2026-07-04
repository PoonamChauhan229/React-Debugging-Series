import { useEffect, useState } from "react";
import "./ProductCatalog.css";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching products...");

    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products received");

        setProducts(data);
      })
      .catch((error) => console.error(error));

  }); 
  return (
    <div className="catalog-container">
      <div className="catalog-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #12 - Infinite API Calls</h3>

        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h4>{product.title}</h4>

            <p>
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
        ))}

        <p className="note">
          Open the browser Console and Network tab.
        </p>
      </div>
    </div>
  );
};

export default ProductCatalog;