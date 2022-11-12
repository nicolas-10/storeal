import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { PRODUCTS } from '../products-mock';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styles: [
  ]
})
export class SellersComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService:ProductService,private router:Router) { }
  
  ngOnInit(){
    this.getProductList()
    console.table(PRODUCTS)
  }

  getProductList(){
    this.productService.getProducts().subscribe(product=>this.products=product)
  }
 
  goToDetailProduct(product:Product){
    this.router.navigate(['/seller-contact', product.id])
  }
}
