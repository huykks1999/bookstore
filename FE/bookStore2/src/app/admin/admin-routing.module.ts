import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BookByTypeBookIdComponent } from './book-by-type-book-id/book-by-type-book-id.component';
import { BookComponent } from './book/book.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { TongquanComponent } from './tongquan/tongquan.component';
import { TypeBookComponent } from './type-book/type-book.component';

const routes: Routes = [
  { path: '', component: AdminComponent, 
  
  children: [
    { path: 'tongquan', component: TongquanComponent },
    { path: 'book', component: BookComponent },
    { path: 'order', component: OrderComponent },
    { path: 'typebook', component: TypeBookComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'orderDetail/:id', component: OrderDetailComponent },
    { path: 'bookByTypeBookId', component: BookByTypeBookIdComponent},
    { path: 'thongke', component: ThongkeComponent}
  ] 
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
