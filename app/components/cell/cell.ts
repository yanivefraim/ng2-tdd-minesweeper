import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'cell',
  properties: ['data']
})
@View({
  templateUrl: './components/cell/cell.html'
})
export class Cell {
}
