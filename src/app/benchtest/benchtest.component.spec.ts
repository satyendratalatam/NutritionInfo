import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchtestComponent } from './benchtest.component';

describe('BenchtestComponent', () => {
  let component: BenchtestComponent;
  let fixture: ComponentFixture<BenchtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
