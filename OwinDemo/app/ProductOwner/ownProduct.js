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
//Import for design purpose
var common_1 = require('@angular/common');
var product_1 = require('../Model/product');
var productUpdate_1 = require('../Model/productUpdate');
var app_service_1 = require('../app.service');
var OwnProductcomponent = (function () {
    function OwnProductcomponent(service) {
        this.service = service;
        this.productUpdate = false;
        this.detailProduct = false;
        this.updates = false;
        this.editProduct = false;
        this.unfollowed = [];
        this.products = new Array();
        this.product = new product_1.Product();
        this.productsUpdate = new productUpdate_1.ProductUpdate();
        this.productUpdates = new Array();
    }
    OwnProductcomponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.detailProduct = false;
        this.productUpdate = false;
        this.updates = false;
    };
    OwnProductcomponent.prototype.getProducts = function () {
        var _this = this;
        var displayOwner = this.service.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            //console.log(this.products);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnProductcomponent.prototype.onBack = function () {
        this.detailProduct = false;
        this.editProduct = false;
        this.productUpdate = false;
        this.updates = false;
    };
    OwnProductcomponent.prototype.updateData = function (product) {
        this.editProduct = true;
        this.product = product;
    };
    OwnProductcomponent.prototype.onEdit = function (product) {
        var _this = this;
        this.service.editProduct(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getProducts();
        });
        this.editProduct = false;
        console.log("Edited...");
    };
    OwnProductcomponent.prototype.detailedProduct = function (product) {
        this.detailProduct = true;
        this.product = product;
    };
    OwnProductcomponent.prototype.onDelete = function (product) {
        var _this = this;
        this.service.deleteProduct(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getProducts();
        });
        console.log("Deleted...");
    };
    OwnProductcomponent.prototype.newUpdate = function (productsUpdate) {
        var _this = this;
        console.log(productsUpdate);
        this.productsUpdate.ProductId = this.product.Id;
        var postOwner = this.service.setProductUpdate(this.productsUpdate)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.showUpdates(_this.product.Id);
        });
        console.log("Added");
    };
    OwnProductcomponent.prototype.newProductUpdate = function (product) {
        this.productUpdate = true;
        this.detailProduct = false;
        this.product = product;
    };
    OwnProductcomponent.prototype.showUpdates = function (productId) {
        var _this = this;
        this.updates = true;
        var productUpdates = this.service.getProductUpdates(productId)
            .subscribe(function (products) {
            _this.productUpdates = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnProductcomponent = __decorate([
        core_1.Component({
            selector: "ownProducts",
            templateUrl: "app/ProductOwner/ownProduct.html",
            providers: [app_service_1.Service],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], OwnProductcomponent);
    return OwnProductcomponent;
}());
exports.OwnProductcomponent = OwnProductcomponent;
//# sourceMappingURL=ownProduct.js.map