import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import {Product} from '../Model/product';
import { ProductUpdate } from '../Model/productUpdate'
import { Service } from '../app.service';


@Component({
    selector: "ownProducts",
    templateUrl: "app/ProductOwner/ownProduct.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class OwnProductcomponent implements OnInit {
   
    productUpdate: boolean = false;
    detailProduct: boolean = false;
   
    updates: boolean = false;
    editProduct: boolean = false;
    unfollowed: any[] = [];

    product: Product;
    products: Array<Product>;
    productsUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;
    errorMessage: string;

    constructor(private service: Service) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.productsUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();

    }
    ngOnInit() {
        this.getProducts();
        this.detailProduct = false;
        this.productUpdate = false;
        this.updates = false;
    }
   
    getProducts() {
        var displayOwner = this.service.getProducts()
            .subscribe((products) => {
                this.products = products

                //console.log(this.products);
            }, err => {
                this.errorMessage = err;
            });
    }
    onBack() {
        this.detailProduct = false;
        this.editProduct = false;
        this.productUpdate = false;
        this.updates=false;
    }
  

    updateData(product: Product) {
        this.editProduct = true;
        this.product = product;
    }

    onEdit(product: Product) {
        this.service.editProduct(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getProducts(); 
            });
        this.editProduct = false;
        console.log("Edited...");
        
    }
    detailedProduct(product: Product) {
        this.detailProduct = true;
        this.product = product;
    }

    onDelete(product: Product) {
        this.service.deleteProduct(product)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.getProducts();
            });
        console.log("Deleted...");

    }
    newUpdate(productsUpdate: ProductUpdate) {
        console.log(productsUpdate);
        this.productsUpdate.ProductId = this.product.Id;
        var postOwner = this.service.setProductUpdate(this.productsUpdate)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.showUpdates(this.product.Id); 
            });
        console.log("Added");
    }
  
    newProductUpdate(product: Product) {
        this.productUpdate = true;
        this.detailProduct = false;
        this.product = product;
      
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
}