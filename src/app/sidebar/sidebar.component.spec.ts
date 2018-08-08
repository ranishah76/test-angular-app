import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideabrComponent } from './sideabr.component';

describe('SideabrComponent', () => {
  let component: SideabrComponent;
  let fixture: ComponentFixture<SideabrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideabrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
