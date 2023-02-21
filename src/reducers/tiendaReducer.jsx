/**
 * Definimos el estado inicial que tendra nuestra aplicacion
 */
const estadoInicial = {
  productos: [
    { id: 1, nombre: "Producto A1" },
    { id: 2, nombre: "Producto B2" },
    { id: 3, nombre: "Producto C3" },
    { id: 4, nombre: "Producto D4" },
  ],
  carrito: [],
};

/**
 * El reducer es una funcion que se va a encargar de
 * administrar el estado gloval de nuestra aplicacion
 */
const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      const { idProductoAAgregar, nombreProducto } = accion;
      if (estado.carrito.length === 0) {
        /**
         * Para cambiar el estado en cuenta de usar un hook como setState
         * lo que haremos sera retornar una copia del estado anterior seguido
         * de ki nuevo que queremo almacenar en el
         */
        return {
          ...estado,
          carrito: [
            { id: idProductoAAgregar, nombre: nombreProducto, cantidad: 1 },
          ],
        };
      } else {
        const nuevoCarrito = [...estado.carrito];

        const yaEstaeEnCarrito =
          nuevoCarrito.filter(
            (productoDeCarrito) => productoDeCarrito.id === idProductoAAgregar
          ).length > 0;

        if (yaEstaeEnCarrito) {
          nuevoCarrito.forEach((productoDecarrito, index) => {
            if (productoDecarrito.id === idProductoAAgregar) {
              const cantidadNueva = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idProductoAAgregar,
                nombre: nombreProducto,
                cantidad: cantidadNueva + 1,
              };
            }
          });
        } else {
          nuevoCarrito.push({
            id: idProductoAAgregar,
            nombre: nombreProducto,
            cantidad: 1,
          });
        }
        return {
          ...estado,
          carrito: nuevoCarrito,
        };
      }

    default:
      return estado;
  }
};

export default reducer;
