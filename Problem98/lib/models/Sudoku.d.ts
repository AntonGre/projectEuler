export interface Sudoku {
    name: string;
    board: Cell[];
}
export interface Cell {
    value: number;
    potentialValues: number[];
    x: number;
    y: number;
}
export interface Placement {
    cells: Cell[];
}
