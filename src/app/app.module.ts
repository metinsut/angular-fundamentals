import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { HomeService } from './services/home.service';
import { HttpComponent } from './http/http.component';
import { HttpService } from './services/http.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PromiseComponent } from './promise/promise.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipePipe } from './pipe.pipe';
import { DoublePipe } from './double.pipe';
import { HttpClientComponent } from './http-client/http-client.component';

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
      ShowComponent,
      HttpComponent,
      ReactiveFormComponent,
      PromiseComponent,
      PipeComponent,
      PipePipe,
      DoublePipe,
      HttpClientComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [HomeService, HttpService],
   bootstrap: [AppComponent]
})
export class AppModule {}
