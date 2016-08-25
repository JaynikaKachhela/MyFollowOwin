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
var router_1 = require('@angular/router');
var ownProduct_1 = require('./ownProduct');
var newProduct_1 = require('./newProduct');
var FollowProducts_1 = require('./FollowProducts');
var allProduct_1 = require('./allProduct');
var app_service_1 = require('../app.service');
var ProductOwnerComponent = (function () {
    function ProductOwnerComponent() {
    }
    ProductOwnerComponent = __decorate([
        core_1.Component({
            selector: 'product-owner',
            templateUrl: 'app/ProductOwner/product_owner.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [app_service_1.Service],
            precompile: [ownProduct_1.OwnProductcomponent, allProduct_1.AllProductcomponent, newProduct_1.NewProductcomponent, FollowProducts_1.FollowedProductcomponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductOwnerComponent);
    return ProductOwnerComponent;
}());
exports.ProductOwnerComponent = ProductOwnerComponent;
//# sourceMappingURL=product_owner.component.js.map