import {
AsyncTestCompleter,
TestComponentBuilder,
By,
beforeEach,
ddescribe,
describe,
el,
expect,
iit,
inject,
it,
xit,
} from 'angular2/test';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {Board} from './board';
import {MineService} from '../../services/MineService';

export function main() {
    describe('Board component', () => {
        it('should apply cells correctly', () => {
          let testArray = [[1, 1], [1, 1], [1, 1]];
          let mockservice: any = {
              generate: () => {
                  return testArray;
              }
          };

          let board = new Board(mockservice);
          expect(board.cells).toEqual(testArray);
        });
        it('should generate component cells',
          inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
            tcb.overrideTemplate(TestComponent, '<div><board></board></div>')
              .createAsync(TestComponent)
              .then((rootTC) => {
                rootTC.detectChanges();

                let boardInstance = rootTC.componentViewChildren[0].componentInstance;
                let boardDOMEl = rootTC.componentViewChildren[0].nativeElement;
                let mineRowsLen = () => {
                  return boardInstance.cells.length;
                }
                let mineCellsLen = () => {
                    return boardInstance.cells[0].length * mineRowsLen();
                }

                expect(DOM.querySelectorAll(boardDOMEl, 'tr').length).toEqual(mineRowsLen());

                expect(DOM.querySelectorAll(boardDOMEl, 'td').length).toEqual(mineCellsLen());

                async.done();
              });
          }));
    });
};

@Component({ selector: 'test-cmp' })
@View({ directives: [Board] })
class TestComponent { }
