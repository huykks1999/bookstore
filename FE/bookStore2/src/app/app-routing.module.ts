import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleService } from './shared/signin/role.service';


const routes: Routes = [
  { path: '',   redirectTo: '/public/home', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[RoleService]}, 
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
];

// , canActivate:[RoleService] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
