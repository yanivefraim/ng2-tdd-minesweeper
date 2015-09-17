// import {cell} from 'cell';

// export class Board {
//   cells: Cell[][];

//   constructor(cells: CellDTO[][]) {
//     this.cells = cells.map((row, rowIndex) => row.map((cell, colIndex) => {
//       return new Cell(this, cell, rowIndex, colIndex);
//     }));
//   }

//   serialize(): CellDTO[][] {
//     return this.cells.map(row => row.map(cell => cell.serialize()));
//   }

//   private getSafeCell(cell: Cell, rowDiff: number, colDiff: number): Cell {
//     return this.cells[cell.rowIndex + rowDiff] &&
//       this.cells[cell.rowIndex + rowDiff][cell.colIndex + colDiff];
//   }

//   private allCells(): Cell[] {
//     return this.cells.reduce((prev, row) => prev.concat(row), []);
//   }

//   getSurroundingCells(cell: Cell): Cell[] {
//     return [
//       this.getSafeCell(cell, -1, -1),
//       this.getSafeCell(cell, -1, +0),
//       this.getSafeCell(cell, -1, +1),
//       this.getSafeCell(cell, +0, -1),
//       this.getSafeCell(cell, +0, +1),
//       this.getSafeCell(cell, +1, -1),
//       this.getSafeCell(cell, +1, +0),
//       this.getSafeCell(cell, +1, +1)
//     ].filter(x => !!x);
//   }

//   isLost(): boolean {
//     return this.allCells().some(cell => cell.isMine() && cell.isRevealed());
//   }

//   isWon(): boolean {
//     return this.allCells().every(cell => cell.isMine() !== cell.isRevealed());
//   }
// }
