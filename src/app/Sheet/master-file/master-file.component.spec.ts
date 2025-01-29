import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFileComponent } from './master-file.component';

describe('MasterFileComponent', () => {
  let component: MasterFileComponent;
  let fixture: ComponentFixture<MasterFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
