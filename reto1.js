
class Persona {

    constructor (altura, peso,birth){
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = birth;
        this.hobbies = ["tenis" , "viajar" , "leer"] ;
    }

    //METODOS - Reto 2 
    imc(){
        return (this.altura/this.peso)
       
    }

    // Reto 3
    edad(){
        let anoAhora = new Date()
        let ano = anoAhora.getFullYear()
        console.log(ano)

        return (ano - this.yearOfBirth)
    }

    //Reto 4
      printAll(){
          console.log("altura - " + this.altura + " , peso - " + this.peso + " , yearOfBirth - " + this.yearOfBirth)
      }

    //Reto 5 
    printHobbies(){
        console.log(this.hobbies);
    }

}

/*
Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
(índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
clase.
*/

let personita = new Persona(180, 89,1979)
console.log(personita);
console.log(personita.imc());

//RETO 3
/*
Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
como parámetro el año y calcule la edad de la persona.
*/

// console.log(ano)
console.log(personita.edad());

//RETO 4 
/*
Añadir un método que se denomine printAll que muestre por consola cada uno de los
atributos de la clase Person seguido por “-” y el valor del atributo.
*/
console.log(personita.printAll());

//RETO 5 
/*Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
denominado printHobbies, que muestre por consola las aficiones de la persona.
*/
console.log(personita.printHobbies());
