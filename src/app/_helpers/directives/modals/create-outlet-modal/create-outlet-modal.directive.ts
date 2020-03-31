import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCreateOutletModal]',
})
export class CreateOutletModalDirective {
  constructor(public viewContainerRef?: ViewContainerRef) { }
}
