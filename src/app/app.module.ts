import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { ProductsComponent } from './componets/products/products.component';
import { SideMenuComponent } from './componets/side-menu/side-menu.component';
import { FooterComponent } from './componets/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductParentComponent } from './componets/product-parent/product-parent/product-parent.component';
import { HoverDirective } from './directives/hover.directive';
import { CreditCardPipe } from './pipe/credit-card.pipe';
import { DatePipe } from './pipe/date.pipe';
import { HomeComponent } from './componets/home/home.component';
import { AboutusComponent } from './componets/aboutus/aboutus.component';
import { ContactusComponent } from './componets/contactus/contactus.component';
import { ProductDetialsComponent } from './componets/product-detials/product-detials.component';
import {HttpClientModule} from '@angular/common/http';
import { UserReactiveComponent } from './componets/user/user-reactive/user-reactive.component';
import { LoginComponent } from './componets/login/login.component';
import { AddProductComponent } from './componets/add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SideMenuComponent,
    FooterComponent,
    ProductParentComponent,
    HoverDirective,
    CreditCardPipe,
    DatePipe,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ProductDetialsComponent,
    UserReactiveComponent,
    LoginComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
