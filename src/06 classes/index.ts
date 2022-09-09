// Representar el juego de Ajedrez

type Color = 'black' | 'white'
type File = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game{
    private pieces = Game.makePieces()

    // Static: Significa que no es necesario instanciar la clase para utilizar el método
    // Cuando se combina private y static significa que será un método que ejecutaremo al momento de instanciar la clase
    // Método de un solo uso
    private static makePieces(){
        return [
            new King('white','E',1),
            new King('black','E',8),
            new Queen('white','D',1),
            new Queen('black','D',8),
            // Reto: Agregar las piezas al tablero
            
        ]
    }
}

const game = new Game()


abstract class Piece{
    protected position: Position
    constructor(
        private readonly color:Color,
        file:File,
        rank:Rank
    ){
        this.position = new Position(file,rank)
    }

    // Implementación por defecto. Pero se puede sobreescribir
    moveTo(position:Position){
        this.position = position
    }

    // abstract: Le dice a las subclases que tienen que implementar este método. Siguiendo la firma dada.
    abstract canMoveTo(position:Position):boolean
}

class Position{
    constructor(
        private file:File,
        private rank:Rank
    ){}

    distanceFrom(position:Position){
        return {
            rank: Math.abs(position.rank-this.rank),
            file: Math.abs(position.file.charCodeAt(0)-this.file.charCodeAt(0)),
        }
    }
}

class King extends Piece {
    // Implementación del método abstracto
    canMoveTo(position: Position): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.rank<2 && distance.file<2
    }
}

// Reto: Implementar la clase abstracta Piece
class Queen extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}
class Bishop extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}
class Knight extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}
class Rook extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}
class Pawn extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.")
    }
}