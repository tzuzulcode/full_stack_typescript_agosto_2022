// Representar el juego de Ajedrez

type Color = 'black' | 'white'
type File = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game{}

abstract class Piece{
    protected position: Position
    constructor(
        private readonly color:Color,
        file:File,
        rank:Rank
    ){
        this.position = new Position(file,rank)
    }
}

class Position{
    constructor(
        private file:File,
        private rank:Rank
    ){}
}

class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Pawn extends Piece {}