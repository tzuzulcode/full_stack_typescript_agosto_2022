// Functions en JS: First-class objects

// Named function
function add(a: number,b: number): number{
    return a+b
}

add(5,4)

// Function expression
let greet = function(name:string){
    return "Hello "+name
}

// Arrow function expression
let greet2 = (name:string)=>{
    return "Hello "+name
}

// Shorthand Arrow function expression
let greet3 = (name:string):string=>"Hello "+name

// Function constructor
let greet4 = new Function('name','return "Hello "+ name')


// Optional parameters
// function log(message:string, userId?:string){
//     let time = new Date().toLocaleDateString()
//     console.log(time,message,userId || 'Not signed in')
// }

// Default values
// function log(message:string, userId="Not signed in"){
//     let time = new Date().toLocaleDateString()
//     console.log(time,message,userId)
// }

// log("Hola")
// log("Hola","abc123")


// Recibir objetos
type User={
    id:string,
    name:string,
    profilePic?:string
}

function log(message:string, user:User = {id:"anon",name:"Anon"}){
    let time = new Date().toLocaleDateString()
    console.log(time,message,user.name)
}

log("Hola")
log("Hola",{
    id:"abc123",
    name:"Tzuzul"
})

// function sum(numbers: number[]){
//     return numbers.reduce((total,n)=>total+n,0)
// }

// sum([1,2,3,4,5])

// Prohibido usar arguments
// function sum():number{
//     return Array.from(arguments).reduce((total,n)=>total+n,0)
// }
// sum(1,2,3,4,5)

// Se resolvería
function sum(...numbers: number[]){
    return numbers.reduce((total,n)=>total+n,0)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13))

console.log("Hola","Tzuzul","Mensaje")

console.log(
    add(10,20),
    add.apply(null,[10,20]),
    add.call(null,10,20),
    add.bind(null,10,20)()
)

// Investigar bind, call y apply

// let x ={
//     a(){
//         return this
//     }
// }

// console.log(x.a())
// let funcion = x.a
// console.log(funcion())

function printMessage(this: User,message:string){
    console.log(message,this.name)
}

// Esto no es correcto
// printMessage("Hola")

printMessage.call({
    name:"Tzuzul",
    id:"abc123"
},"Hola")

// Generadors: generators
function* createFibonacci(){ // Esto es un generador
    let a = 0
    let b = 1

    while(true){ // Ciclo infinito
        yield a; //Return, pero con pausa
        // let aux = a
        // a = b 
        // b = aux + b
        [a, b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacci()

fibonacciGenerator.next() //0
fibonacciGenerator.next() //1
fibonacciGenerator.next() //1
fibonacciGenerator.next() //2
fibonacciGenerator.next() //3
console.log(fibonacciGenerator.next()) //5
console.log(fibonacciGenerator.next()) //8

// Utilizar un generador para generar esta serie: 1,2,3,4,5,6,7...

// Iterable: Cualquier objeto que contenga una propiedad llamada Symbol.iterator
// Iterador: Cualquier objeto que define un método llamado next

let numbersIterable = {
    *[Symbol.iterator](){
        for(let n=1;n<=10;n++){
            yield n
        }
    }
} // Arreglo

for(let n of numbersIterable){
    console.log(n)
}

const arrayIterable = [1,2,3,4,5]

for(let n of arrayIterable){
    console.log(n)
}

// Iterable -> spread operator, destructuring
let allNumbersIterator = [...numbersIterable]
let [one,two,...rest] = numbersIterable

// Reto: Crear un iterable con los primeros 10 numeros de la serie de fibonacci

// Call Signatures
console.log(typeof greet) // (name:string)=>string

// type Callback = (message:string) => void
type Callback = {
    // (message:string): void
    // Overload: sobrecarga
    (message:string, number: number):void
    (message:string, number: number, id:string):void
    (message:string, date:Date, id:string):void

    // Nota: Cuando se tiene sobrecarga, el tipo se trabaja como union
}

function showDate(callback:Callback){
    callback("Hola",123,"123abc")
}

// Contextual typing
arrayIterable.map(n=>n*2)


showDate((message,numberOrDate: Date | number,id?)=>{
    console.log(message,numberOrDate,id)
})


// Reto:
// Polimorfismo
// Generics
