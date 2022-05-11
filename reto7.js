let {Persona} = require("./person");

class Contact{

    constructor(){
        this.objetos =[];
    }

    // printPersons(){
    //     for(let i = 0 ; i < this.objetos.length ; i++){
    //     return(Persona.PrintAll())
    // }

    printPersons(){
        return this.objetos 
    }

}

//Prueba en personaContact
let Ana = new Persona(157,40,2004) ;
let Pepe = new Persona(189,85,1992) ;
let Sara = new Persona(170,93,1985) ;

let agenda = new Contact()
agenda.objetos.push(Ana,Pepe,Sara);

console.log(agenda.printPersons());





module.exports = {Contact}