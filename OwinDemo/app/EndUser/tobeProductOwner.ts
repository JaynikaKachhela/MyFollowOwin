import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Owner } from './owner';
import { UserService } from './user.service';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "tobeProductOwner",
    templateUrl: "app/EndUser/tobeProductOwner.html",
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class ToBeProductOwnercomponent {
    owners: Array<Owner>;
    owner: Owner;
    fillForm: boolean = false;
    errorMessage: string;
    constructor(private userservice: UserService) {
       this.owners = new Array<Owner>();
       this.owner = new Owner();
    }
   
    OnLoad() {
        this.fillForm = false;
    }
    onSubmit(owner: Owner) {
        console.log(owner);
        var postOwner = this.userservice.setOwner(owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });
        this.fillForm = true;
        console.log("Added...");
    }
}