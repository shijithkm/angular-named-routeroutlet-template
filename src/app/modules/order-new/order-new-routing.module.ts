import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderNewComponent } from './order-new.component';

const routes: Routes = [{
  path: '', component: OrderNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderNewRoutingModule { }
