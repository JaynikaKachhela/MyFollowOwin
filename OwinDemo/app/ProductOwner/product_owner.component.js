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
var product_1 = require('./product');
var ProductOwnerComponent = (function () {
    function ProductOwnerComponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.newProduct = false;
        this.oldProduct = false;
        this.productDetail = false;
        this.editProduct = false;
        this.products = new Array();
        this.product = new product_1.Product();
    }
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
    ProductOwnerComponent.prototype.onNotEdit = function () {
        this.editProduct = false;
    };
    ProductOwnerComponent.prototype.ngOnInit = function () {
        //this.getProducts();
        this.productDetail = false;
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
        console.log("Insered !!!");
        this.product = null;
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
    ProductOwnerComponent = __decorate([
        core_1.Component({
            selector: 'product-owner',
            templateUrl: 'app/ProductOwner/product_owner.component.html',
            providers: [product_owner_service_1.ProductOwnerService]
        }), 
        __metadata('design:paramtypes', [product_owner_service_1.ProductOwnerService])
    ], ProductOwnerComponent);
    return ProductOwnerComponent;
}());
exports.ProductOwnerComponent = ProductOwnerComponent;
//# sourceMappingURL=product_owner.component.js.map