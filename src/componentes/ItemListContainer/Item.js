import React from "react";
import { Link } from "react-router-dom";


export const Item = ({ item, img, nombre, precio, id }) => {

  return (

    <div className="card col-3 m-4 bg bg-secondary">

      <img src={item.img} alt={item.nombre}/> 
      
      <h3> {item.nombre} </h3>

      <p className="letrasCard"> {item.precio} </p>

      <Link to={`/detail/${item.id}`} className="btn btn-primary">INFORMACION</Link>

    </div>
  );
};
