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
var ProductOwnerService = (function () {
    function ProductOwnerService(http) {
        this.http = http;
        this.productUrl = 'api/Products';
        this.productUpdateUrl = 'api/ProductUpdates';
    }
    ProductOwnerService.prototype.setProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.productUrl, JSON.stringify(product), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    ProductOwnerService.prototype.getProduct = function () {
        return this.http.get(this.productUrl)
            .map(function (response) { return response.json(); });
    };
    ProductOwnerService.prototype.getAllProduct = function () {
        return this.http.get(this.productUrl + '/7')
            .map(function (response) { return response.json(); });
    };
    ProductOwnerService.prototype.deleteProduct = function (product) {
        return this.http.delete(this.productUrl + "/" + product.Id).map(function (response) { return response.json(); });
    };
    ProductOwnerService.prototype.editProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers }).map(function (res) { return res.json(); });
    };
    ProductOwnerService.prototype.setProductUpdate = function (productUpdate) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.productUpdateUrl, JSON.stringify(productUpdate), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    ProductOwnerService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ProductOwnerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ProductOwnerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductOwnerService);
    return ProductOwnerService;
}());
exports.ProductOwnerService = ProductOwnerService;
//# sourceMappingURL=product_owner.service.js.map