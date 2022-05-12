export class Person {

    public name : string ;
    public age : number 
    private address : string

    constructor (name:string , age: number, address: string){
        this.name = name ;
        this.age = age ;
        this.address = address ;
    }

    //METODOS

    public getAddress(): string{
        return this.address
    }

    public printName(): void {
        console.log(this.name);
    }

    public yearOfBirth(currentYear: number):number {
        let año = new Date()
        let esteAnio = año.getFullYear()
        return esteAnio - this.age 
    }



    public setAddress(address:string) {
        this.address = address
    }

    private printAddress(): void{
        console.log(this.getAddress()) }

}

