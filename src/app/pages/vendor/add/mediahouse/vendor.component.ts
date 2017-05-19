import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

import { Http } from "@angular/http";
import 'rxjs/Rx';


@Component({
  selector: 'vendor',
  templateUrl: './vendor.html',
})
export class Vendor {
	errorMessage;

  constructor(private http: Http, private router: Router) {
  	this.errorMessage = 'Hello';
  }


}
