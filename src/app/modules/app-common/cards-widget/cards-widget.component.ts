import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-widget',
  templateUrl: './cards-widget.component.html',
  styleUrls: ['./cards-widget.component.scss']
})
export class CardsWidgetComponent implements OnInit {
  @Input() cards: any[];
  @Output() filter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    //
  }

  clicked(clickedCard: any) {
    this.filter.emit(clickedCard);
  }

}
