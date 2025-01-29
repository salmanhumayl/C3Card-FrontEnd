import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AJESCashComponent } from './ajescash.component';

describe('AJESCashComponent', () => {
  let component: AJESCashComponent;
  let fixture: ComponentFixture<AJESCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AJESCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AJESCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
