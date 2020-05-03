import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsViewComponent } from './add-news-view.component';

describe('AddNewsViewComponent', () => {
  let component: AddNewsViewComponent;
  let fixture: ComponentFixture<AddNewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
