import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinedashboardComponent } from './offlinedashboard.component';

describe('OfflinedashboardComponent', () => {
  let component: OfflinedashboardComponent;
  let fixture: ComponentFixture<OfflinedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
