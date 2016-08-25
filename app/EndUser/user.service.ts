﻿import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owner }          from './owner';
import { Product } from '../ProductOwner/product';

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
export class UserService {
    private ownerUrl = 'api/ApplicationUsers';
    private productUrl = 'api/Products';
    private followUrl='api/Followers'

    constructor(private http: Http) { }

    getProduct() {
        return this.http.get(this.productUrl)
            .map(response => response.json());
    }

    getFollowedProduct() {
        return this.http.get(this.productUrl+'/5')
            .map(response => response.json());
    }

    deleteFollower(product: Product) {
        return this.http.delete(this.followUrl + "/" + product.Id).map(response => response.json());
    }
    newFollow(product:Product) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        return this.http.put(this.followUrl + '/' + product.Id, { headers: headers }).map(res => res.json());
    }

    setOwner(owner: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.ownerUrl, JSON.stringify(owner), { headers: headers })
            .map(res => res.json().data)
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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