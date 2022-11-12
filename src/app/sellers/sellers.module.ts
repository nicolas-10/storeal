import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellersRoutingModule } from './sellers-routing.module';
import { SellersComponent } from './sellers.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [
    SellersComponent
  ],
  imports: [
    CommonModule,
    SellersRoutingModule,
    SharedModule,
  ],
})
export class SellersModule { }
