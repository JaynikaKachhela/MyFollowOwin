import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import {Product} from '../Model/product'
import { Service } from '../app.service';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "allProduct",
    templateUrl: "app/ProductOwner/allProduct.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class AllProductcomponent {
    allProducts: Array<Product>;
    product: Product;
    errorMessage: string;
  
    constructor(private service: Service) {
        this.getAllProducts();
    }
    getAllProducts() {
        var displayOwner = this.service.getAllProduct()
            .subscribe((products) => {
                this.allProducts = products;
                console.log(this.allProducts);
            }, err => {
                this.errorMessage = err;
            });
    }
    followProduct(product: Product) {
        this.service.newFollow(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getAllProducts();
            });
      
        console.log("Added...");
    }
}