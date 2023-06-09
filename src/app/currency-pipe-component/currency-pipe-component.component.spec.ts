import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPipeComponentComponent } from './currency-pipe-component.component';

describe('CurrencyPipeComponentComponent', () => {
  let component: CurrencyPipeComponentComponent;
  let fixture: ComponentFixture<CurrencyPipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyPipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
