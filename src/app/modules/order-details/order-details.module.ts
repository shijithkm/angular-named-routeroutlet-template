import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrderDetailsRoutingModule,
    SharedModule
  ],
  declarations: [OrderDetailsComponent]
})
export class OrderDetailsModule { }
