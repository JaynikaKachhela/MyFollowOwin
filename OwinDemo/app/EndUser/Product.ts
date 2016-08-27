import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Product } from '../Model/product';
import { Service } from '../app.service';

//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';



@Component({
    selector: "Products",
    templateUrl: "app/EndUser/products.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})

export class Productcomponent implements OnInit {
    products: Array<Product>;
    product: Product;
    errorMessage: string;

    constructor(private userservice: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
    }
    ngOnInit() {
        console.log("loaded..");

        this.getProducts();

    }
    getProducts() {
        var displayProduct = this.userservice.getProduct()
            .subscribe((products) => {
                this.products = products;
                console.log(this.products);

            }, err => {
                this.errorMessage = err;
            });
    }

    followProduct(product: Product) {
        this.userservice.newFollow(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getProducts();
            });
        console.log("Added...");
    }
}

