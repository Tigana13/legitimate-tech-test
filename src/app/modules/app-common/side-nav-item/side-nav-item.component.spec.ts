import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavItemComponent } from './side-nav-item.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

fdescribe('SideNavItemComponent', () => {
  let component: SideNavItemComponent;
  let fixture: ComponentFixture<SideNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ SideNavItemComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    
    component.item = {route: '', children: {}};
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
