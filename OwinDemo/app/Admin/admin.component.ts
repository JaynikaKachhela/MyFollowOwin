import { Component, OnInit, Input } from '@angular/core';
import {   } from './Owner';
import { Owner } from './owner';
import { AdminService } from './admin.service';

@Component({
    selector: 'my-admin',
    templateUrl: 'app/Admin/admin-form.component.html',
    providers: [AdminService]
})
export class AdminComponent implements OnInit {
    owners: Array<Owner>;
    owners1: Array<Owner>;

    owner: Owner;
    Click: boolean = false;
    approved: any[] = [];
    rejected: any[] = [];
    errorMessage: string;
    constructor(private adminservice: AdminService) {
        this.owners = new Array<Owner>();
        this.owners1 = new Array<Owner>();
        this.owner = new Owner();
    }

    ngOnInit() {
        this.getOwners();
    }
       
    getOwners() {
        var displayOwner = this.adminservice.getOwner()
            .subscribe((owners) => {
                this.owners = owners;
                console.log(this.owners);
            }, err => {
                this.errorMessage = err;
            });
    }
    UpdateOwnerData() {
        this.adminservice.UpdateOwnerState(this.owner)
            .subscribe((owners) => {
                this.owners = owners
            },
            err => {
                this.errorMessage = err;
            });
    }
    deleteOwnerData(ownerId: string) {
        this.adminservice.deleteOwnerState(this.owner.Id)
            .subscribe((owners) => {
                this.owners1 = owners
            },
            err => {
                this.errorMessage = err;
            });
       
    }

    Reject(ownerId: string) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.deleteOwnerData(this.owner.Id);
        this.rejected[this.owner.Id] = true;
       
    }
    Approve(ownerId: string) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.UpdateOwnerData();
        this.approved[this.owner.Id] = true;
       
    }
}