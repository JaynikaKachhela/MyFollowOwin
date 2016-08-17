"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var owner_1 = require('./owner');
var product_1 = require('../ProductOwner/product');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(userservice) {
        this.userservice = userservice;
        this.beOwner = false;
        this.isProducts = false;
        this.isFolllowProducts = false;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
        this.products = new Array();
        this.product = new product_1.Product();
    }
    UserComponent.prototype.ngOnInit = function () {
        console.log("User logged in.....");
        this.getProducts();
        this.getFollowedProduct();
    };
    UserComponent.prototype.showFollowProduct = function () {
        this.isFolllowProducts = !this.isFolllowProducts;
        this.getFollowedProduct();
    };
    UserComponent.prototype.showForm = function () {
        this.beOwner = !this.beOwner;
    };
    UserComponent.prototype.showProduct = function () {
        this.isProducts = !this.isProducts;
        this.getProducts();
    };
    UserComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        console.log(owner);
        var postOwner = this.userservice.setOwner(owner)
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    UserComponent.prototype.unfollowProduct = function (product) {
        var _this = this;
        this.userservice.deleteFollower(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.getProduct();
        this.getProducts();
        console.log("unfollow...");
    };
    UserComponent.prototype.getProduct = function () {
        this.isFolllowProducts = false;
        this.isProducts = false;
    };
    UserComponent.prototype.followProduct = function (product) {
        var _this = this;
        this.userservice.newFollow(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.getProduct();
        this.getProducts();
        console.log("Added...");
    };
    UserComponent.prototype.getFollowedProduct = function () {
        var _this = this;
        var displayOwner = this.userservice.getFollowedProduct()
            .subscribe(function (products) {
            _this.followedProduct = products;
            console.log(_this.followedProduct);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    UserComponent.prototype.getProducts = function () {
        var _this = this;
        var displayOwner = this.userservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
            console.log(_this.products);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'my-user',
            templateUrl: 'app/EndUser/user.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map