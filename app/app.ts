import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {Board} from './components/board/board';
// import {HTTP_BINDINGS} from 'http/http';


@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/', component: Board, as: 'board' }
])
@View({
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS]);
