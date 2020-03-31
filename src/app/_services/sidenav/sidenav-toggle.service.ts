import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavToggleService {
  toggleState: Observable<boolean> | any = of(true);

  constructor() { }

  toggleSidenavStatus() {
    return this.toggleState.subscribe(status => {
      if (status) {
        this.toggleState = of(false);
      } else {
        this.toggleState = of(true);
      }
    });
  }
}
