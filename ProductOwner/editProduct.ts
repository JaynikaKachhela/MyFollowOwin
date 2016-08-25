import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {ROUTER_DIRECTIVES, Router } from "@angular/router-deprecated";
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import {Product} from './product';
import { ProductOwnerService } from './product_owner.service';
import { ProductUpdate } from './productUpdate'
import { UserService } from '../EndUser/user.service';


@Component({
    selector: "edit",
    templateUrl: "app/ProductOwner/ownProduct.html",
    providers: [ProductOwnerService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class EditProductcomponent implements OnInit {
    id: any;
    product: Product;
    products: Array<Product>;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute, private ownerservice: ProductOwnerService) {
        this.product = new Product();
        this.products = new Array<Product>();
    }

    ngOnInit() {
        this.id = this.activatedRoute.params.subscribe(params => { });
        console.log("id:", this.id);
    }


    onNotEdit(): void {
        this.product = null;
    }

    onEdit(product: Product) {
        this.ownerservice.editProduct(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        console.log("Edited...");
        this.product = null;
    }
}