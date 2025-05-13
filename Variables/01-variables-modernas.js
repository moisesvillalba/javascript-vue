// Archivo: 01-variables-modernas.js

// ---------- PROBLEMAS CON VAR ----------
console.log("===== PROBLEMAS CON VAR =====");

// 1. Problema de alcance
function ejemploVar() {
  if (true) {
    var mensaje = "Hola desde var";
  }
  console.log(mensaje); // 'Hola desde var' - ¡existe fuera del bloque!
}
ejemploVar();

// 2. Problema de redeclaración
var contador = 1;
var contador = 2; // Permitido, pero confuso
console.log("Contador:", contador);

// 3. Problema de "hoisting"
console.log(nombre); // undefined (no da error)
var nombre = "Ana"; // La declaración se eleva, pero no el valor

// ---------- SOLUCIÓN: LET ----------
console.log("\n===== SOLUCIÓN: LET =====");

function ejemploLet() {
  if (true) {
    let mensaje = "Hola desde let";
    console.log("Dentro del bloque:", mensaje); // Funciona
  }
  // console.log(mensaje); // Error: mensaje no está definido
}
ejemploLet();

// No permite redeclaración
let edad = 25;
// let edad = 26; // Error: ya fue declarada

// Permite reasignación
edad = 26;
console.log("Nueva edad:", edad);

// ---------- SOLUCIÓN: CONST ----------
console.log("\n===== SOLUCIÓN: CONST =====");

// Para valores que no cambiarán
const PI = 3.14159;
const URL_API = "https://api.ejemplo.com";

// No permite reasignación
// PI = 3.14; // Error: no se puede reasignar una constante

// ---------- CONST CON OBJETOS Y ARRAYS ----------
console.log("\n===== CONST CON OBJETOS =====");

// La constante es la referencia, no el contenido
const usuario = { nombre: "Ana", edad: 25 };

// Esto NO es válido:
// usuario = { nombre: "Juan" }; // Error: no se puede reasignar

// Pero esto SÍ es válido:
usuario.nombre = "Juan"; // ✓ Cambiar propiedad
usuario.ciudad = "Barcelona"; // ✓ Añadir propiedad
console.log("Usuario modificado:", usuario);

// Lo mismo con arrays
const numeros = [1, 2, 3];
// numeros = [4, 5]; // Error: no se puede reasignar
numeros.push(4); // ✓ Válido: modificar contenido
console.log("Array modificado:", numeros);
