import { Person } from "./person";
import { Contact } from "./contact";


let Pepa = new Person("pepa",92,"direccion3")
let PepaDos = new Person("pepaD",96,"direccion4")

let grupo = new Contact()
grupo.people = [Pepa, PepaDos]

grupo.printCalendar();



