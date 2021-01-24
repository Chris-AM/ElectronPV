import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { SellsComponent } from './components/sells/sells.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ClientComponent } from './components/client/client.component';
import { CloseComponent } from './components/close/close.component';

//services
import { ClientService } from "./services/clients/client.service";
import { CloseService } from "./services/closes/close.service";
import { ProductService } from "./services/products/product.service";
import { SellService } from "./services/sells/sell.service";
import { StoreService } from "./services/store/store.service";
import { TicketService } from "./services/tickets/ticket.service";
@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    SellsComponent,
    ContactInfoComponent,
    ClientComponent,
    CloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ClientService,
    CloseService,
    ProductService,
    SellService,
    StoreService,
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
