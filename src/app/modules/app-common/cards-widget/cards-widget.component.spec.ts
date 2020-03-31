import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWidgetComponent } from './cards-widget.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('CardsWidgetComponent', () => {
  let component: CardsWidgetComponent;
  let fixture: ComponentFixture<CardsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWidgetComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
