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
var product_1 = require('./product');
var product_owner_service_1 = require('./product_owner.service');
//Import for design purpose
var common_1 = require('@angular/common');
var NewProductcomponent = (function () {
    function NewProductcomponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.newProduct = false;
        this.products = new Array();
        this.product = new product_1.Product();
        this.newProduct = false;
    }
    NewProductcomponent.prototype.OnLoad = function () {
        this.newProduct = false;
    };
    NewProductcomponent.prototype.onSubmit = function (product) {
        var _this = this;
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.newProduct = true;
        console.log("Insered !!!");
    };
    NewProductcomponent = __decorate([
        core_1.Component({
            selector: "newProduct",
            templateUrl: "app/ProductOwner/newProduct.html",
            providers: [product_owner_service_1.ProductOwnerService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [product_owner_service_1.ProductOwnerService])
    ], NewProductcomponent);
    return NewProductcomponent;
}());
exports.NewProductcomponent = NewProductcomponent;
//# sourceMappingURL=newProduct.js.map