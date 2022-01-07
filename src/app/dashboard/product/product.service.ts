import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductService {
  public baseUrl = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  public addProduct(data:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}product`, data);
  }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}product`);
  }

   //Get Product detail by id
   public getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}product/${id}`);
  }

  //Update product detail
  public updateProduct(data:Product):Observable<Product>{
    debugger
    return this.http.put<Product>(`${this.baseUrl}product/${data.id}`, data);
  }

  //Delete products
  public deleteProduct(id:number):Observable<number>{
    return this.http.delete<number>(`${this.baseUrl}product/${id}`);
  }


}
