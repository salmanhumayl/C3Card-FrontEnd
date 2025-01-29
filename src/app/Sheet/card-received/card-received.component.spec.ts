import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReceivedComponent } from './card-received.component';

describe('CardReceivedComponent', () => {
  let component: CardReceivedComponent;
  let fixture: ComponentFixture<CardReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
