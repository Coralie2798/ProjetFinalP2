import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExperienceUserComponent } from './liste-experience-user.component';

describe('ListeExperienceUserComponent', () => {
  let component: ListeExperienceUserComponent;
  let fixture: ComponentFixture<ListeExperienceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeExperienceUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeExperienceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
