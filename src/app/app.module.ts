import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialsModule} from "./materials/materials.module";
import {MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage
} from "@angular/material/card";
import { AppointmentModule } from './appointment/appointment.module';
import {MatLabel} from "@angular/material/form-field";



@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MatIconButton,
    MatFabButton,
    MatMiniFabButton,
    MatTooltip,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardFooter,
    MatCardImage,
    AppointmentModule,
    MatLabel
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
