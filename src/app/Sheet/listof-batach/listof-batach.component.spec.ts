import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofBatachComponent } from './listof-batach.component';

describe('ListofBatachComponent', () => {
  let component: ListofBatachComponent;
  let fixture: ComponentFixture<ListofBatachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofBatachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofBatachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
