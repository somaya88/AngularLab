import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product:IProduct[];
  constructor() {
    this.product=[
      {id:1,Name :'samsung1',Quantity : 2,Price : 2000,Img : 'assets/download.jpg',CateogryID :1 ,IsPurchased:false, Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"
    },
      {id:2,Name :'samsung2',Quantity : 3,Price : 4000,Img : 'assets/download.jpg',CateogryID :1 ,IsPurchased:false, Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"
    },
      {id:3,Name :'samsung3',Quantity : 4,Price : 6000,Img : 'assets/download.jpg',CateogryID :2 ,IsPurchased:false, Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"}
    
    ]
   }
   
  getAllProds(): IProduct[] {
    return this.product;
  }
   performFilter(filterBy:number):IProduct[]{
    return this.product.filter((product:IProduct)=>product.Price == filterBy);
  
  }
  getProdByID(prdID: number): IProduct | undefined {
    return this.product.find((prd) => prd.id == prdID);
  }


  getProductsByIDS():number[]{
    return this.product.map(prod=>prod.id);
  }

}
