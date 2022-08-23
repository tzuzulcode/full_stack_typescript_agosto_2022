// Intermission: Type alliases, unions e intersections

// Type alliases
type Age = number

type Person = {
    name: string
    age: Age
}

let persona1: Person = {
    name:"Tzuzul",
    age: 24
}

let persona2: Person = {
    name:"Tzuzul",
    age: 24
}


if(Math.random()<0.5){
    type Person = {
        nombre:string,
        edad:Age
    }
    
}

//Union e intersección
// | &

type Cat = {
    name:string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type CatOrDogOrBoth = Cat | Dog // union
type CatAndDog = Cat & Dog // intersection

// Cat
let myCat : CatOrDogOrBoth = {
    name:"Michi",
    purrs:true
}

// Dog
let myDog : CatOrDogOrBoth = {
    name:"Dog 1",
    barks: true,
    wags: true
}

// Cat and Dog
let myCatDog : CatOrDogOrBoth = {
    name:"Dog 1",
    purrs:true,
    barks: true,
    wags: true
}

let myCat2: CatAndDog = {
    name:"Michi 2",
    purrs:true,
    barks: true,
    wags: true
}

function trueOrNull(isTrue: boolean){
    if(isTrue){
        return 'Is true'
    }

    return null
}

type Returns = string | null

function aOrB(a:string,b:number){
    return a || b
}

// Arrays
let numbers: number[] = [1,2,3]
const strings: string[] = ["a","b","c"]

let numbersAndStrings: (string|number)[] = [1,"a",2,"b",3,"c"]

let numbersStringAndBooleans : (string|number|boolean)[] = [1,"Abc",true]

// numbersAndStrings.push(false) // No se puede realizar
numbersAndStrings.push("Hola") 

numbersAndStrings.map(value=>{
    if(typeof value === "number"){
        return value*3
    }

    return value.toUpperCase()
})

function completeArray(){
    let array = []
    array.push(1)
    array.push("string")

    return array
}

let newArray = completeArray()
// newArray.push(true) // No esta permitido

// Tupla o tuple de [string,string,number]
// let tuple: [string,string,number?] = ["Tzuzul", "Code", 24]

// let tuple: ([string,string] | [string,string,number])

// Tuplas aceptan rest elements
let friends: [string,...string[]] = ["Juanito","Pablito"]

// Read only arrays
// let readonlyArray: readonly number[] = [10,9,8,7]
// let readonlyArray: Readonly<number[]> = [10,9,8,7]

// readonlyArray[0] = 12 // No se permite

// null, undefined, void, never

// null:
function returnNull(value:number){
    if(value<10){
        return value
    }

    return null
}

// undefined:
function returnUndefined(){
    return undefined
}

// void
function returnVoid(){
    let operacion = 2 + 2
}

// never
function returnNever(){
    throw TypeError("Errooooor!!!")
}

// function infiteFunction(){
//     // while(true){
//     //     console.log("Hola")
//     // }
// }

// let neverValue:never = returnNever()

//  Enum -> lista de opciones disponibles
enum Language {
    JavaScript = "JAVASCRIPT",
    TypeScript = "TYPESCRIPT",
    Python = "PYTHON",
    Golang = "GOLANG",
    C = "C"
}

let myFirstLanguage = Language.JavaScript
let mySecondLanguage = Language["C"]

console.log(myFirstLanguage)


//Ejercicios
// 1.- Para cada uno de estos valores, ¿qué tipo inferirá TypeScript?
// let a = 1042
// let b = 'apples and oranges'
// const c = 'pineapples'
// let d = [true, true, false]
// let e = {type: 'ficus'}
// let f = [1, false]
// const g = [3]
// let h = null

// 2.- ¿Por qué cada uno de estos arroja el error que hace?
// let i:3 = 3
// i = 4

// let j = [1, 2, 3]
// j.push(4)
// j.push('5')

// let k:never = 4

// let l:unknown = 4
// let m = l * 2