import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import { Owner } from '../Model/owner';
import { Service } from '../app.service';
//Import for design purpose
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: "tobeProductOwner",
    templateUrl: "app/EndUser/tobeProductOwner.html",
    providers: [Service],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class ToBeProductOwnercomponent {
    owners: Array<Owner>;
    owner: Owner;
   
    fillForm: boolean = false;
   
    errorMessage: string;
    constructor(private userservice: Service) {
       this.owners = new Array<Owner>();
       this.owner = new Owner();
       this.fillForm = false;
    }
    onSubmit(owner: Owner) {
        console.log(owner);
        var postOwner = this.userservice.setOwner(owner)
            .subscribe(
            function (response) { console.log("Success Response" + response) },
            function (error) { console.log("Error happened" + error) },
            () => {
                this.fillForm = true;
            });
        console.log("Added...");
    }
}