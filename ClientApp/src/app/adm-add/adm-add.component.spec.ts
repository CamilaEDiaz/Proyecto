import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddComponent } from './adm-add.component';

describe('AdmAddComponent', () => {
  let component: AdmAddComponent;
  let fixture: ComponentFixture<AdmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
