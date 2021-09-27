import React, { useContext } from "react";
import { newContext } from "../../context/newContext";
import { Link } from "react-router-dom";


export const CartWidget = () => {
  const { cantidadCart, cart } = useContext(newContext);

  if (cart.length > 0) {
    return (
      <div>
        <Link to="/cart">
          <p>carrito</p>
          <span>{cantidadCart()}</span>
        </Link>
      </div>
    )} else {
    return (<div></div>)
  }
}
