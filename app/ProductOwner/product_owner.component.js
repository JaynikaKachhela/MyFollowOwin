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
var product_owner_service_1 = require('./product_owner.service');
var productUpdate_1 = require('./productUpdate');
var product_1 = require('./product');
var user_service_1 = require('../EndUser/user.service');
var ProductOwnerComponent = (function () {
    function ProductOwnerComponent(ownerservice, userservice) {
        this.ownerservice = ownerservice;
        this.userservice = userservice;
        this.newProduct = false;
        this.oldProduct = false;
        this.isFolllowProducts = false;
        this.isProducts = false;
        this.productDetail = false;
        this.productUpdate = false;
        this.editProduct = false;
        this.products = new Array();
        this.allProducts = new Array();
        this.followedProduct = new Array();
        this.product = new product_1.Product();
        this.productsUpdate = new productUpdate_1.ProductUpdate();
        this.productUpdates = new Array();
    }
    ProductOwnerComponent.prototype.ngOnInit = function () {
        //this.getProducts();
        this.productDetail = false;
        this.productUpdate = false;
    };
    ProductOwnerComponent.prototype.showForm = function () {
        this.newProduct = !this.newProduct;
        this.productDetail = false;
        this.editProduct = false;
    };
    ProductOwnerComponent.prototype.showTable = function () {
        this.oldProduct = !this.oldProduct;
        this.editProduct = false;
        this.productDetail = false;
        this.getProducts();
    };
    ProductOwnerComponent.prototype.getProducts = function () {
        var _this = this;
        var displayOwner = this.ownerservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
            //console.log(this.products);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ProductOwnerComponent.prototype.showProduct = function () {
        this.isProducts = !this.isProducts;
        this.editProduct = false;
        this.productDetail = false;
        this.getAllProducts();
    };
    ProductOwnerComponent.prototype.getAllProducts = function () {
        var _this = this;
        var displayOwner = this.ownerservice.getAllProduct()
            .subscribe(function (products) {
            _this.allProducts = products;
            console.log(_this.allProducts);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ProductOwnerComponent.prototype.showFollowProduct = function () {
        this.isFolllowProducts = !this.isFolllowProducts;
        this.editProduct = false;
        this.productDetail = false;
        this.getFollowedProduct();
    };
    ProductOwnerComponent.prototype.getFollowedProduct = function () {
        var _this = this;
        var displayOwner = this.userservice.getFollowedProduct()
            .subscribe(function (products) {
            _this.followedProduct = products;
            console.log(_this.followedProduct);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ProductOwnerComponent.prototype.onSubmit = function (product) {
        var _this = this;
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.getProducts();
        this.newProduct = false;
        console.log("Insered !!!");
        this.product = null;
    };
    ProductOwnerComponent.prototype.onNotEdit = function () {
        this.editProduct = false;
        this.product = null;
    };
    ProductOwnerComponent.prototype.updateData = function (product) {
        this.editProduct = true;
        this.oldProduct = false;
        this.product = product;
    };
    ProductOwnerComponent.prototype.onEdit = function (product) {
        var _this = this;
        this.ownerservice.editProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.getProducts();
        console.log("Edited...");
        this.product = null;
    };
    ProductOwnerComponent.prototype.detailProduct = function (product) {
        this.productDetail = true;
        this.oldProduct = false;
        this.product = product;
    };
    ProductOwnerComponent.prototype.onDelete = function (product) {
        var _this = this;
        this.ownerservice.deleteProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.getProducts();
        console.log("Deleted...");
    };
    ProductOwnerComponent.prototype.followProduct = function (product) {
        var _this = this;
        this.userservice.newFollow(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.isProducts = false;
        this.isFolllowProducts = false;
        console.log("Added...");
    };
    ProductOwnerComponent.prototype.unfollowProduct = function (product) {
        var _this = this;
        this.userservice.deleteFollower(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.isProducts = false;
        this.isFolllowProducts = false;
        console.log("unfollow...");
    };
    ProductOwnerComponent.prototype.newProductUpdate = function (product) {
        this.productUpdate = true;
        this.productDetail = false;
        this.product = product;
        console.log("form");
    };
    ProductOwnerComponent.prototype.addProductUpdate = function (productupdate) {
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
    ProductOwnerComponent = __decorate([
        core_1.Component({
            selector: 'product-owner',
            templateUrl: 'app/ProductOwner/product_owner.component.html',
            providers: [product_owner_service_1.ProductOwnerService, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [product_owner_service_1.ProductOwnerService, user_service_1.UserService])
    ], ProductOwnerComponent);
    return ProductOwnerComponent;
}());
exports.ProductOwnerComponent = ProductOwnerComponent;
//# sourceMappingURL=product_owner.component.js.map