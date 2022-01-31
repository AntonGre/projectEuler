
export interface Sudoku {
    name: string;
    board: Cell[];
}

// type validNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 


export interface Cell {
    value: number;
    potentialValues: number[];
    x: number;
    y: number;
}

export interface Placement {
    cells: Cell[];
}