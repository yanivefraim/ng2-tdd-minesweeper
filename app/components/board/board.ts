import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {MineService} from '../../services/MineService'

@Component({
  selector: 'board',
  viewBindings: [MineService]
})
@View({
  templateUrl: './components/board/board.html',
  directives: [CORE_DIRECTIVES]
})
export class Board {
  cells;
  constructor (mineService: MineService) {
    this.cells = mineService.generate();
  }
}
