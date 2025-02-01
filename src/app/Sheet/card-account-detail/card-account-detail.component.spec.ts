import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountDetailComponent } from './card-account-detail.component';

describe('CardAccountDetailComponent', () => {
  let component: CardAccountDetailComponent;
  let fixture: ComponentFixture<CardAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
