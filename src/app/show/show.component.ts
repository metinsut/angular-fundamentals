import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../models/hero';
import { HomeService } from '../services/home.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-show',
   templateUrl: './show.component.html',
   styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, OnDestroy {
   heroes: Hero[] = [];
   private subscription: Subscription;
   constructor(private homeService: HomeService) {}

   ngOnInit() {
      this.heroes = this.homeService.getHero();
      this.homeService.heroChanged.subscribe(data => {
         this.heroes = data;
      });
   }
   ngOnDestroy() {
      if (this.subscription) {
         this.subscription.unsubscribe();
      }
   }
}
