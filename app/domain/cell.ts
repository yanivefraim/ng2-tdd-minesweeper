// import {board} from 'board';

// export class Cell {
//   private revealed: boolean;
//   private flagged: boolean;
//   private mine: boolean;

//   constructor(private board: Board, cell: CellDTO,
//     public rowIndex: number, public colIndex: number) {
//     this.revealed = !!cell.revealed;
//     this.flagged = !!cell.flagged;
//     this.mine = !!cell.mine;
//   }

//   reveal() {
//     if (this.isRevealed() || this.isFlagged()) {
//       return;
//     }
//     this.revealed = true;
//     if (!this.mine && this.getSurroundingMineCount() === 0) {
//       this.board.getSurroundingCells(this).forEach(cell => cell.reveal());
//     }
//   }

//   isRevealed(): boolean {
//     return this.revealed;
//   }

//   flag() {
//     if (!this.isRevealed()) {
//       this.flagged = !this.flagged;
//     }
//   }

//   isFlagged(): boolean {
//     return this.flagged;
//   }

//   isMine(): boolean {
//     return this.mine;
//   }

//   getValue(): string {
//     if (this.isMine()) {
//       return '*';
//     } else {
//       let mines = this.getSurroundingMineCount();
//       return (mines ? mines + '' : '');
//     }
//   }

//   serialize(): CellDTO {
//     let cell = new CellDTO();
//     cell.revealed = this.revealed;
//     cell.flagged = this.flagged;
//     cell.mine = this.mine;
//     return cell;
//   }

//   private getSurroundingMineCount(): number {
//     let cells = this.board.getSurroundingCells(this);
//     return cells.filter(cell => cell.isMine()).length;
//   }

// }
