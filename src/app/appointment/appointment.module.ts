import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {AppointmentService} from "./appointment.service";



@NgModule({
  declarations: [AppointmentComponent],
  exports: [
    AppointmentComponent
  ],
  imports: [CommonModule, FormsModule, MatFormField, MatInput,MatLabel],
  providers:[AppointmentService],
})
export class AppointmentModule { }
