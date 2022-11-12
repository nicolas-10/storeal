import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  template: `
  <h2 class="text-center">Editer {{product?.name}} </h2>
   <div *ngIf=" product" class="text-center">
    <img  [src]="product.picture" alt="" style="width:18rem; height:18rem;">
   </div>
      <app-product-form *ngIf="product" [product]="product"></app-product-form>
  `,
  styles: [
  ]
})
export class EditProductComponent implements OnInit {
  product:Product|undefined
  constructor(private productService:ProductService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const productId: string|null = this.route.snapshot.paramMap.get("id");
    if (productId) {
      this.productService.getProductById(+productId).subscribe(product=>this.product=product)
    }
    else{
      this.product=undefined
    }
  }

}
