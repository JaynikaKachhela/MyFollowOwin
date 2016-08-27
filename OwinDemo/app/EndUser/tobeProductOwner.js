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
var owner_1 = require('../Model/owner');
var app_service_1 = require('../app.service');
//Import for design purpose
var common_1 = require('@angular/common');
var ToBeProductOwnercomponent = (function () {
    function ToBeProductOwnercomponent(userservice) {
        this.userservice = userservice;
        this.fillForm = false;
        this.isPending = false;
        this.owners = new Array();
        this.owner = new owner_1.Owner();
        this.fillForm = false;
    }
    ToBeProductOwnercomponent.prototype.ngOnInit = function () {
        this.getLoginUser();
    };
    ToBeProductOwnercomponent.prototype.getLoginUser = function () {
        var _this = this;
        var displayOwner = this.userservice.getLoginUser()
            .subscribe(function (owners) {
            _this.productOwners = owners;
            _this.productOwner = _this.productOwners[0];
            _this.isPending = _this.productOwner.isPending;
            console.log(_this.isPending);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    ToBeProductOwnercomponent.prototype.onSubmit = function (owner) {
        var _this = this;
        console.log(owner);
        var postOwner = this.userservice.setOwner(owner)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.fillForm = true;
        });
        console.log("Added...");
        this.owner = new owner_1.Owner();
    };
    ToBeProductOwnercomponent = __decorate([
        core_1.Component({
            selector: "tobeProductOwner",
            templateUrl: "app/EndUser/tobeProductOwner.html",
            providers: [app_service_1.Service],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], ToBeProductOwnercomponent);
    return ToBeProductOwnercomponent;
}());
exports.ToBeProductOwnercomponent = ToBeProductOwnercomponent;
//# sourceMappingURL=tobeProductOwner.js.map