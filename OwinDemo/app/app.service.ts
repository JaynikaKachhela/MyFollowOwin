import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owners }          from './Model/productOwner';
import { Product }          from './Model/product';
import { ProductUpdate }    from './Model/productUpdate';
import { Owner } from './Model/owner';

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Service {

    private productUpdateUrl = 'api/ProductUpdates';
    private ownerUrl = 'api/ApplicationUsers';
    private productUrl = 'api/Products';
    private followUrl = 'api/Followers';

    constructor(private http: Http) { }
    getOwner() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());
    }
    deleteOwnerState(ownerId: string) {
        console.log("delete is invoked");

        return this.http.delete(this.ownerUrl + "/" + ownerId);
    }
    UpdateOwnerState(owner: Owners) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        console.log("put is invoked");
        return this.http.put(this.ownerUrl + '/' + owner.Id, JSON.stringify(Owners), { headers: headers });
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    setProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.productUrl, JSON.stringify(product), { headers: headers });
    }
    getProducts() {
        return this.http.get(this.productUrl)
            .map(response => response.json());
    }

    getAllProduct() {
        return this.http.get(this.productUrl + '/7')
            .map(response => response.json());
    }
    deleteProduct(product: Product) {
        return this.http.delete(this.productUrl + "/" + product.Id);
    }

    getProductUpdates(productId: number) {
        return this.http.get(this.productUpdateUrl + '/' + productId)
            .map(response => response.json());
    }

    editProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers });

    }
    setProductUpdate(productUpdate: ProductUpdate) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.productUpdateUrl, JSON.stringify(productUpdate), { headers: headers });
    }

    getProduct() {
        return this.http.get(this.productUrl)
            .map(response => response.json());
    }

    getFollowedProduct() {
        return this.http.get(this.productUrl + '/5')
            .map(response => response.json());
    }

    deleteFollower(product: Product) {
        return this.http.delete(this.followUrl + "/" + product.Id);
    }
    newFollow(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        return this.http.put(this.followUrl + '/' + product.Id, { headers: headers });
    }

    setOwner(owner: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.ownerUrl, JSON.stringify(owner), { headers: headers });
    }


    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}