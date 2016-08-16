import { Component, OnInit,Input } from '@angular/core';
import { Owner } from './owner';
import { UserService } from './user.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl:'app/User/owner-form.component.html',
    providers:[UserService]
})
export class UserComponent implements OnInit {
    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private ownerservice: UserService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();}
   
    ngOnInit() {
    }

    beOwner: boolean = false;
    showForm(): void {
        this.beOwner = !this.beOwner;
    }
    onSubmit(owner: Owner) {
        console.log(owner);
        var postOwner = this.ownerservice.setOwner(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            }, err => {
                this.errorMessage = err;
            });

    }
}