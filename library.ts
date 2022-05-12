import { Book } from "./book";

export class Library{
    private books : Book[] = [];
    address : string;
    manager : string;

    constructor(books:Book[], address:string , manager:string ){
        this.books = books ;  // hace referencia al book(arriba), no al array ( no es = books[])
        this.address = address;
        this.manager = manager ;
    }

    //METODOS

    public getAdreess(): string{
        return this.address
    }

    public getManager(): string{
        return this.manager
    }
    //
    toString (): string{ 
        let libros : string = "" ;
        for(let i=0 ; i<this.books.length ; i++){
            libros += "Book" + (i+1) + ":" + + "\n" + this.books[i].toString() + "\n"
        }
         return libros;
    }

    getNumberOfBooks():number{
        return this.books.length
    }

    findByAuthor (author:string):Book[]{
        let librosAutor : Book[] = [];
        for(let i=0 ; i < this.books.length ; i++){
              if(this.books[i]['author'] == author){
                librosAutor.push(this.books[i]) 
              }
        }
        return librosAutor

    }   
}