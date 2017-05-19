import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class BaMsgCenterService {

  constructor(private http: Http, private router: Router) {
    
  }
 
  public getSuperAdminID(){
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

  public getSuperAdminInfo(){
    var ID = this.getSuperAdminID();

    return this.http.get('http://localhost:5000/superadmin/' + ID).map(
      (res) => res.json()
    );
  }


}
