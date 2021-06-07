import React from "react";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct" id={id}>
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct__price">
          <smal>€</smal>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
