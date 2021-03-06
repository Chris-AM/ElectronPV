import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ProductsComponent } from './components/products/products.component';
import { SellsComponent } from './components/sells/sells.component';

const routes: Routes = [
  { path: 'sells', component: SellsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contactInfo', component: ContactInfoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'sells' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
