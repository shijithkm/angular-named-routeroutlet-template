import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderNewRoutingModule } from './order-new-routing.module';
import { OrderNewComponent } from './order-new.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrderNewRoutingModule,
    SharedModule
  ],
  declarations: [OrderNewComponent]
})
export class OrderNewModule { }
