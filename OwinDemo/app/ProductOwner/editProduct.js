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
var router_deprecated_1 = require("@angular/router-deprecated");
//Import for design purpose
var common_1 = require('@angular/common');
var product_1 = require('./product');
var product_owner_service_1 = require('./product_owner.service');
var EditProductcomponent = (function () {
    function EditProductcomponent(activatedRoute, ownerservice) {
        this.activatedRoute = activatedRoute;
        this.ownerservice = ownerservice;
        this.product = new product_1.Product();
        this.products = new Array();
    }
    EditProductcomponent.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.params.subscribe(function (params) { });
        console.log("id:", this.id);
    };
    EditProductcomponent.prototype.onNotEdit = function () {
        this.product = null;
    };
    EditProductcomponent.prototype.onEdit = function (product) {
        var _this = this;
        this.ownerservice.editProduct(product)
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        console.log("Edited...");
        this.product = null;
    };
    EditProductcomponent = __decorate([
        core_1.Component({
            selector: "edit",
            templateUrl: "app/ProductOwner/ownProduct.html",
            providers: [product_owner_service_1.ProductOwnerService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_owner_service_1.ProductOwnerService])
    ], EditProductcomponent);
    return EditProductcomponent;
}());
exports.EditProductcomponent = EditProductcomponent;
//# sourceMappingURL=editProduct.js.map