import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import {Product} from './product';
import { ProductUpdate } from './productUpdate'
import { ProductOwnerService } from './product_owner.service';
import { UserService } from '../EndUser/user.service';


@Component({
    selector: "ownProducts",
    templateUrl: "app/ProductOwner/ownProduct.html",
    providers: [],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class OwnProductcomponent implements OnInit {
   
    productDetail: boolean = false;
    productUpdate: boolean = false;
    editProduct: boolean = false;
    unfollowed: any[] = [];

    product: Product;
    products: Array<Product>;
    productsUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;
    errorMessage: string;

    constructor(private ownerservice: ProductOwnerService, private userservice: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.productsUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();

    }
    ngOnInit() {
        this.getProducts();
        this.productDetail = false;
        this.productUpdate = false;
    }
    
    getProducts() {
        var displayOwner = this.ownerservice.getProduct()
            .subscribe((products) => {
                this.products = products

                //console.log(this.products);
            }, err => {
                this.errorMessage = err;
            });
    }

    onNotEdit(): void {
        this.editProduct = false;
        this.product = null;
    }

    updateData(product: Product) {
        this.editProduct = true;
        this.product = product;
    }

    onEdit(product: Product) {
        this.ownerservice.editProduct(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.getProducts();
        console.log("Edited...");
        this.product = null;
    }
    detailProduct(product: Product) {
        this.productDetail = true;
        this.product = product;
    }

    onDelete(product: Product) {
        this.ownerservice.deleteProduct(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.getProducts();
        console.log("Deleted...");

    }
  
    newProductUpdate(product: Product) {
        this.productUpdate = true;
        this.productDetail = false;
        this.product = product;
        console.log("form");
    }

    addProductUpdate(productupdate: ProductUpdate) {
        console.log("log ");
        productupdate.ProductId = this.product.Id;
        var postOwner = this.ownerservice.setProductUpdate(productupdate)
            .subscribe((productUpdates) => {
                this.productUpdates = productUpdates
            }, err => {
                this.errorMessage = err;
            });
        console.log(productupdate);
    }    
    
}