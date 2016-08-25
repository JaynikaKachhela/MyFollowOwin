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
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var product_1 = require('../Model/product');
//Import for design purpose
var common_1 = require('@angular/common');
var productUpdate_1 = require('../Model/productUpdate');
var app_service_1 = require('../app.service');
var FollowProductcomponent = (function () {
    function FollowProductcomponent(userservice) {
        this.userservice = userservice;
        this.updates = false;
        this.followedProduct = new Array();
        this.followedProduct1 = new Array();
        this.productsUpdate = new productUpdate_1.ProductUpdate();
        this.productUpdates = new Array();
        this.product = new product_1.Product();
    }
    FollowProductcomponent.prototype.ngOnInit = function () {
        this.getFollowedProduct();
    };
    FollowProductcomponent.prototype.unfollowProduct = function (product) {
        var _this = this;
        this.userservice.deleteFollower(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getFollowedProduct();
        });
        console.log("unfollow...");
    };
    FollowProductcomponent.prototype.OnBack = function () {
        this.updates = false;
    };
    FollowProductcomponent.prototype.showUpdates = function (productId, productName) {
        var _this = this;
        this.updates = true;
        this.ProductName = productName;
        var productUpdates = this.userservice.getProductUpdates(productId)
            .subscribe(function (products) {
            _this.productUpdates = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    FollowProductcomponent.prototype.getFollowedProduct = function () {
        var _this = this;
        var displayOwner = this.userservice.getFollowedProduct()
            .subscribe(function (products) {
            _this.followedProduct = products;
            console.log(_this.followedProduct);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    FollowProductcomponent = __decorate([
        core_1.Component({
            selector: "products",
            templateUrl: "app/EndUser/followProducts.html",
            providers: [app_service_1.Service],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], FollowProductcomponent);
    return FollowProductcomponent;
}());
exports.FollowProductcomponent = FollowProductcomponent;
//# sourceMappingURL=FollowProducts.js.map