import { Component, OnInit, Input } from '@angular/core';
import { ProductOwnerService } from './product_owner.service';
import { ProductUpdate } from './productUpdate'
import { ROUTER_DIRECTIVES } from '@angular/router';
import {OwnProductcomponent}from './ownProduct'
import {NewProductcomponent}from './newProduct'
import {FollowProductcomponent}from '../EndUser/FollowProducts'
import {AllProductcomponent}from './allProduct'

import {Product} from './product'
import { UserService } from '../EndUser/user.service';


@Component({
    selector: 'product-owner',
    templateUrl: 'app/ProductOwner/product_owner.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, ProductOwnerService],
    precompile: [OwnProductcomponent, AllProductcomponent, NewProductcomponent, FollowProductcomponent]
})
export class ProductOwnerComponent {
    //implements OnInit {
    //newProduct: boolean = false;
    //oldProduct: boolean = false;
    //isFolllowProducts: boolean = false;
    //isProducts: boolean = false;
    //productDetail: boolean = false;
    //productUpdate: boolean = false;
    //editProduct: boolean = false;
    //unfollowed: any[] = [];

    //product: Product;
    //products: Array<Product>;
    //allProducts: Array<Product>;
    //followedProduct: Array<Product>;
    //productsUpdate: ProductUpdate;
    //productUpdates: Array<ProductUpdate>;
    //errorMessage: string;

    //constructor(private ownerservice: ProductOwnerService, private userservice: UserService) {
    //    this.products = new Array<Product>();
    //    this.allProducts = new Array<Product>();
    //    this.followedProduct = new Array<Product>();
    //    this.product = new Product();
    //    this.productsUpdate = new ProductUpdate();
    //    this.productUpdates = new Array<ProductUpdate>();

    //}
    //ngOnInit() {
    //    //this.getProducts();
    //    this.productDetail = false;
    //    this.productUpdate = false;
    //}

    //showForm(): void {
    //    this.newProduct = !this.newProduct;
    //    this.productDetail = false;
    //    this.editProduct = false;
    //}
    //showTable(): void {
    //    this.oldProduct = !this.oldProduct;
    //    this.editProduct = false;
    //    this.productDetail = false;
    //    this.getProducts();
    //}
    //getProducts() {
    //    var displayOwner = this.ownerservice.getProduct()
    //        .subscribe((products) => {
    //            this.products = products

    //            //console.log(this.products);
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //}

    //showProduct(): void {
    //    this.isProducts = !this.isProducts;
    //    this.editProduct = false;
    //    this.productDetail = false;
    //    this.getAllProducts();
    //}
    //getAllProducts() {
    //    var displayOwner = this.ownerservice.getAllProduct()
    //        .subscribe((products) => {
    //            this.allProducts = products;
    //            console.log(this.allProducts);
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //}

    //showFollowProduct(): void {
    //    this.isFolllowProducts = !this.isFolllowProducts;
    //    this.editProduct = false;
    //    this.productDetail = false;
    //    this.getFollowedProduct();

    //}
    //getFollowedProduct() {
    //    var displayOwner = this.userservice.getFollowedProduct()
    //        .subscribe((products) => {
    //            this.followedProduct = products;
    //            console.log(this.followedProduct);
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //}

    //onSubmit(product: Product) {
    //    console.log(product);
    //    var postOwner = this.ownerservice.setProduct(this.product)
    //        .subscribe((products) => {
    //            this.products = products
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //    this.getProducts();
    //    this.newProduct = false;
    //    console.log("Insered !!!");
    //    this.product = null;
    //}
    //onNotEdit(): void {
    //    this.editProduct = false;
    //    this.product = null;
    //}

    //updateData(product: Product) {
    //    this.editProduct = true;
    //    this.oldProduct = false;
    //    this.product = product;
    //}

    //onEdit(product: Product) {
    //    this.ownerservice.editProduct(product)
    //        .subscribe((products) => {
    //            this.products = products
    //        },
    //        err => {
    //            this.errorMessage = err;
    //        });
    //    this.getProducts();
    //    console.log("Edited...");
    //    this.product = null;
    //}
    //detailProduct(product: Product) {
    //    this.productDetail = true;
    //    this.oldProduct = false;
    //    this.product = product;
    //}

    //onDelete(product: Product) {
    //    this.ownerservice.deleteProduct(product)
    //        .subscribe((products) => {
    //            this.products = products
    //        },
    //        err => {
    //            this.errorMessage = err;
    //        });
    //    this.getProducts();
    //    console.log("Deleted...");

    //}
    //followProduct(product: Product) {
    //    this.userservice.newFollow(product)
    //        .subscribe((products) => {
    //            this.products = products
    //        },
    //        err => {
    //            this.errorMessage = err;
    //        });
       
    //    this.isProducts = false;
    //    this.isFolllowProducts = false;
    //    console.log("Added...");

    //}
    //unfollowProduct(product: Product) {
    //    this.userservice.deleteFollower(product)
    //        .subscribe((products) => {
    //            this.products = products
    //        },
    //        err => {
    //            this.errorMessage = err;
    //        });
    
    //    //this.isProducts = false;
    //    //this.isFolllowProducts = false;
    //    this.unfollowed[this.product.Id] = true;
    //    console.log("unfollow...");
    //}
    //newProductUpdate(product: Product) {
    //    this.productUpdate = true;
    //    this.productDetail = false;
    //    this.product = product;
    //    console.log("form");
    //}
    //addProductUpdate(productupdate: ProductUpdate) {
    //    console.log("log ");
    //    productupdate.ProductId = this.product.Id;
    //    var postOwner = this.ownerservice.setProductUpdate(productupdate)
    //        .subscribe((productUpdates) => {
    //            this.productUpdates = productUpdates
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //    console.log(productupdate);
    //}    
}