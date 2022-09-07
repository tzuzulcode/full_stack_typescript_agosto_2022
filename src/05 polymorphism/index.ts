// Realizar una estructura de árbol

type TreeNode = {
    value: (number| string)
}

type LeafNode = TreeNode & {
    isLeaf:true
}

type InnerNode = TreeNode & {
    children:[TreeNode] | [TreeNode,TreeNode]
}

type Human = {
    name:string
}

let node1: TreeNode = {
    value:1
}
let node4: LeafNode = {
    value:4,
    isLeaf:true
}
let node5: LeafNode = {
    value:5,
    isLeaf:true
}
let node6: LeafNode = {
    value:6,
    isLeaf:true
}
let node2: InnerNode = {
    value:2,
    children:[node4,node5]
}
let node3: InnerNode = {
    value:3,
    children:[node6]
}

let juanito:Human = {
    name:"Juanito"
}

// Objetivo: Hacer un mapping de un nodo del arbol

function mapNode<T extends TreeNode>(node:T,f:(value:(number|string))=>string):T{
    // Aquí el nodo se procesa con polimorfismo
    return {
        ...node,
        value: f(node.value)
    }
}

const newNode = mapNode(node3,(value)=>"Value: "+value)
newNode.children

console.log(newNode)
// const newNode2 = mapNode(juanito,(value)=>"Value: "+value)