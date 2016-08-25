import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import {Product} from './product'
import { ProductOwnerService } from './product_owner.service';

//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "newProduct",
    templateUrl: "app/ProductOwner/newProduct.html",
    providers: [ProductOwnerService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class NewProductcomponent {
    product: Product;
    products: Array<Product>;
    newProduct: boolean = false;
    errorMessage: string;
    constructor(private ownerservice: ProductOwnerService) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.newProduct = false;
    }
    OnLoad() {
        this.newProduct = false;
    }
    onSubmit(product: Product) {
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
        this.newProduct = true;
        console.log("Insered !!!");
  
    }
}