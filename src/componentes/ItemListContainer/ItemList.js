import React from "react";
import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <section className="container my-5">
      <div className="row">
        <h2>PRODUCTOS</h2>
        <hr />

        {productos.map((prod) => (
          <Item key={prod.id} item={prod} />
        ))}
      </div>
    </section>
  );
};
