import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})

export class ProductFormComponent implements OnInit {
  @Input() product! : Product;
  isAddForm!:boolean
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.isAddForm=this.router.url.includes('add')
  }

  onSubmit(){
    if(this.isAddForm){
      this.productService.createProduct(this.product).subscribe((product:Product)=> this.router.navigate(['/sellers']))
    }
    else{
      this.productService.updateProduct(this.product).subscribe(()=>this.router.navigate(['/dashboard']))
    }
  }

}
