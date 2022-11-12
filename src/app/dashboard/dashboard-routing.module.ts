import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const dashboardChildrenRoutes: Routes = [
  {
    path:'',
    component:DashboardIndexComponent,
    pathMatch:'full'
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'edit/products/:id',
    component:EditProductComponent
  },
  {
    path:'detail-product/:id',
    component:DetailProductComponent
  }

];

const routes:Routes=[
  {
    path:'',
    component:DashboardLayoutComponent,
    children:dashboardChildrenRoutes
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
