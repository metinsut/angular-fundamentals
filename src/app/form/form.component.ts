import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
   selector: 'app-form',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
   @ViewChild('form')
   signupForm: NgForm;
   @ViewChild('email')
   emailInput: NgModel;
   defaultValue = 'teacher';
   genders = ['male', 'female'];
   constructor() {}

   ngOnInit() {}

   // onSubmit = (form: NgForm) => {
   //    console.log(form);
   // }
   onSubmit = () => {
      console.log(this.signupForm);
      console.log(this.emailInput);
   }
   setForm = () => {
      const suggestName = 'John Doe';
      const suggestEmail = 'john@doe.com';

      this.signupForm.form.patchValue({
         userDetail: {
            username: suggestName,
            email: suggestEmail
         }
      });
      // this.signupForm.form.setValue({
      //    userDetail: {
      //       username: suggestName,
      //       email: suggestEmail
      //    }
      // });
   }

   resetForm = () => {
      this.signupForm.reset();
   }
}
