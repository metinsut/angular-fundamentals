import { Component } from '@angular/core';

import { Hero } from './models/hero';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'Tour of Heroes';
   heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
   ];
   addHero = data => {
      this.heroes = [...this.heroes, new Hero(2, data.name)];
   }
}
