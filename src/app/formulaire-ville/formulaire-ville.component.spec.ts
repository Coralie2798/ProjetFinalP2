import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVilleComponent } from './formulaire-ville.component';

describe('FormulaireVilleComponent', () => {
  let component: FormulaireVilleComponent;
  let fixture: ComponentFixture<FormulaireVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
