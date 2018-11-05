import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { FormComponent } from './form/form.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
   { path: 'add', component: AddComponent },
   { path: 'show', component: ShowComponent },
   { path: 'directive', component: DirectiveComponent },
   { path: 'form', component: FormComponent },
   { path: 'http', component: HttpComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
