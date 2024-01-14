import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './main-page.component';
import { RouteFormModule } from './route-form/route-form.module';

@NgModule({
  declarations: [
    MainPageComponent,
],
  imports: [
    BrowserModule,
    RouteFormModule
  ],
  providers: [],
})
export class MainPageModule { }
