import {
   Component,
   OnInit,
   Output,
   EventEmitter,
   ViewChild,
   ElementRef
} from '@angular/core';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   @Output()
   runFunc = new EventEmitter<{ e: any; name: string }>();
   newName: string;

   @ViewChild('nameRef')
   inputRef: ElementRef;
   constructor() {}

   ngOnInit() {}

   runAddHero = e => {
      this.runFunc.emit({ e, name: this.newName });
   }
   runAddHeroRef = (e, ref) => {
      this.runFunc.emit({ e, name: ref.value });
   }
}
