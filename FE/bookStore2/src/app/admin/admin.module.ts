import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TypeBookComponent } from './type-book/type-book.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { BookByTypeBookIdComponent } from './book-by-type-book-id/book-by-type-book-id.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { SharedModule } from '../shared/shared.module';
import { TongquanComponent } from './tongquan/tongquan.component';
import { ThongkeComponent } from './thongke/thongke.component';
// import { PaginationComponent } from '../shared/pagination/pagination.component';


@NgModule({
  declarations: [AdminComponent, TypeBookComponent, BookComponent, CustomerComponent, BookByTypeBookIdComponent, OrderComponent, OrderDetailComponent, TongquanComponent, ThongkeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
