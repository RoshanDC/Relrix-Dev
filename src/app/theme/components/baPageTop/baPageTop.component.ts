import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {GlobalState} from '../../../global.state';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  logout(){
    document.cookie = "sessionID=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
    document.cookie = "ID=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
    this.router.navigate(['login']);
  }

}
