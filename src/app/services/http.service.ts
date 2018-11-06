import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class HttpService {
   base = 'http://localhost:3400/';
   url = 'http://localhost:3400/delay';
   url1 = 'http://localhost:3400/delay/1';
   url2 = 'http://localhost:3400/delay/2';
   url3 = 'http://localhost:3400/delay/3';
   url4 = 'http://localhost:3400/delay/4';
   url5 = 'http://localhost:3400/delay/5';
   url6 = 'http://localhost:3400/delay/6';
   url10 = 'http://localhost:3400/delay/10';

   constructor(private http: HttpClient) {}

   delayApi2() {
      return this.http.post(this.url2, null);
   }

   delayApi3 = () => {
      console.log('delayApi4->Started');
      return new Promise((resolve, reject) => {
         this.http.post(this.url3, null).subscribe(res => resolve(res));
      });
   }

   delayApi4() {
      console.log('delayApi4->Started');
      return fetch(this.url4, { method: 'post' });
   }
   delayApi5() {
      console.log('delayApi5->Started');
      const data = fetch(this.url5, { method: 'post' });
      console.log('delayApi5->Finished');
      return data;
   }
   delayApi6() {
      console.log('delayApi6->Started');
      return fetch(this.url6, { method: 'post' });
   }
   delayApi10() {
      console.log('random2->Started');
      return fetch(this.url10, { method: 'post' });
   }
}
