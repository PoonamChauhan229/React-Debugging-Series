import React from "react";

const CartItems = React.memo(({ items, onCheckout }) => {
  console.log("CartItems Rendered");

  return (
    <div className="cart-list">
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>

          <button
            className="checkout-btn"
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      ))}
    </div>
  );
});

export default CartItems;