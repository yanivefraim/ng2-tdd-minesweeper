export class MineService {
  mines = [[0, 0, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 1, 0], [0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0, 1]];

  generate() {
    return this.mines;
  }
}
