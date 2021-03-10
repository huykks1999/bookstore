import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { PaginationComponent } from './pagination/pagination.component'
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [SharedComponent, SigninComponent,
    PaginationComponent, SearchComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ], exports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationComponent,
    SearchComponent
  ]
})
export class SharedModule { }
