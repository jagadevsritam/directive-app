import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentPipeComponentComponent } from './percent-pipe-component.component';

describe('PercentPipeComponentComponent', () => {
  let component: PercentPipeComponentComponent;
  let fixture: ComponentFixture<PercentPipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentPipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentPipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
