import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardItemsComponent } from './components/dashboard-items/dashboard-items.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserCartComponent } from './pages/user-cart/user-cart.component';

const routes: Routes = [
  { path : '', redirectTo : 'dashboard',pathMatch : 'full'},
  { path : 'dashboard', component : DashboardComponent,
  children : [
    { path : '', component : DashboardItemsComponent}
  ]    
},
  { path : 'product-list', component : ProductListComponent},
  { path : 'product-details', component : ProductDetailsComponent},
  { path : 'my-cart', component : UserCartComponent},
  { path : '**', redirectTo : 'dashboard'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
