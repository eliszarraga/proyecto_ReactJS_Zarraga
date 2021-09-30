import React, { useContext } from "react";
import { newContext } from "../../context/newContext";
import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'

export const CartWidget = () => {
  const { cantidadCart, cart } = useContext(newContext);

  if (cart.length > 0) {
    return (
      <div>
        <Link className="btn btn-success" to="/cart">
          <FaShoppingCart/>
          <span>({cantidadCart()})</span>
        </Link>
      </div>
    )} else {
    return (<div></div>)
  }
}
