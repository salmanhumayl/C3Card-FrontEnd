import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelistingComponent } from './onlinelisting.component';

describe('OnlinelistingComponent', () => {
  let component: OnlinelistingComponent;
  let fixture: ComponentFixture<OnlinelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinelistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
