import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
   selector: 'app-add',
   templateUrl: './add.component.html',
   styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   constructor(private homeService: HomeService) {}
   newName: string;
   ngOnInit() {}

   runAddHero = () => {
      this.homeService.addHero(this.newName);
   }
}
