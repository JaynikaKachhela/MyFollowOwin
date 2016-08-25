import { Component, OnInit, Input } from '@angular/core';
import { Owner } from './owner';
import { Product } from '../ProductOwner/product';
import { UserService } from './user.service';


@Component({
     selector: 'my-user',
     templateUrl: 'app/EndUser/user.component.html',
     providers: [UserService]
})
export class UserComponent implements OnInit {
    beOwner: boolean = false;
    isProducts: boolean = false;
    isFolllowProducts: boolean = false;
    products: Array<Product>;
    followedProduct: Array<Product>;
    product: Product
    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private userservice: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();
        this.products = new Array<Product>();
        this.product = new Product();
    }

    ngOnInit() {
        console.log("User logged in.....")
        this.getProducts();
        this.getFollowedProduct();
    }
    showFollowProduct(): void {
        this.isFolllowProducts = !this.isFolllowProducts;
        this.getFollowedProduct();

    }
    showForm(): void {
        this.beOwner = !this.beOwner;
    }
    showProduct(): void {
        this.isProducts = !this.isProducts;
        this.getProducts();
    }
    onSubmit(owner: Owner) {
        console.log(owner);
        var postOwner = this.userservice.setOwner(owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
    }
    unfollowProduct(product: Product) {
        this.userservice.deleteFollower(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.getProduct();
        this.getProducts();
        console.log("unfollow...");
    }
    getProduct() {        
        this.isFolllowProducts = false;
        this.isProducts = false;
    }
    followProduct(product: Product) {
        this.userservice.newFollow(product)
            .subscribe((products) => {
                this.products = products
            },
            err => {
                this.errorMessage = err;
            });
        this.getProduct();
        this.getProducts();
        console.log("Added...");
       
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
    getProducts() {
        var displayOwner = this.userservice.getProduct()
            .subscribe((products) => {
                this.products = products

                console.log(this.products);
            }, err => {
                this.errorMessage = err;
            });
    }
}