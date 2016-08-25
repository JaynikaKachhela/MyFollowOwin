import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Product } from '../ProductOwner/product';
import { UserService } from './user.service';

//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';



@Component({
    selector: "Products",
    templateUrl: "app/EndUser/products.html",
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES]
})

export class Productcomponent implements OnInit {
    products: Array<Product>;
    product: Product;
    parentRouter: any;
    abc: boolean = false;
    approved: any[] = [];

    errorMessage: string;
    constructor(private userservice: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.parentRouter = Router;
        
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
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.approved[this.product.Id] = true;
        this.abc = true;
        console.log("Added...");
       
       
    }
}
   
