import React, { useContext } from "react";
import { newContext } from "../../context/newContext";
import { Link } from "react-router-dom";

export const CartScreen = () => {
  const { cart, vaciarCart, deleteCart } = useContext(newContext);

  return (
    <div>
      <h1>RESUMEN DE COMPRA</h1>

      {cart.map((prod) => (
        <div key={prod.id}>
          <hr />
          <h2>{prod.nombre}</h2>
          <p>cantidad: {prod.cantidad}</p>
          <h1>precio: ${prod.precio * prod.cantidad}</h1>
          <button
            className="btn btn-danger"
            onClick={() => deleteCart(prod.id)}
          >
            Eliminar
          </button>
          <hr />
        </div>
      ))}

      <button className="btn btn-danger" onClick={vaciarCart}>
        VACIAR CARRITO
      </button>

      <Link to="/Checkout">
        <button className="btn btn-success">Terminar mi compra</button>
      </Link>
    </div>
  );
};
