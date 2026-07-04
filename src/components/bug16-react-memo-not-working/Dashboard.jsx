import { useState } from "react";
import ProductCard from "./ProductCard";
import "./Dashboard.css";

const Dashboard = () => {
  const [count, setCount] = useState(0);

  const product = {
    id: 1,
    name: "Laptop",
    price: "$1200",
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #16 - React.memo Not Working</h3>

        <h1>Counter : {count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increase Counter
        </button>

        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default Dashboard;