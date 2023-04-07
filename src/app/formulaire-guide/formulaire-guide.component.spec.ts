import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGuideComponent } from './formulaire-guide.component';

describe('FormulaireGuideComponent', () => {
  let component: FormulaireGuideComponent;
  let fixture: ComponentFixture<FormulaireGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
