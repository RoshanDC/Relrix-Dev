import {Component} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  superadmininfo;

  constructor(private _baMsgCenterService:BaMsgCenterService) {

    this._baMsgCenterService.getSuperAdminInfo().subscribe(
      (data) => this.superadmininfo = data
    );
    
  }

}
