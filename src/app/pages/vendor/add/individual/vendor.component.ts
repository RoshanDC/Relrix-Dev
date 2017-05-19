import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { Http } from "@angular/http";
import 'rxjs/Rx';

import {VendorService} from './vendor.service';


@Component({
  selector: 'vendor',
  providers: [VendorService],
  templateUrl: './vendor.html',
})
export class Vendor {

	usernameStatus;
  message;

  firstname;
  lastname;
  username;
  password;
  email;
  gender;
  website;
  phone;
  profession;
  dob;
  street;
  state;
  city;
  country;
  createdBy;
  newID;
  vid;
  role;
  

  constructor(private http: Http, private router: Router, private vendorservice: VendorService) {
    this.vendorservice.getLatestVid().subscribe((data)=> this.vid = data); // To get the latest Vendorid
    this.vendorservice.getLatestLoginID().subscribe((data)=> this.newID = data); // To get the latest Loginid
  }

  public usernameChecker(){
  	var username = (<HTMLInputElement>document.getElementById('inputUsername')).value;

  	if(username!=""){
	  		this.vendorservice.checkUsername(username).subscribe(
		      (data) => this.usernameStatus = data
		    );
  	}

    if(username==""){
      this.usernameStatus = "";
    }
  }

  public addVendor(event){
    this.createdBy = this.vendorservice.getAdmin();
    this.password = this.vendorservice.generateRandomPassword();
   
    var newLogin = {
      lid: (this.newID)+1,
      username: this.username,
      password: Md5.hashStr(this.password),
      role: 'Vendor'
    };

    var newVendor = {
      vid: (this.vid)+1,
      info: {
        firstname: this.firstname,
        lastname: this.lastname,
        gender: this.gender,
        profession: this.profession,
        contactnumber: this.phone,
        dob: this.dob
      },
      email: this.email,
      website: this.website,
      location: {
        street: this.street,
        state: this.state,
        city: this.city,
        country: this.country
      },
      type: 'Individual'
    };

    //this.vendorservice.addNewLogin(newLogin).subscribe(user => {});
    //this.vendorservice.addNewVendor(newVendor).subscribe(user => {});

    this.message = 'Vendor Added Successfully';
    console.log(newLogin);


  }


}
