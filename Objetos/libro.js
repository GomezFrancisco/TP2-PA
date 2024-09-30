const libro = {
    titulo: 'generico',
    autor: 'desconocido',
    anioDePublicacion: 2024,
}

// console.log(libro)

const descripcion =  (libro) => {
    console.log(`El titulo de libro es: ${libro.titulo} y el nombre del autor es:
        ${libro.autor}`)
}

descripcion(libro)