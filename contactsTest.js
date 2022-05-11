let {Persona} = require("./person");
let {Contact} = require("./reto7");


let Pepe = new Persona(174,68,1982);
let Maria = new Persona(180,71,1979);


let contactos = new Contact()
contactos.objetos.push(Pepe) ;
contactos.objetos.push(Maria) ;

console.log(contactos.objetos);

console.log(Pepe.imc());
console.log(Pepe.edad());
console.log(Pepe.printAll());
