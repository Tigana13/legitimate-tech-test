import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInvoiceCustomization]',
})
export class InvoiceCustomizationDirective {
  constructor(public viewContainerRef?: ViewContainerRef) { }
}
