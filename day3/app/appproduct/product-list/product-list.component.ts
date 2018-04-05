import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductModel } from '../product.model';
import { ProductService } from '../appservices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(private _productService: ProductService) {
    this.productList = [];
  }
  ngOnInit() {
    this.productList = this._productService.createProductList();
  }
  sort(event): void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this._productService.sortByPrice(value);
    
  }

}
