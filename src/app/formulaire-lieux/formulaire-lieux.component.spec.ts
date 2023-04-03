import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireLieuxComponent } from './formulaire-lieux.component';

describe('FormulaireLieuxComponent', () => {
  let component: FormulaireLieuxComponent;
  let fixture: ComponentFixture<FormulaireLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
