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
var product_1 = require('../ProductOwner/product');
var user_service_1 = require('./user.service');
//Import for design purpose
var common_1 = require('@angular/common');
var Productcomponent = (function () {
    function Productcomponent(userservice) {
        this.userservice = userservice;
        this.abc = false;
        this.approved = [];
        this.products = new Array();
        this.product = new product_1.Product();
        this.parentRouter = router_deprecated_1.Router;
    }
    Productcomponent.prototype.ngOnInit = function () {
        console.log("loaded..");
        this.getProducts();
    };
    Productcomponent.prototype.getProducts = function () {
        var _this = this;
        var displayProduct = this.userservice.getProduct()
            .subscribe(function (products) {
            _this.products = products;
            console.log(_this.products);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    Productcomponent.prototype.followProduct = function (product) {
        var _this = this;
        this.userservice.newFollow(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.approved[this.product.Id] = true;
        this.abc = true;
        console.log("Added...");
    };
    Productcomponent = __decorate([
        core_1.Component({
            selector: "Products",
            templateUrl: "app/EndUser/products.html",
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], Productcomponent);
    return Productcomponent;
}());
exports.Productcomponent = Productcomponent;
//# sourceMappingURL=Product.js.map