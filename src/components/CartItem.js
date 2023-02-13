import React, { useContext} from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

export default function CartItem({ img }) {
  const { removeFromCart } = useContext(Context);
  const {isHovered, ref} = useHover()

  const className = isHovered ? "ri-delete-bin-fill delete" : "ri-delete-bin-line delete"

  return (
    <div className="cart-item-container">
      <div className="cart-item-img-container">
         <i
          onClick={() => removeFromCart(img)}
          ref={ref}
          className={className}
        ></i>
        <img src={img.url} alt="" />
      </div>
      <p> $5.99</p>
    </div>
  );
}
