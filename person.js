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


module.exports = {Persona}

let Carmen = new Persona (189,75,1998)

console.log(Carmen.altura);
console.log(Carmen.peso);
console.log(Carmen.yearOfBirth);
console.log(Carmen.hobbies);

console.log(Carmen.imc());
console.log(Carmen.edad());
console.log(Carmen.printAll());
console.log(Carmen.printHobbies());

