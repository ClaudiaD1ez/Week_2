"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //METODOS
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    //
    Book.prototype.toString = function () {
        console.log("Title - " + this.getTitle() + "\n" + "Numer of Pages - " + this.getPages() + "\n" +
            "ISBN – " + this.getIsbn() + "\n" + "Author – " + this.getAuthor() + "\n" +
            "Editorial – " + this.getEditorial());
    };
    return Book;
}());
exports.Book = Book;
