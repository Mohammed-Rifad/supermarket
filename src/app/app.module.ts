import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DeliveryBoysListComponent } from './components/delivery-boys-list/delivery-boys-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { DashboardItemsComponent } from './components/dashboard-items/dashboard-items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { UserCartComponent } from './pages/user-cart/user-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesComponent,
    DeliveryBoysListComponent,
    FooterComponent,
    ProductListComponent,
    DashboardItemsComponent,
    NavbarComponent,
    ProductDetailsComponent,
    UserCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
