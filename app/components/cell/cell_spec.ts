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
import {Cell} from './cell';

export function main() {
  describe('Cell component', () => {

    it('should draw cell',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><cell [data]=1></cell></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();

            let cellInstance = rootTC.componentViewChildren[0].componentInstance;
            let cellDOMEl = rootTC.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(cellDOMEl, 'div')[0].innerText).toEqual('1');

            async.done();
          });
      }));
  });
};

@Component({ selector: 'test-cmp' })
@View({ directives: [Cell] })
class TestComponent { }
