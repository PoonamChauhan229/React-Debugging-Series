import { useCallback, useState } from "react";
import CartItems from "./CartItems";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cartCount, setCartCount] = useState(2);

  const items = [
    {
      id: 1,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 2,
      name: "Headphones",
      price: "$150",
    },
  ];

  const handleCheckout = useCallback(() => {
    console.log("Proceeding to Checkout...");
  }, [cartCount]);

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #18 - useCallback Mistakes</h3>

        <h2>Cart Items : {cartCount}</h2>

        <button
        className="add-item"
          onClick={() => setCartCount(cartCount + 1)}
        >
          Add Item
        </button>

        <CartItems
          items={items}
          onCheckout={handleCheckout}
        />

        <h5 className="note">
          Open the browser console and watch.
        </h5>
      </div>
      
    </div>
  );
};

export default ShoppingCart;