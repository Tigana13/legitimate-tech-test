import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAddStoreModalDirective]'
})
export class AddStoreModalDirective {
  constructor(public viewContainerRef?: ViewContainerRef) { }
}
