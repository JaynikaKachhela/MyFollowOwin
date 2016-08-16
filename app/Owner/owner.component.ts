import { Component, OnInit } from '@angular/core';
import { Owner } from './owner';
import { OwnerService } from './owner.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl:'app/Owner/owner-form.component.html',
    providers:[OwnerService]
})
export class OwnerComponent implements OnInit {
    owners: Array<Owner>;
    owner: Owner;
    errorMessage: string;
    constructor(private ownerservice: OwnerService) {
        this.owners = new Array<Owner>();
        this.owner = new Owner();}

    ngOnInit() {
        this.getOwners();
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
    
    getOwners() {
     var displayOwner= this.ownerservice.getOwner()
            .subscribe((owners) => {
                this.owners = owners
                console.log(this.owners);
            }, err => {
                this.errorMessage = err;
            });
    }    
}