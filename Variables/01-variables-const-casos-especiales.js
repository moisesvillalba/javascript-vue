// const con objetos y arrays
console.log("\n=== const CON OBJETOS Y ARRAYS ===");

// La constante es la referencia, no el contenido
const usuario = { nombre: "Ana", edad: 25 };

// Esto NO es válido:
// usuario = { nombre: "Juan" }; // Error: no se puede reasignar

// Pero esto SÍ es válido:
usuario.nombre = "Juan";       // ✓ Cambiar propiedad
usuario.ciudad = "Barcelona";  // ✓ Añadir propiedad
console.log("Usuario modificado:", usuario);

// Lo mismo con arrays
const numeros = [1, 2, 3];
// numeros = [4, 5]; // Error: no se puede reasignar
numeros.push(4);    // ✓ Válido: modificar contenido
console.log("Array modificado:", numeros);