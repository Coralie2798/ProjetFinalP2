import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnieFormulaireComponent } from './compagnie-formulaire.component';

describe('CompagnieFormulaireComponent', () => {
  let component: CompagnieFormulaireComponent;
  let fixture: ComponentFixture<CompagnieFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnieFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompagnieFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
