import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighLightDirective } from './events/high-light.directive';

@NgModule({
    declarations: [AppComponent, HomeComponent, DetailComponent, DirectiveComponent, HighLightDirective],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
