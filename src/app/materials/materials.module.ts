import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCardTitle} from "@angular/material/card";



@NgModule({
  declarations: [],
  imports: [CommonModule,MatButton,MatIcon, MatCardTitle],
  exports: [MatButton,MatIcon,MatCardTitle]
})
export class MaterialsModule { }
