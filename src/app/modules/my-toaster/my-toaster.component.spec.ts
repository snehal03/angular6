/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyToasterComponent } from './my-toaster.component';

describe('MyToasterComponent', () => {
  let component: MyToasterComponent;
  let fixture: ComponentFixture<MyToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
