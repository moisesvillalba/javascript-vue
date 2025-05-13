// Solución: let
console.log("\n=== SOLUCIÓN: let ===");

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
// let edad = 26; // Error: ya declarada

// Permite reasignación
edad = 26; // Esto está bien
console.log("Nueva edad:", edad);

