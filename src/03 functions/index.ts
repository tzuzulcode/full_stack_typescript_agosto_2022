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
