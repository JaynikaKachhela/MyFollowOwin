import { Component, OnInit, Input } from '@angular/core';
import { Owners } from '../Model/productOwner';
import { Service } from '../app.service';

@Component({
    selector: 'my-admin',
    templateUrl: 'app/Admin/admin-form.component.html',
    providers: [Service]
})
export class AdminComponent implements OnInit {
    owners: Array<Owners>;
    owners1: Array<Owners>;

    owner: Owners;
    Click: boolean = false;
   
    errorMessage: string;
    constructor(private adminservice: Service) {
        this.owners = new Array<Owners>();
        this.owners1 = new Array<Owners>();
        this.owner = new Owners();
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
            .subscribe(
                    function (response) { console.log("Success Response" + response) },
                    function (error) { console.log("Error happened" + error) },
                    () => { this.getOwners(); 
            });
    }
    deleteOwnerData(ownerId: string) {
        this.adminservice.deleteOwnerState(this.owner.Id)
            .subscribe(
                   function (response) { console.log("Success Response" + response) },
                   function (error) { console.log("Error happened" + error) },
                   () => {this.getOwners(); 
            });
       
    }

    Reject(ownerId: string) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.deleteOwnerData(this.owner.Id);
      
    }
    Approve(ownerId: string) {
        this.Click = true;
        this.owner.Id = ownerId;
        this.UpdateOwnerData();
       
    }
}