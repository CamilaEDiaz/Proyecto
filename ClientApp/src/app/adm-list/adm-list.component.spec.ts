import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListComponent } from './adm-list.component';

describe('AdmListComponent', () => {
  let component: AdmListComponent;
  let fixture: ComponentFixture<AdmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
