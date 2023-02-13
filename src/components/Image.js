import React, { useState, useContext } from "react";
import useHover from "../hooks/useHover";
import { Context } from "../Context";

export default function Image({ className, img }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { removeFromCart, addToCart, cartItems } = useContext(Context);
  const {isHovered, ref} = useHover()

  function toggleFav(id) {
    id === img.id && setIsFavorite((prev) => !prev);
  }

  function heartIcon() {
    if (isFavorite) {
      return (
        <i
          onClick={() => toggleFav(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFav(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const isInTheCart = cartItems.some((item) => item.id === img.id);
    if (isInTheCart) {
      return (
        <i
          onClick={() => removeFromCart(img)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      ref={ref}
    >
      <img src={img.url} alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}
