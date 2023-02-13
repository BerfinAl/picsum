import {useContext} from "react"
import { Routes, Route, Link } from "react-router-dom";
import {Context} from "../Context"
import Photos from "../pages/Photos";
import Cart from "../pages/Cart"

export default function Nav() {
const {cartItems} = useContext(Context)

const shoppingCartIcon = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"

  return (
    <div>
      <nav>
        <Link to="/photos"> <h1> PICSUM</h1> </Link>
        <Link to="/cart" >{<i className={shoppingCartIcon}></i>} </Link>
      </nav>

      <Routes>
        <Route path="/photos" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
