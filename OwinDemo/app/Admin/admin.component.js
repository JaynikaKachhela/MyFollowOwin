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
var owner_1 = require('./owner');
var admin_service_1 = require('./admin.service');
var AdminComponent = (function () {
    function AdminComponent(adminservice) {
        this.adminservice = adminservice;
        this.Click = false;
        this.approved = [];
        this.rejected = [];
        this.owners = new Array();
        this.owners1 = new Array();
        this.owner = new owner_1.Owner();
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
            .subscribe(function (owners) {
            _this.owners = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AdminComponent.prototype.deleteOwnerData = function (ownerId) {
        var _this = this;
        this.adminservice.deleteOwnerState(this.owner.Id)
            .subscribe(function (owners) {
            _this.owners1 = owners;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    AdminComponent.prototype.Reject = function (ownerId) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.deleteOwnerData(this.owner.Id);
        this.rejected[this.owner.Id] = true;
    };
    AdminComponent.prototype.Approve = function (ownerId) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.UpdateOwnerData();
        this.approved[this.owner.Id] = true;
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'app/Admin/admin-form.component.html',
            providers: [admin_service_1.AdminService]
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map