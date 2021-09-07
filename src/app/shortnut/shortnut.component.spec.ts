import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortnutComponent } from './shortnut.component';

describe('ShortnutComponent', () => {
  let component: ShortnutComponent;
  let fixture: ComponentFixture<ShortnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
