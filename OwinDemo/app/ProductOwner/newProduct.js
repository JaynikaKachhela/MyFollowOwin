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
var router_1 = require('@angular/router');
var product_1 = require('../Model/product');
var app_service_1 = require('../app.service');
var common_1 = require('@angular/common');
var NewProductcomponent = (function () {
    function NewProductcomponent(ownerservice) {
        this.ownerservice = ownerservice;
        this.newProduct = false;
        this.products = new Array();
        this.product = new product_1.Product();
        this.newProduct = false;
    }
    NewProductcomponent.prototype.Back = function () {
        this.newProduct = false;
        this.product = new product_1.Product();
    };
    NewProductcomponent.prototype.onSubmit = function (product) {
        var _this = this;
        console.log(product);
        var postOwner = this.ownerservice.setProduct(this.product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.newProduct = true;
        });
        console.log("Insered !!!");
    };
    NewProductcomponent = __decorate([
        core_1.Component({
            selector: "newProduct",
            templateUrl: "app/ProductOwner/newProduct.html",
            providers: [app_service_1.Service],
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], NewProductcomponent);
    return NewProductcomponent;
}());
exports.NewProductcomponent = NewProductcomponent;
//# sourceMappingURL=newProduct.js.map