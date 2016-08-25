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
var user_service_1 = require('./user.service');
var FollowProducts_1 = require('../EndUser/FollowProducts');
var tobeProductOwner_1 = require('../EndUser/tobeProductOwner');
var Product_1 = require('../EndUser/Product');
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        core_1.Component({
            selector: 'my-user',
            templateUrl: 'app/EndUser/user.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [user_service_1.UserService],
            precompile: [Product_1.Productcomponent, tobeProductOwner_1.ToBeProductOwnercomponent, FollowProducts_1.FollowProductcomponent]
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map