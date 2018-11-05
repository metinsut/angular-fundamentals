import { Component, OnInit } from '@angular/core';
import {
   FormGroup,
   FormControl,
   Validators,
   FormArray,
   FormBuilder
} from '@angular/forms';

@Component({
   selector: 'app-reactive-form',
   templateUrl: './reactive-form.component.html',
   styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
   genders = ['male', 'female'];
   profileForm: FormGroup;

   constructor(private fb: FormBuilder) {}

   ngOnInit() {
      this.profileForm = this.fb.group({
         userData: this.fb.group({
            username: this.fb.control(null, [
               Validators.required,
               Validators.minLength(4)
            ]),
            email: this.fb.control(null, [
               Validators.required,
               Validators.minLength(4)
            ])
         }),
         gender: this.fb.control('male', [Validators.required]),
         hobbies: this.fb.array([])
      });
   }

   onSubmit = () => {
      console.log(this.profileForm);
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
}
