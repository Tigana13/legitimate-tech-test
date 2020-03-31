import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appSampleChart]'
})
export class SampleChartDirective {
  constructor(public viewContainerRef?: ViewContainerRef) { }
}
