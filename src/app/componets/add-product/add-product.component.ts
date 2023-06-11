import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(private prdAPIService: ProductsWithApiService){}
  addProduct() {
    // static data
    let prd:IProduct={
      id:4,
      Name: 'oppo a20',
      Price: 5000,
      Quantity: 5,
      CateogryID: 1,
      Img: "assets/download.jpg",
      IsPurchased: false,
      Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"
      

         
  }
    this.prdAPIService.addprd(prd).subscribe({
      next:(product)=>{
        console.log(product);
      },
      error:(error)=>{
        console.log(error);
      }
    });

  }
}
