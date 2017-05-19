import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService,  private router: Router) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    var hashForAdmin = 'dbf36ff3e3827639223983ee8ac47b42';

    var x = document.cookie.split(';');
    var i=0;
    var sessionID;
    var ID;

    for(;i<x.length; i++){
      if(x[i].split('=')[0].trim() == 'sessionID'){
        sessionID = x[i].split('=')[1];
      }
      if(x[i].split('=')[0].trim() == 'ID'){
        ID = x[i].split('=')[1];
      }
    }

    if(sessionID != hashForAdmin){
      this.router.navigate(['login']);
    }
    else{
      console.log('Authorized');
    }
  }

  
}
