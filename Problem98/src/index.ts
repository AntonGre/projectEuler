import { SudokuService } from './service/SudokuService';
import { FileService } from "./service/fileService";
import { Sudoku } from './models/Sudoku';

(() => {
    const sudokuPath = process.cwd() + "/assets/soduku.txt";
    let sudokuArray = FileService.importSudoku(sudokuPath);

    let solveCount = 0;

    for (const sudoku of sudokuArray) {
        console.log(`solving sudoku ${sudoku.name}..`)
        try {
            let solvedBoard = SudokuService.solve(sudoku)
            console.log(solvedBoard);
            solveCount++;
        } catch (e: any) {

            console.error(`failed solving grid - ${e.filter((x: { value: number; }) => x.value === 0).length}`)
        }
    }
    console.log(`Solved ${solveCount} of ${sudokuArray.length}`)
})();







