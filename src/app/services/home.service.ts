import { Hero } from '../models/hero';
import { Subject } from 'rxjs';

export class HomeServie {
   heroChanged = new Subject<Hero[]>();
   private heroes: Hero[] = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
   ];

   getHero = () => {
      return [...this.heroes];
   }

   addHero = data => {
      this.heroes = [...this.heroes, new Hero(2, data)];
      this.heroChanged.next([...this.heroes]);
   }
}
