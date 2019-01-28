import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWithParametarComponent } from './edit-with-parametar.component';

describe('EditWithParametarComponent', () => {
  let component: EditWithParametarComponent;
  let fixture: ComponentFixture<EditWithParametarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWithParametarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWithParametarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
