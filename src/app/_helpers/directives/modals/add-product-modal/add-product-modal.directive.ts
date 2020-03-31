import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAddProductModalDirective]'
})
export class AddProductModalDirective {
  constructor(public viewContainerRef?: ViewContainerRef) { }
}
