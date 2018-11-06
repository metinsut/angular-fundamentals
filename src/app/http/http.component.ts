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
   intervalStatus;
   time = 0;

   constructor(private httpSer: HttpService) {}

   ngOnInit() {}

   // getApi = async () => {
   //    await this.httpSer.delayApi3().subscribe(res => console.log(res));
   //    console.log('okay');
   // }

   getApi = async () => {
      this.startTime();
      console.log(this.time);
      await this.random2();
      console.log(this.time);
      await this.random1();
      console.log(this.time);
      const data = await this.httpSer.delayApi4();
      console.log(data);
      console.log(this.time);
      this.stopTime();
   }

   // getApi = async () => {
   //    await this.httpSer
   //       .delayApi5(null)
   //       .then(res => res.json())
   //       .then(res => console.log(res));
   //    console.log('okay');
   // }

   random1 = () => {
      return new Promise((resolve, reject) => {
         this.httpSer
            .delayApi5()
            .then(res => res.json())
            .then(res => (resolve(res), console.log('random1', res)));
      });
   }
   random2 = () => {
      this.httpSer
         .delayApi10()
         .then(res => res.json())
         .then(res => console.log('random2', res));
   }

   startTime = () => {
      this.intervalStatus = setInterval(() => this.time++, 1000);
   }

   stopTime = () => {
      clearInterval(this.intervalStatus);
      this.time = 0;
   }
}
