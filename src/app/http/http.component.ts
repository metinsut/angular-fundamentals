import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
   selector: 'app-http',
   templateUrl: './http.component.html',
   styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
   result;
   result1;
   result2;

   constructor(private httpSer: HttpService) {}

   ngOnInit() {}

   // getApi = async () => {
   //    await this.httpSer.delayApi3().subscribe(res => console.log(res));
   //    console.log('okay');
   // }

   getApi = async () => {
      console.log('1');
      const data = await this.httpSer.delayApi4();
      console.log(data);
      console.log('2');
   }

   // getApi = async () => {
   //    await this.httpSer
   //       .delayApi5(null)
   //       .then(res => res.json())
   //       .then(res => console.log(res));
   //    console.log('okay');
   // }
}
