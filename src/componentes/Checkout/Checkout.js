import React, { useContext, useState } from "react";
import { newContext } from "../../context/newContext";
import { generateOrder } from "../../firebase/generateOrder";
import Swal from "sweetalert2";
import { Redirect } from "react-router";

export const Checkout = () => {
  const { cart, totalCart, vaciarCart } = useContext(newContext);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    email: "",
    tel: 0,
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.nombre.length > 3 && values.apellido.length > 3 && values.edad.length > 0 && values.email.length > 3 && values.tel.length > 5 ) {
      generateOrder(values, cart, totalCart())
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "SU COMPRA FUE UN EXITO",
            text: `Guarde este identificador: ${res}`,
            confirmButtonText: "Excelente!",
          });
          vaciarCart();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops... lo sentimos muchos",
            text: `${err.error}`,
          });
          vaciarCart();
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops... Algo esta mal",
        text: "Por favor, revise su informacion",
      });
    }
  };

  return (
    <div>
      <h2>CHECKOUT</h2>
      <hr />

      {!cart.length ? (
        <Redirect to="/" />
      ) : (
        <div className="container col-10">
          <form className="container row col-3 justify-center" onSubmit={handleSubmit}>

            <h4>NOMBRE</h4>

            <input
              type="text"
              value={values.nombre}
              onChange={handleInputChange}
              name="nombre"
              required
            />

            <h4>APELLIDO</h4>

            <input
              type="text"
              value={values.apellido}
              onChange={handleInputChange}
              name="apellido"
              required
            />

            <hr/>

            <h4>EDAD</h4>

            <input
              type="number"
              value={values.edad}
              onChange={handleInputChange}
              name="edad"
              required
            />

            <hr/>

            <h4>CORREO ELECTRONICO</h4>

            <input
              type="email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              required
            />

            <hr/>

            <h4>TELEFONO</h4>

            <input
              type="number"
              value={values.tel}
              onChange={handleInputChange}
              name="tel"
              required
            />

            <hr/>

            <button type="submit" className="btn btn-success">Submit</button>

            <hr/>
          </form>
        </div>
      )}
    </div>
  );
};
