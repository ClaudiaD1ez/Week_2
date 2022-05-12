export class Vector{
    private elements:number[] = [];

    constructor( n:number , k:number ){
        for(let i=0 ; i<n ; i++){
            this.elements.push(Math.round(Math.random()*k))
        }
    }
  
    //
    public getElements():number[]{
       return this.elements
    }
    
    //METODOS

    public print():void{
      console.log(this.elements)
    }

    public add(v1:Vector):Vector{
        let sumaVector = new Vector(0,0);
        for(let i=0 ; i < this.elements.length ; i++){
            sumaVector.elements.push(this.elements[i] + v1.elements[i]);
        }
        return sumaVector 
    }

    public subs(v1:Vector):Vector{
        let restaVector = new Vector (0,0)
        for(let i = 0 ; i < this.elements.length ; i++){
            restaVector.elements.push(this.elements[i] - v1.elements[i])
        }
        return restaVector
    }

    public mult(v1:Vector):Vector{
        let multiVector = new Vector (0,0);
        for(let i=0 ; i< this.elements.length ; i++){
            multiVector.elements.push(this.elements[i] * v1.elements[i])
        }
        return multiVector
    }

    public multNumber(n:number):Vector{
        let multNumero = new Vector (0,0);
        for(let i=0 ; i < this.elements.length ; i++){
            multNumero.elements.push(this.elements[i]*n);
        }
        return multNumero
    }

}

