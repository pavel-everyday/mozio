import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './pages/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
    // InputStylizerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
  ],
  exports: [
    // InputStylizerDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
