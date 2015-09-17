import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {MineService} from '../../services/MineService'
import {Cell} from '../cell/cell'

@Component({
  selector: 'board',
  viewBindings: [MineService]
})
@View({
  templateUrl: './components/board/board.html',
  directives: [CORE_DIRECTIVES, Cell]
})
export class Board {
  cells;
  constructor (mineService: MineService) {
    this.cells = mineService.generate();
  }
}
