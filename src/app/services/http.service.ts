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

   constructor(private http: HttpClient) {}

   delayApi3() {
      const promise = this.http.post(this.url3, null);
      return promise;
   }

   delayApi4 = () =>
      new Promise((resolve, reject) => {
         this.http.post(this.url4, null).subscribe(res => resolve(res));
      })

   delayApi5(data) {
      const promise = fetch(this.url5, { method: 'post', body: data });
      return promise;
   }
}
