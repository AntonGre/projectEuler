import { Cell, Sudoku } from "../models/Sudoku";

export class SudokuService {

    private static sudoku: Sudoku;
    private static placements: Cell[][];

    public static solve(sudoku: Sudoku): Sudoku {

        const board = [...sudoku.board];
        this.sudoku = { name: sudoku.name, board: board }
        // const placements = groupBy(board, "");

        this.placements = []

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.placements.push(this.sudoku.board.filter(boardCell =>
                    boardCell.x >= 3 * i && boardCell.x < 3 + (3 * i) &&
                    boardCell.y >= 3 * j && boardCell.y < 3 + (3 * j)));
            }
        }

        let isSolved = false
        while (!isSolved) {
            let hasChanged = false

            for (let i = 0; i < this.placements.length; i++) {
                const placement = this.placements[i];

                for (let numberToInsert = 1; numberToInsert < 10; numberToInsert++) {
                    const checkChanged = this.check(placement, numberToInsert);
                    hasChanged ||= checkChanged;
                }
            }

            const checkPotential = this.checkPotentialValues(this.sudoku.board);
            hasChanged ||= checkPotential;

            // check isSolved or repeat
            isSolved = this.sudoku.board.findIndex(x => x.value === 0) === -1
            if (!hasChanged) {
                throw this.sudoku.board;
            }
        }

        return {
            name: sudoku.name,
            board: board
        };
    }

    private static checkPotentialValues(board: Cell[]) {
        let cells = board.filter(cell => cell.potentialValues.length === 1);

        for (let cell of cells) {
            cell.value = cell.potentialValues.pop() as number;
        }

        return cells.length > 0;
    }

    // returns true
    private static check(placement: Cell[], numberToInsert: number): boolean {
        if (this.isInBox(numberToInsert, placement)) {
            return false
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
                    place.potentialValues.splice(index, 1)
                }
            }

        } else {
            this.addPotentialValue(numberToInsert, placement);
        }

        return placement.length === 1;
    }

    private static addPotentialValue(value: number, placement: Cell[]) {
        for (let cell of placement) {
            if (cell.potentialValues.findIndex(x => x === value) === -1) {
                cell.potentialValues.push(value);
            }
        }
    }

    private static filterVertical(value: number, placement: Cell[]): Cell[] {
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
                        placement = placement.filter(cell => cell.x !== vPlacements[0].x)
                    }
                }
            }
        }

        return placement
    }

    private static filterHorizontal(value: number, placement: Cell[]): Cell[] {
        let distinctValues = placement.map(x => x.y).filter((v, i, a) => a.indexOf(v) === i);
        let removedValues = this.sudoku.board.filter(cell => cell.value === value && distinctValues.findIndex(x => x === cell.y) > -1)
        placement = placement.filter(cell => removedValues.findIndex(rCell => rCell.y === cell.y) === -1);

        if (placement.length > 1) {
            let verticalPlacements = this.placements
                .filter(cells => cells.find(cell => placement.find(p => p.y === cell.y)))
                .filter(cells => cells.filter(cell => cell.y === placement[0].y).length === 0)
                .filter(cells => cells.find(cell => cell.potentialValues.find(val => val === value)))

            if (verticalPlacements.length > 0) {
                for (let vPlacements of verticalPlacements) {
                    vPlacements = vPlacements.filter(cell => cell.potentialValues.find(val => val === value));
                    let isSameLine = vPlacements.every(v => v.y === placement[0].y) && vPlacements.length > 0;
                    if (isSameLine) {
                        placement = placement.filter(cell => cell.y !== vPlacements[0].y)
                    }
                }
            }
        }

        return placement
    }

    private static isInBox(number: number, placement: Cell[]): boolean {
        return placement.findIndex(x => x.value === number) > -1;
    }
}