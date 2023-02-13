import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  function addToCart(img) {
    setCartItems((prev) => [...prev, img]);
  }

  function removeFromCart(img) {
    setCartItems((prev) => prev.filter((item) => item.id !== img.id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{ photos, addToCart, cartItems, removeFromCart, emptyCart }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
