import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireExperienceGeneraleComponent } from './formulaire-experience-generale.component';

describe('FormulaireExperienceGeneraleComponent', () => {
  let component: FormulaireExperienceGeneraleComponent;
  let fixture: ComponentFixture<FormulaireExperienceGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireExperienceGeneraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireExperienceGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
