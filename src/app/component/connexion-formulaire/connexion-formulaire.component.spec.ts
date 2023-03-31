import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionFormulaireComponent } from './connexion-formulaire.component';

describe('ConnexionFormulaireComponent', () => {
  let component: ConnexionFormulaireComponent;
  let fixture: ComponentFixture<ConnexionFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
