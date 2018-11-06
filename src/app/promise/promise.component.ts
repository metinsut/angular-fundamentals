import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
   selector: 'app-promise',
   templateUrl: './promise.component.html',
   styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
   constructor(private httpSer: HttpService) {}

   ngOnInit() {
      this.onStart();
   }
   onStart = () => {
      const promise1 = this.httpSer.delayApi4();
      const promise2 = this.httpSer.delayApi5();
      const promise3 = this.httpSer.delayApi6();
      Promise.all([promise1, promise2, promise3])
         .then(values => {
            console.log(values);
         })
         .catch(reason => console.log(reason));
      console.log(promise2);
   }
}
