import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempvariablesComponent } from './tempvariables.component';

describe('TempvariablesComponent', () => {
  let component: TempvariablesComponent;
  let fixture: ComponentFixture<TempvariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempvariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
