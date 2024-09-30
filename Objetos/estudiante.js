const estudiante = {
    nombre: 'pepe',
    edad: 12,
    direccion : {
        calle: 'Rivadavia',
        ciudad: 'Mendoza',
        pais: 'Argentina'
    }
}

console.log(estudiante.direccion)

const obj = JSON.stringify(estudiante)
const parce = JSON.parse(obj)
console.log(parce.direccion.calle)
parce.nombre = 'francisco'
console.log(parce)
console.log(estudiante)

let persona = {
    nombre: "Ricardo",
    edad: 20,
    get nombreEdad (){
        return `${this.nombre}, ${this.edad}`
    },
    set setNombreEdad (value){
        [this.nombre, this.edad] = value.split(" ") 
    }
}

console.log(persona.nombreEdad)
persona.setNombreEdad = 'Juan 25'
console.log(persona)