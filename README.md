Proyecto E-Commerce en react de Elis Zarraga

Mi proyecto se trata de simular una tienda E-Commerce de productos electronicos y computacion. Con ella puedes simular la sleccion y compra de productos, y a su vez puedes verificar si hay stock o no de la misma.

Navegación

La barra de navegación ofrece links de los productos segun las categorías de las mismas. Se renderiza las secciones por medio del componente ItemListContainer, que muestra diferentes productos aplicando un filtro de la base de datos y los productos son, en realidad, el componente Item. La categoría a filtrar se toma usando useParams().

Item - ItemDetail

Cada uno de los productos (Item) tiene la opción de INFORMACION, el cual, redirecciona al ItemDetail, donde permite mostrar detalles del producto y la opción para agregar al carrito. A su vez, renderiza el ItemDetailContainer, que toma el ID del producto seleccionado usando la funcion "useParams()", asi realizando un pedido a la base de datos del dicho producto. Concluyendo, se renderiza el componente ItemDetail que muestra el detalle del producto y la opción de agregar al carrito, ajustando la cantidad al stock que se encuentre disponible que este ingresado en la base de datos.

Cart

Despues de seleccionar el producto y agregarlo al carrito, en el navbar, se hace visible el Cart con la cantidad de prouctos que ha seleccionado anteriormente. al ir al link del carrito, podra vizualizar los prodcutos seleccionados junto con las cantidades sumando el precio del producto seleccionado. Cuenta tambien con la posibilidad de eliminar el producto dentro del carrito y de continuar con la compra.

Cart Context

Todo el proceso anteriormente mencionados estan intercomunicados por el contexto "newContext", el cual reune la informacion que esta en el carrito, lo que esta seleccionado y, a su vez, permiter distintos metodos para limpiar el carrito y calcular el total de las cantidades de los productos.

Firebase

Cabe destacar que los productos que se muestran en la tienda están cargados en "Firebase-Firestore", el cual, cada uno contiene las siguentes propiedades: CATEGORIA, NOMBRE, DESCRIPCION, PRECIO, IMAGEN Y STOCK (Tambien esta el ID que lo proporciona Firestore).

generateOrdens

Este toma la informacion que esta almacenado en el Cart, los dats del cliente y genera una ORDEN DE COMPRA el cual se carga y se sube a Firebase. Igualmente, puede verificar si hay stock del producto antes de confirmar. Esta funcion hace retornar a una promesa que, si clumple con las verifficaciones, retorna el ID de la orden que se genero y se sube a Firebase: pero sino cumple con las verificaciones, arroja un Alert mencionando que no hay stock de producto y no genera la orden de compra.

CHECKOUT

Al finalizar la compra en el carrito se redirecciona a CHECKOUT el cual se renderiza dicho componente. Este se va renderizando segun las condiciones: Pide datos del comprador para poder continuar con la compra, el cual, tiene la posibilidad de manipular el formulario y verificacion de la informacion que se ingreso. si algun campo no esta rellenado o que sean invalidos, se mostrara un mensaje de error. si los datos estan correctos y validos, se mostrara un mensaje que su compra fue un exito, indicando el numero de compra generado por la misma base de datos Firebase, que a su vez, esta estara guardadaen dicha base de datos.