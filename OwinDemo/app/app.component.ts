import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService }     from './User/user.service';

@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['/owner']" routerLinkActive="active">TobeProductOwner</a>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        UserService
    ]
})
export class AppComponent {

}