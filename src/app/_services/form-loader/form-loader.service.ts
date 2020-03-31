import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormLoaderService {

  @Output() loading: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

}
