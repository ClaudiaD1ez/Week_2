import { Vector } from "./vector";

let vectorPrueba = new Vector(5,8);
let vectorDos = new Vector (5,9);
let vectorTres = new Vector (0,0);

vectorPrueba.print() ;

vectorTres=vectorPrueba.add(vectorDos);
vectorTres.print();

vectorTres=vectorPrueba.subs(vectorDos);
vectorTres.print();

vectorTres= vectorPrueba.mult(vectorDos);
vectorTres.print();

vectorTres=(vectorPrueba.multNumber(8));
vectorTres.print();