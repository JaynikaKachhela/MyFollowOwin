import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Service } from '../app.service';

import {FollowProductcomponent} from '../EndUser/FollowProducts';
import {ToBeProductOwnercomponent} from '../EndUser/tobeProductOwner';
import {Productcomponent} from '../EndUser/Product';


@Component({
     selector: 'my-user',
     templateUrl: 'app/EndUser/user.component.html',
     directives: [ROUTER_DIRECTIVES],
     providers: [Service],
     precompile: [Productcomponent, ToBeProductOwnercomponent, FollowProductcomponent]
})

export class UserComponent {
}