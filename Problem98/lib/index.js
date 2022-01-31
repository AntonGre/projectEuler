"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SudokuService_1 = require("./service/SudokuService");
const fileService_1 = require("./service/fileService");
(() => {
    const sudokuPath = process.cwd() + "/assets/soduku.txt";
    let sudokuArray = fileService_1.FileService.importSudoku(sudokuPath);
    let solveCount = 0;
    for (const sudoku of sudokuArray) {
        console.log(`solving sudoku ${sudoku.name}..`);
        try {
            let solvedBoard = SudokuService_1.SudokuService.solve(sudoku);
            console.log(solvedBoard);
            solveCount++;
        }
        catch (e) {
            console.error(`failed solving grid - ${e.filter((x) => x.value === 0).length}`);
        }
    }
    console.log(`Solved ${solveCount} of ${sudokuArray.length}`);
})();
//# sourceMappingURL=index.js.map