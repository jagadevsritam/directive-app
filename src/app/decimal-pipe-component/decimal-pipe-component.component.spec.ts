import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalPipeComponentComponent } from './decimal-pipe-component.component';

describe('DecimalPipeComponentComponent', () => {
  let component: DecimalPipeComponentComponent;
  let fixture: ComponentFixture<DecimalPipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalPipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalPipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
