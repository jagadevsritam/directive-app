import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitcounCustomtComponentComponent } from './digitcoun-customt-component.component';

describe('DigitcounCustomtComponentComponent', () => {
  let component: DigitcounCustomtComponentComponent;
  let fixture: ComponentFixture<DigitcounCustomtComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitcounCustomtComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitcounCustomtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
