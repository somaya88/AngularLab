import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
  http = {};
  
  constructor(private httpclient:HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
   }
  getAllProducts():Observable<IProduct[]>{

    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/products');
    return this.httpclient.get<IProduct[]>(`${environment.baseAPIURL}/products`);
  }
  getPrdByID(prdID:number):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.baseAPIURL}/products/${prdID}`)
  }
  getPrdBycatID(prdcatID:number):Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.baseAPIURL}/products?CateogryID=${prdcatID}`)
  }
  addprd(newPrd: IProduct): Observable<IProduct> {
    return this.httpclient.post<IProduct>(
      `${environment.baseAPIURL}/products`,
      JSON.stringify(newPrd),this.http
    );
  }
}
