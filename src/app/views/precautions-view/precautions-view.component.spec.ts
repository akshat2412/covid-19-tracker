import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionsViewComponent } from './precautions-view.component';

describe('PrecautionsViewComponent', () => {
  let component: PrecautionsViewComponent;
  let fixture: ComponentFixture<PrecautionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
