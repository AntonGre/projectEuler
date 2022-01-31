"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const fs = require("fs");
class FileService {
    static importSudoku(filepath) {
        const content = fs.readFileSync(filepath, 'utf8');
        let rows = content.split("\n");
        let length = 10;
        let count = 0;
        const sudokuArray = new Array();
        while (rows[length * count]) {
            let sudoku = {
                name: "",
                board: []
            };
            for (let i = 0; i < length; i++) {
                const row = rows[length * count + i];
                if (row === null || row === void 0 ? void 0 : row.startsWith("Grid")) {
                    sudoku.name = row;
                }
                else {
                    const intRow = row.split('').filter(x => x).map(x => parseInt(x));
                    intRow.pop();
                    for (const [y, number] of intRow.entries()) {
                        const potentialValues = number ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        let cell = {
                            value: number,
                            potentialValues: [],
                            x: i - 1,
                            y: y,
                        };
                        sudoku.board.push(cell);
                    }
                }
            }
            sudokuArray.push(sudoku);
            count++;
        }
        return sudokuArray;
    }
}
exports.FileService = FileService;
//# sourceMappingURL=fileService.js.map