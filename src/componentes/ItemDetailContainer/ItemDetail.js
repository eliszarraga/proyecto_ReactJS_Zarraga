import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../Counter/Counter";
import { newContext } from "../../context/newContext";

export const ItemDetail = ({ category, id, nombre, img, precio, stock }) => {
  const {shoppingCart} = useContext(newContext);

  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    shoppingCart({
      category, id, nombre, precio, stock, cantidad
    });
  };

  return (
    <div>

      <h3> {nombre} </h3>
      <p> {nombre} </p>
      <img src={img} alt={nombre} />
      
      <Counter
        max={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
        agregarCarrito={handleAdd}
        />

      <p> {precio} </p>
      
      <Link to={`/category/${category}`} className="btn btn-primary">
        VOLVER
      </Link>

    </div>
  );
};
