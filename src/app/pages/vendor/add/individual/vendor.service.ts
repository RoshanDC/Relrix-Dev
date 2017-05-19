import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class VendorService {

  constructor(private http: Http, private router: Router) {
    
  }

  public checkUsername(username){
    return this.http.get('http://localhost:8080/checkusername/' + username).map(
      (res) => res.json()
    );
  }

  public getLatestVid(){
    return this.http.get('http://localhost:5000/vendors/').map(
      (res) => res.json()
    );
  }

  public getLatestLoginID(){
    return this.http.get('http://localhost:5000/login/').map(
      (res) => res.json()
    );
  }

/*
  addNewLogin(newLogin){
    return this.http.post('http://localhost:5000/new/login', newLogin).map(
      (res) => res.json()
    );
  }

  addNewVendor(newVendor){
    return this.http.post('http://localhost:5000/new/vendor', newVendor).map(
      (res) => res.json()
    );
  }

  sendEmail(newVendor){
    return this.http.post('http://localhost:5000/send-mail', newVendor).map(
      (res) => res.json()
    );
  }

  */

  public getAdmin(){
  	var x = document.cookie.split(';');
    var i=0;
    var ID;
   
    for(;i<x.length; i++){
      if(x[i].split('=')[0].trim() == 'ID'){
        ID = x[i].split('=')[1];
      }
    }
    return ID;
  }

  public generateRandomPassword() {
    var length = 8;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#&";
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

}
