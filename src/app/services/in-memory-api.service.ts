import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { PRODUCTS } from '../products-mock';
@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService {
createDb(){
const products = PRODUCTS
return {products}
}
}
