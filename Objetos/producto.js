let producto = {
    nombre:  "Notebook",
    precio:  1200,
    disponibilidad: true
};

const listarObjeto = (producto) => {
    for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
    };    
}

listarObjeto(producto)

const actualizarPrecio = (producto, nuevoPrecio) => {
    producto.precio = nuevoPrecio;
    console.log(`Se ha actualizado correctamente el precio del producto.`);
    console.log('------- ------- ------- ------ ------ ------ ---------')
    listarObjeto(producto)
};

actualizarPrecio(producto, 1500)

const hasProperty = (producto, propiedad) => {
    let estado = false
    for (let key in producto) {
        if (propiedad === key) {
            estado = true;
            break;
        }
    }
    if (!estado) {
        console.log('La propiedad ingresada no se encuentra en el objeto.')
    }
    else {
        console.log('La propiedad se encuentra en el objeto.')
    }
    return estado
}

hasProperty(producto, 'nombre')

console.log('=========================================')
console.log(producto)
delete producto.disponibilidad
console.log('La propiedad ya fue eliminada.')
console.log(producto)

let producto2 = {
    nombre: 'Bicicleta',
    precio: 5000
}

Object.assign(producto, producto2)
console.log(producto)
