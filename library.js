"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = [];
        this.books = books; // hace referencia al book(arriba), no al array ( no es = books[])
        this.address = address;
        this.manager = manager;
    }
    //METODOS
    Library.prototype.getAdreess = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    //
    Library.prototype.toString = function () {
        var libros = "";
        for (var i = 0; i < this.books.length; i++) {
            libros += "Book" + (i + 1) + ":" + +"\n" + this.books[i].toString() + "\n";
        }
        return libros;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var librosAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i]['author'] == author) {
                librosAutor.push(this.books[i]);
            }
        }
        return librosAutor;
    };
    return Library;
}());
exports.Library = Library;
