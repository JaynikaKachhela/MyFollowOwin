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
var product_1 = require('./product');
var productUpdate_1 = require('./productUpdate');
var product_owner_service_1 = require('./product_owner.service');
var user_service_1 = require('../EndUser/user.service');
var OwnProductcomponent = (function () {
    function OwnProductcomponent(ownerservice, userservice) {
        this.ownerservice = ownerservice;
        this.userservice = userservice;
        this.productUpdate = false;
        this.detailProduct = false;
        this.deleted = false;
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
    };
    OwnProductcomponent.prototype.getProducts = function () {
        var _this = this;
        var displayOwner = this.ownerservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
            //console.log(this.products);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnProductcomponent.prototype.onBack = function () {
        this.deleted = false;
        this.detailProduct = false;
        this.editProduct = false;
        this.productUpdate = false;
    };
    OwnProductcomponent.prototype.updateData = function (product) {
        this.editProduct = true;
        this.product = product;
    };
    OwnProductcomponent.prototype.onEdit = function (product) {
        var _this = this;
        this.ownerservice.editProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.editProduct = false;
        this.getProducts();
        console.log("Edited...");
    };
    OwnProductcomponent.prototype.detailedProduct = function (product) {
        this.detailProduct = true;
        this.product = product;
    };
    OwnProductcomponent.prototype.onDelete = function (product) {
        var _this = this;
        this.ownerservice.deleteProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.getProducts();
        this.deleted = true;
        console.log("Deleted...");
    };
    OwnProductcomponent.prototype.newProductUpdate = function (product) {
        this.productUpdate = true;
        this.detailProduct = false;
        this.product = product;
    };
    OwnProductcomponent.prototype.addProductUpdate = function (productupdate) {
        var _this = this;
        console.log("log ");
        productupdate.ProductId = this.product.Id;
        var postOwner = this.ownerservice.setProductUpdate(productupdate)
            .subscribe(function (productUpdates) {
            _this.productUpdates = productUpdates;
        }, function (err) {
            _this.errorMessage = err;
        });
        console.log(productupdate);
    };
    OwnProductcomponent = __decorate([
        core_1.Component({
            selector: "ownProducts",
            templateUrl: "app/ProductOwner/ownProduct.html",
            providers: [],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [product_owner_service_1.ProductOwnerService, user_service_1.UserService])
    ], OwnProductcomponent);
    return OwnProductcomponent;
}());
exports.OwnProductcomponent = OwnProductcomponent;
//# sourceMappingURL=ownProduct.js.map