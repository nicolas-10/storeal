import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerContactComponent } from './seller-contact.component';

const routes: Routes = [
  {
    path:'',
    component:SellerContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerContactRoutingModule { }
