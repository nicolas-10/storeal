import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: [
  ]
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
  product!: Product;
  ngOnInit(): void {
    this.product = new Product();
  }

}
