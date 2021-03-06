﻿import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {OwnProductcomponent}from './ownProduct'
import {NewProductcomponent}from './newProduct';
import {FollowProductcomponent}from '../EndUser/FollowProducts'

import {AllProductcomponent}from './allProduct'
import { Service } from '../app.service';


@Component({
    selector: 'product-owner',
    templateUrl: 'app/ProductOwner/product_owner.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [Service],
    precompile: [OwnProductcomponent, AllProductcomponent, NewProductcomponent, FollowProductcomponent]
})
export class ProductOwnerComponent {
}