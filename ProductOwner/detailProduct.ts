import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {ROUTER_DIRECTIVES, Router } from "@angular/router-deprecated";
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';
import {Product} from './product';
import { ProductUpdate } from './productUpdate'
import { ProductOwnerService } from './product_owner.service';
import { UserService } from '../EndUser/user.service';


@Component({
    selector: "detail",
    templateUrl: "app/ProductOwner/ownProduct.html",
    providers: [],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class DetailProductcomponent implements OnInit {
    id: any;
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = this.activatedRoute.params.subscribe(params => { });
        console.log("id:", this.id);
    }
}