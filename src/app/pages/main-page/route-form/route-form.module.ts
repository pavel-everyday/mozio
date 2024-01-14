import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InputTextComponent } from "src/app/components/input-text/input-text.component";
import { InputStylizerDirective } from "src/app/derectives/input-stylizer/inputStylizer.directive";
import { RouteFormComponent } from "./route-form.component";
import { InputNumberComponent } from '../../../components/input-number/input-number.component';
import { ButtonComponent } from '../../../components/button/button.component';


@NgModule({
  declarations: [
    RouteFormComponent,
    InputStylizerDirective,
    InputTextComponent,
    InputNumberComponent,
    ButtonComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  exports: [
    RouteFormComponent
  ]
})
export class RouteFormModule {}
