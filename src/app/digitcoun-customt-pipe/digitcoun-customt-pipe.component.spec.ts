import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitcounCustomtPipeComponent } from './digitcoun-customt-pipe.component';

describe('DigitcounCustomtPipeComponent', () => {
  let component: DigitcounCustomtPipeComponent;
  let fixture: ComponentFixture<DigitcounCustomtPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitcounCustomtPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitcounCustomtPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
