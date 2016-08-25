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
var app_service_1 = require('../app.service');
var productUpdate_1 = require('../Model/productUpdate');
var FollowedProductcomponent = (function () {
    function FollowedProductcomponent(service) {
        this.service = service;
        this.updates = false;
        this.followedProduct = new Array();
        this.followedProduct1 = new Array();
        this.product = new product_1.Product();
        this.productsUpdate = new productUpdate_1.ProductUpdate();
        this.productUpdates = new Array();
    }
    FollowedProductcomponent.prototype.ngOnInit = function () {
        this.getFollowedProduct();
    };
    FollowedProductcomponent.prototype.unfollowProduct = function (product) {
        var _this = this;
        this.service.deleteFollower(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getFollowedProduct();
        });
    };
    FollowedProductcomponent.prototype.showUpdates = function (productId) {
        var _this = this;
        this.updates = true;
        var productUpdates = this.service.getProductUpdates(productId)
            .subscribe(function (products) {
            _this.productUpdates = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    FollowedProductcomponent.prototype.getFollowedProduct = function () {
        var _this = this;
        var displayOwner = this.service.getFollowedProduct()
            .subscribe(function (products) {
            _this.followedProduct = products;
            console.log(_this.followedProduct);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    FollowedProductcomponent = __decorate([
        core_1.Component({
            selector: "products",
            templateUrl: "app/ProductOwner/followedProduct.html",
            providers: [app_service_1.Service],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], FollowedProductcomponent);
    return FollowedProductcomponent;
}());
exports.FollowedProductcomponent = FollowedProductcomponent;
//# sourceMappingURL=FollowProducts.js.map