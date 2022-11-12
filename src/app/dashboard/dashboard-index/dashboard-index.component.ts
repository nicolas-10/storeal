import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styles: [
  ]
})
export class DashboardIndexComponent implements OnInit {

  products!:Product[];

  constructor(private productService:ProductService , private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=> this.products=products)
  }

  goToEdit(product:Product){
    this.router.navigate(['dashboard/edit/products',product.id])
  }

  addProduct(product:Product){
    this.router.navigate(['dashboard/addProduct'])
  }

  deleteProduct(product:Product){
    this.productService.deleteProductById(product.id).
    subscribe(()=> this.router.navigate(['/dashboard'])
    )

  }
}
