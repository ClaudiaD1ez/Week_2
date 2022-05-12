export class Book{
    private title: string
    private nPages: number
    private isbn: string
    private author: string
    private editorial: string

     constructor(title: string , nPages: number , isbn: string , author: string , editorial: string){
         this.title = title ;
         this.nPages = nPages ;
         this.isbn = isbn ;
         this.author = author;
         this.editorial = editorial;
     }

     //METODOS

      public getTitle(): string{
          return this.title
      }

      public getPages(): number{
          return this.nPages
    }

      public getIsbn(): string{
          return this.isbn
    }

      public getAuthor(): string{
          return this.author
    }

      public getEditorial(): string{
          return this.editorial
    }

    //

      public toString (): void{
           console.log("Title - " + this.getTitle() + "\n" + "Numer of Pages - " + this.getPages() + "\n" + 
                         "ISBN – " + this.getIsbn() + "\n" + "Author – " + this.getAuthor() + "\n" + 
                         "Editorial – " + this.getEditorial())
    }

}