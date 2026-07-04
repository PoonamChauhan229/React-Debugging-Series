import React from "react";

const CartItems = React.memo(({ items, onCheckout }) => {
  console.log("CartItems Rendered");

  return (
    <div className="cart-list">
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <div>
            <h4>{item.name} - {item.price}</h4>
          </div>

          <button onClick={onCheckout}>
            Checkout
          </button>
        </div>
      ))}
    </div>
  );
});

export default CartItems;