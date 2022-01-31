"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SudokuService = void 0;
class SudokuService {
    static solve(sudoku) {
        const board = [...sudoku.board];
        this.sudoku = { name: sudoku.name, board: board };
        // const placements = groupBy(board, "");
        this.placements = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.placements.push(this.sudoku.board.filter(boardCell => boardCell.x >= 3 * i && boardCell.x < 3 + (3 * i) &&
                    boardCell.y >= 3 * j && boardCell.y < 3 + (3 * j)));
            }
        }
        let isSolved = false;
        while (!isSolved) {
            let hasChanged = false;
            for (let i = 0; i < this.placements.length; i++) {
                const placement = this.placements[i];
                for (let numberToInsert = 1; numberToInsert < 10; numberToInsert++) {
                    const checkChanged = this.check(placement, numberToInsert);
                    hasChanged || (hasChanged = checkChanged);
                }
            }
            const checkPotential = this.checkPotentialValues(this.sudoku.board);
            hasChanged || (hasChanged = checkPotential);
            // check isSolved or repeat
            isSolved = this.sudoku.board.findIndex(x => x.value === 0) === -1;
            if (!hasChanged) {
                throw this.sudoku.board;
            }
        }
        return {
            name: sudoku.name,
            board: board
        };
    }
    static checkPotentialValues(board) {
        let cells = board.filter(cell => cell.potentialValues.length === 1);
        for (let cell of cells) {
            cell.value = cell.potentialValues.pop();
        }
        return cells.length > 0;
    }
    // returns true
    static check(placement, numberToInsert) {
        if (this.isInBox(numberToInsert, placement)) {
            return false;
        }
        let potentialPlacement = placement.filter(x => !x.value);
        placement = [...potentialPlacement];
        placement = this.filterVertical(numberToInsert, placement);
        placement = this.filterHorizontal(numberToInsert, placement);
        if (placement.length === 1) {
            placement[0].value = numberToInsert;
            placement[0].potentialValues = [];
            for (let place of potentialPlacement) {
                const index = place.potentialValues.findIndex(x => x === numberToInsert);
                if (index > 0) {
                    place.potentialValues.splice(index, 1);
                }
            }
        }
        else {
            this.addPotentialValue(numberToInsert, placement);
        }
        return placement.length === 1;
    }
    static addPotentialValue(value, placement) {
        for (let cell of placement) {
            if (cell.potentialValues.findIndex(x => x === value) === -1) {
                cell.potentialValues.push(value);
            }
        }
    }
    static filterVertical(value, placement) {
        const distinctValues = placement.map(x => x.x).filter((v, i, a) => a.indexOf(v) === i);
        let removedValues = this.sudoku.board.filter(cell => cell.value === value && distinctValues.findIndex(x => x === cell.x) > -1);
        placement = placement.filter(cell => removedValues.findIndex(rCell => rCell.x === cell.x) === -1);
        if (placement.length > 1) {
            let verticalPlacements = this.placements
                .filter(cells => cells.find(cell => placement.find(p => p.x === cell.x)))
                .filter(cells => cells.filter(cell => cell.x === placement[0].x).length === 0)
                .filter(cells => cells.find(cell => cell.potentialValues.find(val => val === value)));
            if (verticalPlacements.length > 0) {
                for (let vPlacements of verticalPlacements) {
                    vPlacements = vPlacements.filter(cell => cell.potentialValues.find(val => val === value));
                    let isSameLine = vPlacements.every(v => v.x === placement[0].x) && vPlacements.length > 0;
                    if (isSameLine) {
                        placement = placement.filter(cell => cell.x !== vPlacements[0].x);
                    }
                }
            }
        }
        return placement;
    }
    static filterHorizontal(value, placement) {
        let distinctValues = placement.map(x => x.y).filter((v, i, a) => a.indexOf(v) === i);
        let removedValues = this.sudoku.board.filter(cell => cell.value === value && distinctValues.findIndex(x => x === cell.y) > -1);
        placement = placement.filter(cell => removedValues.findIndex(rCell => rCell.y === cell.y) === -1);
        if (placement.length > 1) {
            let verticalPlacements = this.placements
                .filter(cells => cells.find(cell => placement.find(p => p.y === cell.y)))
                .filter(cells => cells.filter(cell => cell.y === placement[0].y).length === 0)
                .filter(cells => cells.find(cell => cell.potentialValues.find(val => val === value)));
            if (verticalPlacements.length > 0) {
                for (let vPlacements of verticalPlacements) {
                    vPlacements = vPlacements.filter(cell => cell.potentialValues.find(val => val === value));
                    let isSameLine = vPlacements.every(v => v.y === placement[0].y) && vPlacements.length > 0;
                    if (isSameLine) {
                        placement = placement.filter(cell => cell.y !== vPlacements[0].y);
                    }
                }
            }
        }
        return placement;
    }
    static isInBox(number, placement) {
        return placement.findIndex(x => x.value === number) > -1;
    }
}
exports.SudokuService = SudokuService;
//# sourceMappingURL=SudokuService.js.map