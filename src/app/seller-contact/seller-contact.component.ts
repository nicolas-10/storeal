import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-contact',
  templateUrl: './seller-contact.component.html',
  styles: [
  
  ]
})
export class SellerContactComponent implements OnInit {
  products!: Product[] 
  product: Product|undefined
  
  whatsappApiUrl:string='https://api.whatsapp.com/send?phone='

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  productId: string | null = this.route.snapshot.paramMap.get("id");

  ngOnInit(): void {
    if (this.productId) {
      this.productService.getProductById(+this.productId).subscribe(product => this.product = product)
    }
  }
}
