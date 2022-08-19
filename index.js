// Type safety: Prevenir que los programas hagan cosas invalidas

console.log(typeof (3+[])) //"3"  -> Error

let objeto = {}

console.log(objeto.propiedad) // Error

function operacion(numero){
    return numero/2
}

console.log(operacion("abc")) //Error

let name = "Tzuzul"
let nullType = null
// let numero:number = 3