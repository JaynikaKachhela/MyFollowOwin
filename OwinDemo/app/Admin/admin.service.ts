import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Owner }          from './owner';
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
export class AdminService {
    private ownerUrl = 'api/ApplicationUsers';
    constructor(private http: Http) { }


    getOwner() {
        return this.http.get(this.ownerUrl)
            .map(response => response.json());
    }
    deleteOwnerState(ownerId: string) {
        console.log("delete is invoked");

        return this.http.delete(this.ownerUrl + "/" + ownerId).map(response => response.json());
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    UpdateOwnerState(owner: Owner) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        console.log("put is invoked");
        return this.http.put(this.ownerUrl +'/'+ owner.Id, JSON.stringify(Owner), { headers: headers }).map(res => res.json());
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