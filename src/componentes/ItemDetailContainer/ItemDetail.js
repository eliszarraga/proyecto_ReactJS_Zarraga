import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../Counter/Counter";
import { newContext } from "../../context/newContext";

export const ItemDetail = ({ category, id, nombre, img, precio, stock, desc}) => {
  const {shoppingCart} = useContext(newContext);

  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    shoppingCart({
      category, id, nombre, precio, stock, cantidad, desc
    });
  };

  return (

    <div className="container my-5">      
      <div className="row">
        <h1> {nombre} </h1>
          <div className="col-2">
            <img src={img} alt={nombre} />
          </div>
            <div className="col-6 container">
              <h3> {desc} </h3>
                <hr/>
                <h2> {precio} </h2>
                <Counter
                  max={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    agregarCarrito={handleAdd}/>
                    <hr/>
                    <Link to={`/category/${category}`} className="btn btn-primary">VOLVER</Link>
                    <Link to='/cart' className="btn btn-primary">CARRITO</Link>      
              </div>
        </div>

    </div>
  );
};
