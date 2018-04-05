import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppProductComponent } from './appproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { Product } from './product';
import { ProductModel } from './product.model';
import { ProductService } from './appservices/product.service';



@NgModule({
    declarations: [
        AppProductComponent,
        ProductListComponent,
        ProductComponent,
        ProductSearchComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [AppProductComponent],
    providers: [ProductService],
    bootstrap: [AppProductComponent]
})
export class AppProductModule { }
