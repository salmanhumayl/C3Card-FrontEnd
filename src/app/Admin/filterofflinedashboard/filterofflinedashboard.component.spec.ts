import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterofflinedashboardComponent } from './filterofflinedashboard.component';

describe('FilterofflinedashboardComponent', () => {
  let component: FilterofflinedashboardComponent;
  let fixture: ComponentFixture<FilterofflinedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterofflinedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterofflinedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
