// Concrete types: 
// boolean
// string
// Date[]

type Filter = {
    <T>(array:T[],f:(item:T)=>boolean):T[]
}

const filter:Filter = (array,f)=>{
    let result = []

    for(let i =0;i<array.length;i++){
        let item = array[i]

        if(f(item)){
            result.push(item)
        }
    }

    return result
}

filter([1,2,3,4,5],(item)=>item<4) //[1,2,3]
filter(["a","b","b","c","d"],(item)=>item!=="c") //[1,2,3]
filter([{name:"Tzuzul"},{name:"Juanito"}],(item)=>item.name!=="Tzuzul") //[1,2,3]

// Bound -> En qué momento enlaza el tipo
// Para funciones: El bound se agrega al momento de ejecución
// Para class: El bound se agrega al momento de instanciarla
// Type Alias: Cuando se implementan o definen
// Interfaces: Cuando se implementan o definen

// Implementar la función de map -> map([1,2,3,4,5],item=>item*5)