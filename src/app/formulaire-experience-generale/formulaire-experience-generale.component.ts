import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from '../service/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-experience-generale',
  templateUrl: './formulaire-experience-generale.component.html',
  styleUrls: ['./formulaire-experience-generale.component.css']
})
export class FormulaireExperienceGeneraleComponent {

  constructor (private fb:FormBuilder, private es:ExperienceService, private rout:Router) {}


  experienceForm!:FormGroup;


  ngOnInit(): void {

    this.experienceForm = this.fb.group({
      destination:[null],
      description:[null],
      photo:[null],
      noteExperience:[null]
    })
  }

  saveExperience():void{
    this.es.addExperience(this.experienceForm.value).subscribe();
    this.rout.navigate(['trajet']);
  }


}
