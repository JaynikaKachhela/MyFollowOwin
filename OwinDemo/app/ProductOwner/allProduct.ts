import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { ProductOwnerService } from './product_owner.service';
import {Product} from './product'
import { UserService } from '../EndUser/user.service';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "allProduct",
    templateUrl: "app/ProductOwner/allProduct.html",
    providers: [ProductOwnerService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class AllProductcomponent {
    allProducts: Array<Product>;
    followed: boolean = false;
    product: Product;
    errorMessage: string;
    onBack() {
        this.followed = false;
    }
    constructor(private ownerservice: ProductOwnerService, private userservice: UserService) {
        this.getAllProducts();
    }
    getAllProducts() {
        var displayOwner = this.ownerservice.getAllProduct()
            .subscribe((products) => {
                this.allProducts = products;
                console.log(this.allProducts);
            }, err => {
                this.errorMessage = err;
            });
    }
    followProduct(product: Product) {
        this.userservice.newFollow(product)
            .subscribe((products) => {
                this.allProducts = products
            },
            err => {
                this.errorMessage = err;
            });
        this.followed = true;
        console.log("Added...");
        

    }
}