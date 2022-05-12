"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var Contact = /** @class */ (function () {
    function Contact() {
        //  this.people = [new Person("Ana",66,"direccion1"), new Person("Juan",38,"direccion2")]
        this.people = [];
    }
    //METDOS
    Contact.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
        //console.log("nombre: " + Person[0].name + "age: " + Person[0].age + "address: " + Person[0].getAdress())
        //console.log("nombre: " + Person[1].name + "age: " + Person[1].age + "address: " + Person[1].getAdress())
    };
    return Contact;
}());
exports.Contact = Contact;
