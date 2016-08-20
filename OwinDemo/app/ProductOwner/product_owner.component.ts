import { Component, OnInit, Input } from '@angular/core';
import { ProductOwnerService } from './product_owner.service';
import { ProductUpdate } from './productUpdate'
import {Product} from './product'
import { UserService } from '../EndUser/user.service';


@Component({
    selector: 'product-owner',
    templateUrl: 'app/ProductOwner/product_owner.component.html',
    providers: [ProductOwnerService, UserService]
})
export class ProductOwnerComponent implements OnInit {
    newProduct: boolean = false;
    oldProduct: boolean = false;
    isFolllowProducts: boolean = false;
    isProducts: boolean = false;
    productDetail: boolean = false;
    productUpdate: boolean = false;
    editProduct: boolean = false;
    product: Product;
    products: Array<Product>;
    followedProduct: Array<Product>;

    productsUpdate: ProductUpdate;
    productUpdates: Array<ProductUpdate>;

    errorMessage: string;
    showForm(): void {
        this.newProduct = !this.newProduct;
        this.productDetail = false;
        this.editProduct = false;
    }
    showTable(): void {
        this.oldProduct = !this.oldProduct;
        this.editProduct = false;
        this.productDetail = false;
        this.getProducts();
    }
    showFollowProduct(): void {
        this.isFolllowProducts = !this.isFolllowProducts;
        this.getFollowedProduct();

    }
    getAllProducts() {
        var displayOwner = this.userservice.getProduct()
            .subscribe((products) => {
                this.products = products

                console.log(this.products);
            }, err => {
                this.errorMessage = err;
            });
    }
    getFollowedProduct() {
        var displayOwner = this.userservice.getFollowedProduct()
            .subscribe((products) => {
                this.followedProduct = products;
                console.log(this.followedProduct);
            }, err => {
                this.errorMessage = err;
            });
    }
    showProduct(): void {
        this.isProducts = !this.isProducts;
        this.getProducts();
    }
    onNotEdit(): void {
        this.editProduct = false;
    }
    constructor(private ownerservice: ProductOwnerService, private userservice: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
        this.productsUpdate = new ProductUpdate();
        this.productUpdates = new Array<ProductUpdate>();

    }
    ngOnInit() {
        //this.getProducts();
        this.productDetail = false;
        this.productUpdate = false;
    }
    onSubmit(product: Product) {
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });
        this.getProducts();
        this.newProduct = false;
        console.log("Insered !!!");
        this.product = null;
    }
    followProduct(product: Product) {
        this.userservice.newFollow(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.getAllProducts();
        this.getFollowedProduct();
        console.log("Added...");

    }
    unfollowProduct(product: Product) {
        this.userservice.deleteFollower(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.getFollowedProduct();
        this.getAllProducts();
        console.log("unfollow...");
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