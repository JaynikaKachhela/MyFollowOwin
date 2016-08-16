import { Component, OnInit, Input } from '@angular/core';
import { ProductOwnerService } from './product_owner.service';
import {Product} from './product'

@Component({
    selector: 'product-owner',
    templateUrl:'app/ProductOwner/product_owner.component.html',
    providers: [ProductOwnerService]
})
export class ProductOwnerComponent implements OnInit {
    newProduct: boolean = false;
    oldProduct: boolean = false;
    productDetail: boolean = false;
    editProduct: boolean = false;
    product: Product;
    products: Array<Product>;
    errorMessage: string;
    showForm(): void {
        this.newProduct = !this.newProduct;
        this.productDetail = false;
        this.editProduct = false;
    }
    showTable() :void{
        this.oldProduct = !this.oldProduct;
        this.editProduct = false;
        this.productDetail = false;
        this.getProducts();
    }
    onNotEdit(): void {
        this.editProduct = false;
    }
    constructor(private ownerservice: ProductOwnerService) {
        this.products = new Array<Product>();
        this.product = new Product();

    }
    ngOnInit() {
        //this.getProducts();
        this.productDetail = false;
    }
    onSubmit(product:Product) {
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
        this.getProducts();
        console.log("Insered !!!");
        this.product = null;
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

    updateData(product: Product) {
        this.editProduct = true;
        this.oldProduct = false;
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
        this.oldProduct = false;
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

    
}