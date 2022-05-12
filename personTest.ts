import { Person } from "./person";

let personaUNo = new Person("pepe", 37, "Calle pez");


//ATRIBUTOS
console.log(personaUNo.name);
console.log(personaUNo.age);

//METODOS 
personaUNo.printName();
console.log(personaUNo.yearOfBirth(2022));
personaUNo.setAddress("Alberto Aguilera");
console.log(personaUNo.getAddress());
