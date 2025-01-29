import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtoBankComponent } from './cashto-bank.component';

describe('CashtoBankComponent', () => {
  let component: CashtoBankComponent;
  let fixture: ComponentFixture<CashtoBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashtoBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashtoBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
