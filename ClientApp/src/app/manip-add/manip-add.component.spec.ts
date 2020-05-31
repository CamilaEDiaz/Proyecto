import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipAddComponent } from './manip-add.component';

describe('ManipAddComponent', () => {
  let component: ManipAddComponent;
  let fixture: ComponentFixture<ManipAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
