//tslint: linter para typescript
// @types/node: type declarations
// npm install -D typescript tslint @types/node

let numero: number = 1
let texto: string = "Hola mundo"
let arreglo: string[] = ["Hola","Mundo"]
let bool: boolean = true

let a = "Mensaje: " + "Hola"

// type: Un conjunto de valores y las cosas que podemos hacer con ellos

function squareRoot(n: any){
    return n*n
}

squareRoot(2) //4
squareRoot("abc") // NaN

// Any: es mala práctica

// unknown: No conocemos el tipo con antipación -> refinamiento

let valor:unknown = 300

// let suma = valor + 10 //Object is of type 'unknown'

class Persona{
    // name:string
    // direccion:{calle:string}
    // constructor(name:string,direccion:{calle:string}){
    //     this.name = name
    //     this.direccion = direccion
    // }
    constructor(
        public name:string,
        public direccion:{
            // calle:string,
            // numInterior?:number,
            // [key: number]:string, //cualquier tipo de propiedades numéricas que sean boolean
            [key: string]:string //Cualquier tipo de propiedades en string que almacenen un string
        } // public es un atajo a this.direccion = direccion
    ){}
}

// Tipado estructural
const tzuzul = new Persona("Tzuzul",{
    calle:"Calle ....",
    1:"Mensaje",
    ciudad:"Ciudad de Mexico",
    pais:"México"
})
const tzuzul2 /*:{name:string,direccion:{calle:string}}*/ = {
    name: "Tzuzul",
    direccion:{
        calle:"Calle ...."
    }
}
// const tzuzul2 :object = {
//     name:"Tzuzul"
// }
// object -> para ts un object es algo que esta definido y no es null

tzuzul2.direccion.calle
tzuzul.direccion.calle