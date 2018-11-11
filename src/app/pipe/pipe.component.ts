import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-pipe',
   templateUrl: './pipe.component.html',
   styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
   persons = [
      {
         id: 1,
         name: 'John',
         age: 31,
         city: 'neverland',
         large: 'bekleyebilirmisin?'
      },
      { id: 2, name: 'Durzo', age: 41, city: 'superland', large: 'bekle?' },
      {
         id: 2,
         name: 'Şaban',
         age: 21,
         city: 'loverland',
         large: 'Beklesenenize!'
      }
   ];

   constructor() {}
   ngOnInit() {}
}
