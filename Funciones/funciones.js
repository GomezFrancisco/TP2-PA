//1. Función Suma:
function sumar (x,y){
    return x+y;
};

console.log(sumar(5,3));
console.log(sumar(45,15));

//2. Función que Multiplica:
function multiplicar (x,y){
    return x*y;
};

console.log(multiplicar(5,3));
console.log(multiplicar(45,15));

//3. Función con Parámetro por Defecto:
function saludar (name='invitado'){
    return `Hola, ${name}`
}

console.log (saludar())
console.log (saludar('Axel'))

//4. Función que Devuelve un Objeto:
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

const persona = crearPersona('Laura', 28);

console.log(persona); 

//5. Función que Modifica un Objeto:
function actualizarEdad(persona,nuevaEdad,){
    persona.edad = nuevaEdad;
    return persona;
};

console.log(actualizarEdad(persona,12));

//6. Función Recursiva:

function factorial(x){
    if (x === 1){
        return 1;
    };

    return x*factorial(x-1);
};

console.log(factorial(4))

//7. Función con Función Interna:
function adios(){
    return 'adios'
}

function despedir(){
    return adios()
}

console.log(despedir())

//8. Función que Usa Otra Función:
function procesarArray(array, funcion) {
    return array.map(funcion);
}

function multiplicarPorDos(num) {
    return num * 2;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = procesarArray(numeros, multiplicarPorDos);

console.log(resultado); 


//9. Función que Devuelve Otra Función:
function crearMultiplicador(x) {
    return function(num) {
        return num * x;
    };
}

const multiplicadorPor5 = crearMultiplicador(5);

console.log(multiplicadorPor5(10)); 

//10. Función Anónima:
const sumarAnonima = function(a, b) {
    return a + b;
};

console.log(sumarAnonima(5, 7)); 