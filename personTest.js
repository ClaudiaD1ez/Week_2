let myLib = require("./person");

let Carmen = new Persona (189,75,1998)

console.log(Carmen.altura);
console.log(Carmen.peso);
console.log(Carmen.yearOfBirth);
console.log(Carmen.hobbies);

console.log(Carmen.imc());
console.log(Carmen.edad());
console.log(Carmen.printAll());
console.log(Carmen.printHobbies());

//comentario