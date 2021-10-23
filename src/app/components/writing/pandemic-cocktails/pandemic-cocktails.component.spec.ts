import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandemicCocktailsComponent } from './pandemic-cocktails.component';

describe('PandemicCocktailsComponenet', () => {
  let component: PandemicCocktailsComponent;
  let fixture: ComponentFixture<PandemicCocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandemicCocktailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandemicCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
