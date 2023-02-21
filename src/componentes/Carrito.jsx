import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Carrito = ({ carrito }) => {
  return (
    <div>
      <h3>Carrito de compras</h3>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <NombreProducto>{producto.nombre}</NombreProducto>
              Cantidad: {producto.cantidad}
            </Producto>
          );
        })
      ) : (
        <p>No has agregado productos al carrito</p>
      )}
    </div>
  );
};

const Producto = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const NombreProducto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

/**
 * Creamos esta funcion para convertir nuestro estado que definimos
 * a una propiedad que sera la que recibira este componente
 *
 * para accder a la propiedad del estado que queremos siempre lo debemos hacer
 * indicando primero estado.propiedad
 *
 * La propieda carrito que estamod returnando debe ser el mismo nombre que la props que
 * esta recibiendo el componente actual
 * CARRITO:estado.carrito
 * const Carrito = ({ CARRITO }) => {}
 */
const mapStateToProps = (estado) => {
  return {
    carrito: estado.carrito,
  };
};
/**
 * usando la funcion connect podemos enlazar nuestro componente actual
 * con el estado global que creamos en el reducer
 */
export default connect(mapStateToProps)(Carrito);
