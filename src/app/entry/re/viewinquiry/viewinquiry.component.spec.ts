import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinquiryComponent } from './viewinquiry.component';

describe('ViewinquiryComponent', () => {
  let component: ViewinquiryComponent;
  let fixture: ComponentFixture<ViewinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
