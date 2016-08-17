﻿import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Product }          from './product';
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
export class ProductOwnerService {
    private productUrl = 'api/Products';
   constructor(private http: Http) { }

   setProduct(product: Product) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.productUrl, JSON.stringify(product), { headers: headers })
            .map(res => res.json().data)
    }
   getProduct() {
       return this.http.get(this.productUrl)
           .map(response => response.json());
   }

   deleteProduct(product: Product) {
       return this.http.delete(this.productUrl + "/" + product.Id).map(response => response.json());
   }

   editProduct(product: Product) {
       let headers = new Headers({
           'Content-Type': 'application/json',
       });
       
       return this.http.put(this.productUrl + '/' + product.Id, JSON.stringify(product), { headers: headers }).map(res => res.json());
  
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