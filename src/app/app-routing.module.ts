import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AccountComponent } from './account/account.component'
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "account", component: AccountComponent},
  { path: "cart", component: CartComponent},
  { path: "products", component: ProductsComponent},
  { path: "contact", component: ContactComponent},
  { path: "productdetails/:id", component: ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// RouterModule
export class AppRoutingModule { }
