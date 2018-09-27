import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateStoreComponent } from './generate-store.component';

describe('GenerateStoreComponent', () => {
  let component: GenerateStoreComponent;
  let fixture: ComponentFixture<GenerateStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
