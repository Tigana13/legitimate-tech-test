import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddOrderModalDirective]'
})

export class AddOrderModalDirective {
  constructor(public viewContainerRef?: ViewContainerRef) { }
}
