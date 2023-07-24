console.table(productos);

alert("Bienvenido a Distribuidora cuello negro")

let ids = prompt(
    "Ingrese los IDs de los productos que desea seleccionar, separados por comas, ejemplo: 2,3,5 "
);

while (ids != 0) {
    if (ids < 0) {
        alert("Porfavor ingrese un numero que no sea negativo");
    } else {
        const productosSeleccionados = productos.filter((producto) => {
            return ids.includes(producto.id);
        });

        console.table(productosSeleccionados);

        const total = productosSeleccionados.reduce((acumulador, producto) => {
            return acumulador + producto.precio;
        }, 0);

        console.log(total);
        alert("el monto total de tu compra es $ " + total);

        console.log(total * 1.19);
        alert("el monto total con IVA de tu compra es $ " + total * 1.19);

        alert("Muchas gracias por su compra, vuelva pronto!!!");
    }
    break;
}