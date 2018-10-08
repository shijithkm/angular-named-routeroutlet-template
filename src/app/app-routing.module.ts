import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OrderComponent } from './modules/order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: ':id',
        outlet: 'help',
        loadChildren: './modules/help/help.module#HelpModule'
      }
    ]
  },
  {
    path: 'order',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/order/order.module#OrderModule'
      },
      {
        path: ':id',
        outlet: 'popup',
        loadChildren: './modules/order-details/order-details.module#OrderDetailsModule'
      },
      {
        path: ':id',
        outlet: 'help',
        loadChildren: './modules/help/help.module#HelpModule'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
