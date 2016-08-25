import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Product } from '../ProductOwner/product';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import { UserService } from './user.service';

@Component({
    selector: "products",
    templateUrl: "app/EndUser/followProducts.html",
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES]
})

export class FollowProductcomponent implements OnInit {
    followedProduct: Array<Product>;
    followedProduct1: Array<Product>;
    product: Product
    errorMessage: string;
    unfollowed: any[] = [];
    constructor(private userservice: UserService) {
        this.followedProduct = new Array<Product>();
        this.followedProduct1 = new Array<Product>();
        this.product = new Product();
    }
    ngOnInit() {
        this.getFollowedProduct();
        this.unfollowed[this.product.Id] = false;

    }

    unfollowProduct(product: Product) {
        this.userservice.deleteFollower(product)
            .subscribe((products) => {
                this.followedProduct1 = products
            },
            err => {
                this.errorMessage = err;
            });
       
        this.unfollowed[this.product.Id] = true;
        console.log("unfollow...");
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