import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesInputComponent } from './groceries-input.component';

describe('GroceriesInputComponent', () => {
  let component: GroceriesInputComponent;
  let fixture: ComponentFixture<GroceriesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceriesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
