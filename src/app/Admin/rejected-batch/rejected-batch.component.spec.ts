import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedBatchComponent } from './rejected-batch.component';

describe('RejectedBatchComponent', () => {
  let component: RejectedBatchComponent;
  let fixture: ComponentFixture<RejectedBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
