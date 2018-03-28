import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product[] = [];
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  constructor(
    private productService: ProductService,
  ) {

  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
   
    this.productService.fetchProducts()
      .finally(() => this.isRequesting = false)
      .subscribe(
        result => {
          if (result) {
            this.product = result;
          }
        },
        errors => this.errors = errors);
  }
}
