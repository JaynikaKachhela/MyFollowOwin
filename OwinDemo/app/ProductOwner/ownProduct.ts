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
   
    productUpdate: boolean = false;
    detailProduct: boolean = false;
    deleted: boolean = false;
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
        this.detailProduct = false;
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
    onBack() {
        this.deleted = false;
        this.detailProduct = false;
        this.editProduct = false;
        this.productUpdate = false;
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
        this.editProduct = false;
        this.getProducts();
        console.log("Edited...");
        
    }
    detailedProduct(product: Product) {
        this.detailProduct = true;
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
        this.deleted = true;
        console.log("Deleted...");

    }
  
  
    newProductUpdate(product: Product) {
        this.productUpdate = true;
        this.detailProduct = false;
        this.product = product;
      
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