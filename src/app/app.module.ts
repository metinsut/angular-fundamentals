import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighLightDirective } from './events/high-light.directive';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { HomeServie } from './services/home.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      DetailComponent,
      DirectiveComponent,
      HighLightDirective,
      HeaderComponent,
      FormComponent,
      AddComponent,
      ShowComponent
   ],
   imports: [BrowserModule, AppRoutingModule, FormsModule],
   providers: [HomeServie],
   bootstrap: [AppComponent]
})
export class AppModule {}
