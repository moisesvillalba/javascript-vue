// Problemas con var
console.log("=== PROBLEMAS CON VAR ===");

// 1. No respeta los bloques de código
function ejemploVar() {
  if (true) {
    var mensaje = "Hola desde var";
  }
  console.log(mensaje); // "Hola desde var" - ¡La variable existe fuera del bloque!
}
ejemploVar();

// 2. Permite redeclaración en el mismo ámbito
var contador = 1;
var contador = 2; // Esto está permitido, pero es confuso
console.log("Contador:", contador);

// 3. Problema de "hoisting" (elevación)
console.log(nombre); // undefined (no da error)
var nombre = "Ana";  // La declaración se eleva, pero no el valor