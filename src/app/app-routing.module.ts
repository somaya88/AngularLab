import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './componets/products/products.component';
import { ProductParentComponent } from './componets/product-parent/product-parent/product-parent.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutusComponent } from './componets/aboutus/aboutus.component';
import { ProductDetialsComponent } from './componets/product-detials/product-detials.component';
import { UserReactiveComponent } from './componets/user/user-reactive/user-reactive.component';
import { LoginComponent } from './componets/login/login.component';
import { ContactusComponent } from './componets/contactus/contactus.component';
import { userAuthGuard } from './guards/user-auth.guard';
import { AddProductComponent } from './componets/add-product/add-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'product',component:ProductParentComponent,title:"parent product page",canActivate:[userAuthGuard]},
  {path:'product',component:ProductsComponent,title:"product page",canActivate:[userAuthGuard]},
  {path: 'productDetails/:prodID',component:ProductDetialsComponent,
    title: 'Product Details page',canActivate:[userAuthGuard]
  },
  {
    path: 'userReactive',
    component:UserReactiveComponent,
    title: 'Reactive Form page',
  },
  { path: 'Login', component:LoginComponent, title: ' login page' },
  { path: 'LogOut', component:LoginComponent, title: ' logout page' },
  { path: 'addProduct', component:AddProductComponent, title: ' addProduct page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
