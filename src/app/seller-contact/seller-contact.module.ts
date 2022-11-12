import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerContactRoutingModule } from './seller-contact-routing.module';
import { SellerContactComponent } from './seller-contact.component';
import { ShopLocalisationComponent } from './shop-localisation/shop-localisation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SellerContactComponent,
    ShopLocalisationComponent
  ],
  imports: [
    CommonModule,
    SellerContactRoutingModule,
    SharedModule,
  ]
})
export class SellerContactModule { }
