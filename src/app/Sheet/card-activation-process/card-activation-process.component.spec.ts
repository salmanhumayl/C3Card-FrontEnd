import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivationProcessComponent } from './card-activation-process.component';

describe('CardActivationProcessComponent', () => {
  let component: CardActivationProcessComponent;
  let fixture: ComponentFixture<CardActivationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardActivationProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardActivationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
