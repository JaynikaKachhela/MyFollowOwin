import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Product } from '../Model/product';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import { Service } from '../app.service';
import { ProductUpdate } from '../Model/productUpdate';
@Component({
    selector: "products",
    templateUrl: "app/ProductOwner/followedProduct.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})

export class FollowedProductcomponent implements OnInit {
    followedProduct: Array<Product>;
    followedProduct1: Array<Product>;
    productUpdates: Array<ProductUpdate>;
    productsUpdate: ProductUpdate;
    product: Product;
    errorMessage: string;
    updates: boolean = false;
    constructor(private service: Service) {
        this.followedProduct = new Array<Product>();
        this.followedProduct1 = new Array<Product>();
        this.product = new Product();
        this.productsUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();
    }
    ngOnInit() {
        this.getFollowedProduct();
    }

    unfollowProduct(product: Product) {
        this.service.deleteFollower(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getFollowedProduct();
            });
    }

    showUpdates(productId: number) {
        this.updates = true;
        var productUpdates = this.service.getProductUpdates(productId)
            .subscribe((products) => {
                this.productUpdates = products

            }, err => {
                this.errorMessage = err;
            });

    }

    getFollowedProduct() {
        var displayOwner = this.service.getFollowedProduct()
            .subscribe((products) => {
                this.followedProduct = products

                console.log(this.followedProduct);
            }, err => {
                this.errorMessage = err;
            });


    }
}