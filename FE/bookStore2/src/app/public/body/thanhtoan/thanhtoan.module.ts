import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanhtoanRoutingModule } from './thanhtoan-routing.module';
import { ThanhtoanComponent } from './thanhtoan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ThanhtoanComponent],
  imports: [
    CommonModule,
    ThanhtoanRoutingModule,
    ReactiveFormsModule
  ]
})
export class ThanhtoanModule { }
