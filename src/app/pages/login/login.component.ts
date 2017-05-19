import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { Http } from "@angular/http";
import 'rxjs/Rx';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  errorMessage;

  constructor(private http: Http, private router: Router) {
    
  }

  ngOnInit(){
    var x = document.cookie.split(';');
    var i=0;
    var userID;
    var ID;
    
    var hashForSuperAdmin = 'dbf36ff3e3827639223983ee8ac47b42';

    for(;i<x.length; i++){
      if(x[i].split('=')[0].trim() == 'sessionID'){
        userID = x[i].split('=')[1];
      }
      if(x[i].split('=')[0].trim() == 'ID'){
        ID = x[i].split('=')[1];
      }
    }

    if(userID == hashForSuperAdmin && ID){
      this.router.navigate(['pages/dashboard'])
    }

  }

  formSubmit(username, password){
      var usr = username;
      var pwd = Md5.hashStr(password);

      this.http.get('http://localhost:8080/login/' + usr + '/' + pwd, "")
      .map(res =>  res.json())
      .subscribe((user) => {
        if(user[0]!=null){
          if(user[0].role == 'Super Admin'){
            var sessionID = Md5.hashStr(user[0].role);
            document.cookie = "sessionID=" + sessionID;
            document.cookie = "ID=" + user[0].lid;
            this.router.navigate(['pages/dashboard']);
          }
          else{
            document.getElementById('errorMessage').className = 'error';
            this.errorMessage = 'Invalid Username or Password';
            setTimeout(function() {
              document.getElementById('errorMessage').className = 'hideError';
            }, 1000);
            document.cookie = "sessionID=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
            document.cookie = "ID=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
          }
        }
      });


    }

}
