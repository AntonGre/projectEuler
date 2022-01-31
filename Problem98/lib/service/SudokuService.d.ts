import { Sudoku } from "../models/Sudoku";
export declare class SudokuService {
    private static sudoku;
    private static placements;
    static solve(sudoku: Sudoku): Sudoku;
    private static checkPotentialValues;
    private static check;
    private static addPotentialValue;
    private static filterVertical;
    private static filterHorizontal;
    private static isInBox;
}
