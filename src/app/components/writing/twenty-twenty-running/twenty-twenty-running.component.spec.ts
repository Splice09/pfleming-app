import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyTwentyRunningComponent } from './twenty-twenty-running.component';

describe('TwentyTwentyRunningComponent', () => {
  let component: TwentyTwentyRunningComponent;
  let fixture: ComponentFixture<TwentyTwentyRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyTwentyRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyTwentyRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
