import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss']
})
export class ProductParentComponent {
  
  listFilter:string="";
  ProductCart: IProduct[] = [];
  
  addToCart(products: any) {
    this.ProductCart = products;
  }
}
