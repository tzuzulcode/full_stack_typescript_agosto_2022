const Person = require("./Person")

function printMessage(message){
    console.log(message,this)
}

const objeto = {
    name:"Tzuzul",
    country:"México"
}

// Imprimirá el this
// printMessage("Hola")
printMessage.apply(objeto,["Apply"])
printMessage.call(objeto,"Call")

let printMessageWithThis = printMessage.bind(objeto)
printMessageWithThis("Bind")

const tzuzul = new Person("Tzuzul")

let printName = tzuzul.printName.bind(tzuzul)

setTimeout(printName,2000)