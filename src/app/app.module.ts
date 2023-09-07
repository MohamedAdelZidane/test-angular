import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Orders/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './Components/Orders/order-master/order-master.component';
import { StaticProductsService } from './Services/static-products.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //To create new instance from a specific service
    // StaticProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
