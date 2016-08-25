import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Product } from '../Model/product';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import { ProductUpdate } from '../Model/productUpdate'

import { Service } from '../app.service';

@Component({
    selector: "products",
    templateUrl: "app/EndUser/followProducts.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES]
})

export class FollowProductcomponent implements OnInit {
    followedProduct: Array<Product>;
    followedProduct1: Array<Product>;
    ProductName: string;
    product: Product
    errorMessage: string;
    updates: boolean = false;
    productsUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    constructor(private userservice: Service) {
        this.followedProduct = new Array<Product>();
        this.followedProduct1 = new Array<Product>();
        this.productsUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();

        this.product = new Product();
    }
    ngOnInit() {
        this.getFollowedProduct();
   
    }

    unfollowProduct(product: Product) {
        this.userservice.deleteFollower(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getFollowedProduct();
            });
        console.log("unfollow...");
    }
    OnBack() {
        this.updates = false;
    }
    showUpdates(productId: number,productName:string) {
        this.updates = true;
        this.ProductName = productName;
        var productUpdates = this.userservice.getProductUpdates(productId)
            .subscribe((products) => {
                this.productUpdates = products

            }, err => {
                this.errorMessage = err;
            });

    }
    getFollowedProduct() {
        var displayOwner = this.userservice.getFollowedProduct()
            .subscribe((products) => {
                this.followedProduct = products
                
                console.log(this.followedProduct);
            }, err => {
                this.errorMessage = err;
            });
        

    }
}