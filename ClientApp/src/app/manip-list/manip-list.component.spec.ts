import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipListComponent } from './manip-list.component';

describe('ManipListComponent', () => {
  let component: ManipListComponent;
  let fixture: ComponentFixture<ManipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
