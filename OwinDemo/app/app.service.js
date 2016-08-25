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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var productOwner_1 = require('./Model/productOwner');
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var Service = (function () {
    function Service(http) {
        this.http = http;
        this.productUpdateUrl = 'api/ProductUpdates';
        this.ownerUrl = 'api/ApplicationUsers';
        this.productUrl = 'api/Products';
        this.followUrl = 'api/Followers';
    }
    Service.prototype.getOwner = function () {
        return this.http.get(this.ownerUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.deleteOwnerState = function (ownerId) {
        console.log("delete is invoked");
        return this.http.delete(this.ownerUrl + "/" + ownerId);
    };
    Service.prototype.UpdateOwnerState = function (owner) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        console.log("put is invoked");
        return this.http.put(this.ownerUrl + '/' + owner.Id, JSON.stringify(productOwner_1.Owners), { headers: headers });
    };
    Service.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    Service.prototype.setProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.productUrl, JSON.stringify(product), { headers: headers });
    };
    Service.prototype.getProducts = function () {
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.getAllProduct = function () {
        return this.http.get(this.productUrl + '/7')
            .map(function (response) { return response.json(); });
    };
    Service.prototype.deleteProduct = function (product) {
        return this.http.delete(this.productUrl + "/" + product.Id);
    };
    Service.prototype.getProductUpdates = function (productId) {
        return this.http.get(this.productUpdateUrl + '/' + productId)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.editProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers });
    };
    Service.prototype.setProductUpdate = function (productUpdate) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.productUpdateUrl, JSON.stringify(productUpdate), { headers: headers });
    };
    Service.prototype.getProduct = function () {
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); });
    };
    Service.prototype.getFollowedProduct = function () {
        return this.http.get(this.productUrl + '/5')
            .map(function (response) { return response.json(); });
    };
    Service.prototype.deleteFollower = function (product) {
        return this.http.delete(this.followUrl + "/" + product.Id);
    };
    Service.prototype.newFollow = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.followUrl + '/' + product.Id, { headers: headers });
    };
    Service.prototype.setOwner = function (owner) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.ownerUrl, JSON.stringify(owner), { headers: headers });
    };
    Service.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=app.service.js.map