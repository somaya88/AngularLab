import { Component,NgModule,Input, EventEmitter,Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit  {
storedata: Store=new Store('logo',['alex','qina','aswan'],'assets/d.png')



    ClientName:string="ali";
    category:ICategory[];
    selectcat:number=0;
    // product:IProduct[];
    isPurchased:boolean = false;
    purchaseDate:string=''
    creditCardNumber:string="0000000000000000";
    constructor(private prdService: ProductsService,
      private router: Router, private prdAPIService: ProductsWithApiService){
      // this.product=[
      //   {id:1,Name :'samsung1',Quantity : 2,Price : 2000,Img : 'assets/download.jpg',CateogryID :1 ,IsPurchased:false, Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"
      // },
      //   {id:2,Name :'samsung2',Quantity : 3,Price : 4000,Img : 'assets/download.jpg',CateogryID :2 ,IsPurchased:false, Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"
      // },
      //   {id:3,Name :'samsung3',Quantity : 4,Price : 6000,Img : 'assets/download.jpg',CateogryID :2 ,IsPurchased:false, Details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!"
      // }
      
      // ]
      this.category=[{ID:1,Name:'labtop'},{ID:2,Name:'mobile'},{ID:3,Name:'tablet'}]
    }
  imageShow:boolean=true;
  imagesh(){
      this.imageShow=!this.imageShow
  }
  
  toggleDiv() {
    this.isPurchased =!this.isPurchased;
  }
 

  buyProduct(product: any) {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
  }
  
  addProduct(product: any) {
    if (product.Quantity > 0) {
      product.Quantity++;
    }
  }
  decProduct(product: any) {
    if (product.Quantity > 0) {
      product.Quantity--;
    }
  }
  
  getStatus(quantity: number) {
    switch (quantity) {
      case 0:
        return 'Out of stock';
      case 1:
        return 'Last item';
      case 2:
        return 'Last two items';
      default:
        return 'In stock';
    }
  }
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];
  @Input() get listFilterInChild(): string {
    return this._listFilter;
  }
  set listFilterInChild(value: string) {
    this._listFilter = value;
    console.log('In setter', value);
    //  this.filteredProducts = this.performFilter(parseInt(value));
    //day4
     this.filteredProducts = this.prdService.performFilter(parseInt(value));
     //day5
    //  this.prdAPIService.getAllProducts().subscribe((data) => {
    //   this.filteredProducts = data.filter((prd) =>
    //     prd.Name.toLocaleLowerCase().includes(value)
    //   );
    // });
    }
  ngOnInit(): void {
    // this.filteredProducts=Array.from(this.product);
    // this.filteredProducts = this.product;
    //day4
    this.filteredProducts = this.prdService.getAllProds();
   //day5
  //  this.prdAPIService.getAllProducts().subscribe({
  //   next: (data) => {
  //     this.filteredProducts = data;
  //   },
  //   error: (err) => {
  //     console.log(err);
  //   },
  // });
}
  
  // performFilter(filterBy:number):IProduct[]{
  //   return this.product.filter((product:IProduct)=>product.Price == filterBy);
  
  // }
  
  @Output() CartProducts: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();
  cart(prod: IProduct) {

    prod.IsPurchased = !prod.IsPurchased;
    this.CartProducts.emit(
      this.filteredProducts.filter((item) => item.IsPurchased && item.Quantity)
    );
  
  }

  todayDate: Date = new Date();
  prdDetails(prdID: number) {
    this.router.navigate(['/productDetails', prdID]);
  }
}



  
