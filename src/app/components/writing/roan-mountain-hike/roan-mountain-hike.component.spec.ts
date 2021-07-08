import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoanMountainHikeComponent } from './roan-mountain-hike.component';

describe('RoanMountainHikeComponent', () => {
  let component: RoanMountainHikeComponent;
  let fixture: ComponentFixture<RoanMountainHikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoanMountainHikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoanMountainHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
