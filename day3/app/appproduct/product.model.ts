import { Product } from "./product";

export class ProductModel {
    productList: Product[];
    constructor() {
        this.productList = [];
    }
    createProductList(): Product[] {
        this.productList.push(new Product(1, 'Iphone5', 20000, './assets/image/phone03.png'));
        this.productList.push(new Product(2, 'Iphone6', 25000, './assets/image/phone03.png'));
        this.productList.push(new Product(3, 'Iphone7', 40000, './assets/image/phone03.png'));
        this.productList.push(new Product(1, 'Iphone8', 50000, './assets/image/phone03.png'));
        this.productList.push(new Product(1, 'Iphone10', 80000, './assets/image/phone03.png'));
        return this.productList;
    }
    sortByPrice(): void {

    }
}