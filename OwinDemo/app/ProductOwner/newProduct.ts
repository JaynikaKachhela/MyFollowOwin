import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Product} from '../Model/product'
import { Service } from '../app.service';
import {FORM_DIRECTIVES} from '@angular/common';



@Component({
    selector: "newProduct",
    templateUrl: "app/ProductOwner/newProduct.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class NewProductcomponent {
    product: Product;
    products: Array<Product>;
    newProduct: boolean = false;
    errorMessage: string;
    constructor(private ownerservice: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.newProduct = false;
    }
    Back() {
        this.newProduct = false;
        this.product = new Product();
    }
    onSubmit(product: Product) {
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.newProduct = true;
            });
        console.log("Insered !!!");

    }
}