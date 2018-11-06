import { Component, OnInit } from '@angular/core';
import {
   FormGroup,
   FormControl,
   Validators,
   FormArray,
   FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-reactive-form',
   templateUrl: './reactive-form.component.html',
   styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
   genders = ['male', 'female'];
   profileForm: FormGroup;
   allowUser = ['Fırat', 'Pınar', 'Didem', 'Defne'];

   constructor(private fb: FormBuilder) {}

   ngOnInit() {
      this.profileForm = this.fb.group({
         userData: this.fb.group({
            username: this.fb.control(null, [
               Validators.required,
               Validators.minLength(4),
               this.forbidenNames.bind(this)
            ]),
            email: this.fb.control(
               null,
               [Validators.required, Validators.minLength(4)],
               this.forbiddenEmails.bind(this)
            )
         }),
         gender: this.fb.control('male', [Validators.required]),
         hobbies: this.fb.array([])
      });
      this.profileForm.valueChanges.subscribe(value => console.log(value));
      this.profileForm.statusChanges.subscribe(status => console.log(status));
      // this.profileForm.setValue({
      //    userData: {
      //       username: 'Metin',
      //       email: 'metin@sut.com'
      //    },
      //    gender: 'male',
      //    hobbies: []
      // });
      this.profileForm.setValue({
         userData: {
            username: 'Metin',
            email: 'metin@sut.com'
         },
         gender: 'male',
         hobbies: []
      });
   }

   onSubmit = () => {
      console.log(this.profileForm);
      // this.profileForm.reset();
   }

   get hobbiess() {
      return this.profileForm.get('hobbies') as FormArray;
   }

   addHobby() {
      this.hobbiess.push(this.fb.control(''));
   }

   // addHobby = () => {
   //    const control = new FormControl(null, Validators.required);
   //    (<FormArray>this.profileForm.get('hobbies')).push(control);
   //    console.log(this.profileForm);
   // }

   forbidenNames = (control: FormControl): { [s: string]: boolean } => {
      if (this.allowUser.indexOf(control.value) !== -1) {
         return { nameisforbbiden: true };
      }
      return null;
   }
   forbidenEmail = (control: FormControl): Promise<any> | Observable<any> => {
      const promise = new Promise<any>((resolve, reject) => {
         setTimeout(() => {
            if (control.value === 'test@test.com') {
               resolve({ emailisforbbiden: true });
            } else {
               resolve(null);
            }
         }, 2000);
      });
      return promise;
   }

   forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      });
      return promise;
    }

}
