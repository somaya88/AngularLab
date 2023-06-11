import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss']
})
export class ProductDetialsComponent implements OnInit {
  prdID: number = 0;
  product: IProduct | undefined = undefined;
  currentPrdIndex: number = 0;
  productsIDS: number[] = [];
  constructor( private prdService: ProductsService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private prdAPIService: ProductsWithApiService){

}
//day 4
ngOnInit(): void {
  // convert from string to number
  // parseInt , Number , +var,  var as number
  this.prdID = this.activedRoute.snapshot.paramMap.get('prodID')
    ? Number(this.activedRoute.snapshot.paramMap.get('prodID'))
    : 0;
  //  console.log(this.prdID);

  this.product = this.prdService.getProdByID(this.prdID);

  // console.log(this.product);
  // console.log(this.product?.Name);
// Day7
// this.productsIDS = this.prdService.getProductsByIDS();
// console.log(this.productsIDS);

// this.activedRoute.paramMap.subscribe((paramMap) => {
//   this.prdID = paramMap.get('prodID') ? Number(paramMap.get('prodID')) : 0;
//   let prd = this.prdService.getProdByID(this.prdID);
//   if (prd) {
//     this.product = prd;
//   } else {
//     alert('product is not found');
//     this.location.back();
//   }
// });
//   //day5
//    this.prdAPIService.getPrdByID(this.prdID).subscribe(data=>{
//       this.product=data;
//       console.log(this.product);
// })
}
backToProducts() {
  // this.router.navigate(['Product']);
  this.location.back();
}
previousFunc() {
  this.currentPrdIndex = this.productsIDS.indexOf(this.prdID);
   console.log(this.currentPrdIndex);
  this.router.navigate(['/productDetails',
    this.productsIDS[--this.currentPrdIndex],
  ]);
}
nextFunc() {
  this.currentPrdIndex = this.productsIDS.indexOf(this.prdID);
   console.log(this.currentPrdIndex);
  this.router.navigate([
    '/productDetails',
    this.productsIDS[++this.currentPrdIndex],
  ]);
}

todayDate: Date = new Date();
}
