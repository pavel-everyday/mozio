import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CitySuggest } from 'src/app/services/city-suggest.service';

import { MainPageComponent } from './main-page.component';
import { RouteFormModule } from './route-form/route-form.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [BrowserModule, RouteFormModule],
  providers: [CitySuggest],
})
export class MainPageModule {}
