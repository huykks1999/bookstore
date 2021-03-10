import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuRoutingModule } from './trangchu-routing.module';
import { TrangchuComponent } from './trangchu.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [TrangchuComponent],
  imports: [
    CommonModule,
    TrangchuRoutingModule,
    SharedModule
  ],
  exports:[]

})
export class TrangchuModule { }
