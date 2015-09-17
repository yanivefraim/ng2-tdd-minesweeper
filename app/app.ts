import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {Board} from './components/board/board';
// import {HTTP_BINDINGS} from 'http/http';

import {About} from './components/about/about';
import {NamesList} from './services/NameList';

@Component({
  selector: 'app',
  viewBindings: [NamesList]
})
@RouteConfig([
  { path: '/', component: Board, as: 'board' },
  { path: '/about', component: About, as: 'about' }
])
@View({
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS]);
