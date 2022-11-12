import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../product';
import { PRODUCTS } from '../products-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('api/products').pipe(
      tap((response) => console.log(response)),
      catchError((error:Error, errorValue:any) => 
      {
        console.error(error);
        return of(errorValue)
      }
      )
    )
  }
  
  getProductById(productId:number):Observable<Product>{
    return this.http.get<Product>(`api/products/${productId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error:Error, errorValue:any) => 
      {
        console.error(error);
        return of(errorValue)
      }
      )
    )
    }

  updateProduct(product:Product):Observable<null>{
    /* Setting the header of the request to be sent to the server. */
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    } 
    return this.http.put('api/products',product,httpOptions).pipe(
      tap((response)=> console.log(response)),
      catchError((error:Error, errorValue:any)=> {
        console.error(error);
        return of(errorValue)}
        )
    )
  }

  createProduct(product:Product):Observable<Product>{
    /* Setting the header of the request to be sent to the server. */
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    } 
    return this.http.post<Product>('api/products',product,httpOptions).pipe(
      tap((response)=> console.log(response)),
      catchError((error:Error, errorValue:any)=> {
        console.error(error);
        return of(errorValue)}
        )
    )
  }

  deleteProductById(productId:number):Observable<any>{
    return this.http.delete(`api/products/${productId}`).pipe(
      tap((response:any)=> console.log(response)),
      catchError((error:Error, errorValue:any)=> {
        console.error(error);
        return of(errorValue)
      }
        )
    )
  }
}
