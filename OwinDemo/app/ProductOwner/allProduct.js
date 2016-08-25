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
var app_service_1 = require('../app.service');
//Import for design purpose
var common_1 = require('@angular/common');
var AllProductcomponent = (function () {
    function AllProductcomponent(service) {
        this.service = service;
        this.getAllProducts();
    }
    AllProductcomponent.prototype.getAllProducts = function () {
        var _this = this;
        var displayOwner = this.service.getAllProduct()
            .subscribe(function (products) {
            _this.allProducts = products;
            console.log(_this.allProducts);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AllProductcomponent.prototype.followProduct = function (product) {
        var _this = this;
        this.service.newFollow(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getAllProducts();
        });
        console.log("Added...");
    };
    AllProductcomponent = __decorate([
        core_1.Component({
            selector: "allProduct",
            templateUrl: "app/ProductOwner/allProduct.html",
            providers: [app_service_1.Service],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], AllProductcomponent);
    return AllProductcomponent;
}());
exports.AllProductcomponent = AllProductcomponent;
//# sourceMappingURL=allProduct.js.map