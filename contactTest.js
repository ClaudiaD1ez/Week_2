"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var contact_1 = require("./contact");
var Pepa = new person_1.Person("pepa", 92, "direccion3");
var PepaDos = new person_1.Person("pepaD", 96, "direccion4");
var grupo = new contact_1.Contact();
grupo.people = [Pepa, PepaDos];
grupo.printCalendar();
