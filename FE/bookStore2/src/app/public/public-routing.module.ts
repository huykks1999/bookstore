import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () => import('../public/body/trangchu/trangchu.module').then(m => m.TrangchuModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('../public/body/detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../public/body/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../public/body/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'orderDetail/:id',
        loadChildren: () => import('../public/body/order-detail/order-detail.module').then(m => m.OrderDetailModule)
      },
      {
        path: 'thanhtoan',
        loadChildren: () => import('../public/body/thanhtoan/thanhtoan.module').then(m => m.ThanhtoanModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
