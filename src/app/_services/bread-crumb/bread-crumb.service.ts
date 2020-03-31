import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {
  @Output() title: EventEmitter<string> = new EventEmitter();
  constructor() { }
}
