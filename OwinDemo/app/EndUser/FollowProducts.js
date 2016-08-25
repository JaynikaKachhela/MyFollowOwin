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
//Import for design purpose
var common_1 = require('@angular/common');
var user_service_1 = require('./user.service');
var FollowProductcomponent = (function () {
    function FollowProductcomponent(userservice) {
        this.userservice = userservice;
        this.unfollowed = [];
        this.followedProduct = new Array();
        this.followedProduct1 = new Array();
        this.product = new product_1.Product();
    }
    FollowProductcomponent.prototype.ngOnInit = function () {
        this.getFollowedProduct();
        this.unfollowed[this.product.Id] = false;
    };
    FollowProductcomponent.prototype.unfollowProduct = function (product) {
        var _this = this;
        this.userservice.deleteFollower(product)
            .subscribe(function (products) {
            _this.followedProduct1 = products;
        }, function (err) {
            _this.errorMessage = err;
        });
        this.unfollowed[this.product.Id] = true;
        console.log("unfollow...");
    };
    FollowProductcomponent.prototype.getFollowedProduct = function () {
        var _this = this;
        var displayOwner = this.userservice.getFollowedProduct()
            .subscribe(function (products) {
            _this.followedProduct = products;
            console.log(_this.followedProduct);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    FollowProductcomponent = __decorate([
        core_1.Component({
            selector: "products",
            templateUrl: "app/EndUser/followProducts.html",
            providers: [user_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], FollowProductcomponent);
    return FollowProductcomponent;
}());
exports.FollowProductcomponent = FollowProductcomponent;
//# sourceMappingURL=FollowProducts.js.map