import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';


const baseChildrenRoutes:Routes = [
  {
    path:'',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'sellers',
    loadChildren:()=>import('./sellers/sellers.module').then(m=>m.SellersModule)
  },
  {
    path:'seller-contact/:id',
    loadChildren:()=>import('./seller-contact/seller-contact.module').then(m=>m.SellerContactModule)
  }
]

const routes: Routes = [
  {
    path:'',
    component:BaseLayoutComponent,
    children:baseChildrenRoutes
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
