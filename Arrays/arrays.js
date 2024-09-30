//1. Agregar y Eliminar Elementos:
let frutas = ["manzana", "banana", "pera"];

frutas.push("naranja");
console.log("Después de agregar una fruta:", frutas);

frutas.pop();
console.log("Después de eliminar la última fruta:", frutas);

//2. Array Bidimensional:
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let elementoCinco = matriz[1][1];
  
  console.log("El elemento 5 es:", elementoCinco);

//3. Iterar sobre un Array:
let frutas1 = ["manzana", "banana", "pera", "naranja"];

for (let i = 0; i < frutas1.length; i++) {
  console.log("Fruta en el índice", i, "es:", frutas1[i]);
}

//4. Uso de map:
function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero ** 2);
  }
  
  let numeros = [1, 2, 3, 4, 5];
  let cuadrados = elevarAlCuadrado(numeros);
  
  console.log("Array original:", numeros);
  console.log("Array al cuadrado:", cuadrados);

  //5. Uso de filter:
  function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
  }
  
  let numero = [10, 20, 30, 40, 50];
  let mayoresDeTreinta = filtrarMayoresDe(numero, 30);
  
  console.log("Array original:", numero);
  console.log("Números mayores de 30:", mayoresDeTreinta);
  
//6. Uso de reduce:
  function sumarElementos(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  let numeros1 = [1, 2, 3, 4, 5];
  let sumaTotal = sumarElementos(numeros1);
  
  console.log("Suma de los elementos del array:", sumaTotal);

//7. Uso de some:
let numeros2 = [3, 7, 2, 9, 4];
let algunMayorQueDiez = numeros2.some(numero => numero > 10);

console.log("¿Hay algún número mayor que 10?:", algunMayorQueDiez);

//8. Uso de every:
let numeros3 = [3, 7, 2, 9, 4];

let todosPositivos = numeros3.every(numero => numero > 0);

console.log("¿Todos los números son positivos?:", todosPositivos);

//9. Uso de find:
let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 32 },
    { nombre: 'Luis', edad: 29 },
    { nombre: 'María', edad: 45 }
  ];
  
  let personaMayorDe30 = personas.find(persona => persona.edad > 30);
  
  console.log("Primera persona mayor de 30 años:", personaMayorDe30);
  
//10. Uso de sort:
let palabras = ["banana", "manzana", "kiwi", "cereza", "pera"];
palabras.sort();
console.log("Palabras ordenadas alfabéticamente:", palabras);