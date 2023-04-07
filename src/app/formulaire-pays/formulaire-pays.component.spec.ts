import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePaysComponent } from './formulaire-pays.component';

describe('FormulairePaysComponent', () => {
  let component: FormulairePaysComponent;
  let fixture: ComponentFixture<FormulairePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairePaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
