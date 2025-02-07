import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModelComponent } from './my-model.component';

describe('MyModelComponent', () => {
  let component: MyModelComponent;
  let fixture: ComponentFixture<MyModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
