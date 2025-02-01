import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountreceivedComponent } from './card-accountreceived.component';

describe('CardAccountreceivedComponent', () => {
  let component: CardAccountreceivedComponent;
  let fixture: ComponentFixture<CardAccountreceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAccountreceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAccountreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
