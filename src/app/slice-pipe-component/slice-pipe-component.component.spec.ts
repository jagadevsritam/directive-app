import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicePipeComponentComponent } from './slice-pipe-component.component';

describe('SlicePipeComponentComponent', () => {
  let component: SlicePipeComponentComponent;
  let fixture: ComponentFixture<SlicePipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicePipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicePipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
