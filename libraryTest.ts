import { Library } from "./library"; 
import { Book } from "./book";

let libroUno = new Book("Introducción a Javascript", 233, "2344433-BC23333","Joseph Smith","Now Editions...");
let libroDos = new Book("Titulo de libro dos", 753 , "7366488-HY75439","Paquito","Editorial rara");
let libroTres = new Book("Titulo de libro tres", 567 , "4693796-HY75939","Paquito","Editorial rara");

let libreria = new Library([libroUno,libroDos,libroTres] , "addressUno" , "Juanchito" )

console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAuthor("Paquito"));



