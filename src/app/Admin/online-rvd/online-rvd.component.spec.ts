import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRVDComponent } from './online-rvd.component';

describe('OnlineRVDComponent', () => {
  let component: OnlineRVDComponent;
  let fixture: ComponentFixture<OnlineRVDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineRVDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineRVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
