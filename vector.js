"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.round(Math.random() * k));
        }
    }
    //
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    //METODOS
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var sumaVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            sumaVector.elements.push(this.elements[i] + v1.elements[i]);
        }
        return sumaVector;
    };
    Vector.prototype.subs = function (v1) {
        var restaVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            restaVector.elements.push(this.elements[i] - v1.elements[i]);
        }
        return restaVector;
    };
    Vector.prototype.mult = function (v1) {
        var multiVector = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            multiVector.elements.push(this.elements[i] * v1.elements[i]);
        }
        return multiVector;
    };
    Vector.prototype.multNumber = function (n) {
        var multNumero = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            multNumero.elements.push(this.elements[i] * n);
        }
        return multNumero;
    };
    return Vector;
}());
exports.Vector = Vector;
