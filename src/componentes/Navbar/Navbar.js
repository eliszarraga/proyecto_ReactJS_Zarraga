import React from "react";
import { Link } from "react-router-dom";
import {CartWidget} from "../CartWidget/CartWidget"

export const Navbar = () => {
  return (
    <header className="encabezado">
      <Link to={"/"}>      
        <h1> HOLO! </h1>
      </Link>

      <nav>

        <Link className="mx-1" to={"/category/computadoras"}>
          COMPUTADORAS
        </Link>

        <Link className="mx-1" to={"/category/videojuegos"}>
          VIDEOJUEGOS
        </Link>

        <Link className="mx-1" to={"/category/accesorios"}>
          ACCESORIOS
        </Link>

      </nav>
      <CartWidget/>
    </header>
  );
};
