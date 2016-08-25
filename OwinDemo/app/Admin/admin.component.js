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
var productOwner_1 = require('../Model/productOwner');
var app_service_1 = require('../app.service');
var AdminComponent = (function () {
    function AdminComponent(adminservice) {
        this.adminservice = adminservice;
        this.Click = false;
        this.owners = new Array();
        this.owners1 = new Array();
        this.owner = new productOwner_1.Owners();
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getOwners();
    };
    AdminComponent.prototype.getOwners = function () {
        var _this = this;
        var displayOwner = this.adminservice.getOwner()
            .subscribe(function (owners) {
            _this.owners = owners;
            console.log(_this.owners);
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AdminComponent.prototype.UpdateOwnerData = function () {
        var _this = this;
        this.adminservice.UpdateOwnerState(this.owner)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getOwners();
        });
    };
    AdminComponent.prototype.deleteOwnerData = function (ownerId) {
        var _this = this;
        this.adminservice.deleteOwnerState(this.owner.Id)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
            _this.getOwners();
        });
    };
    AdminComponent.prototype.Reject = function (ownerId) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.deleteOwnerData(this.owner.Id);
    };
    AdminComponent.prototype.Approve = function (ownerId) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.UpdateOwnerData();
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'app/Admin/admin-form.component.html',
            providers: [app_service_1.Service]
        }), 
        __metadata('design:paramtypes', [app_service_1.Service])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map