import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyTwentyReadingListComponent } from './twenty-twenty-reading-list.component';

describe('TwentyTwentyReadingListComponent', () => {
  let component: TwentyTwentyReadingListComponent;
  let fixture: ComponentFixture<TwentyTwentyReadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyTwentyReadingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyTwentyReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
