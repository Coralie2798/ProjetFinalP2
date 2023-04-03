import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-formulaire-experience-generale',
  templateUrl: './formulaire-experience-generale.component.html',
  styleUrls: ['./formulaire-experience-generale.component.css']
})
export class FormulaireExperienceGeneraleComponent {

  constructor (private fb:FormBuilder, private es:ExperienceService) {}


  experienceForm!:FormGroup;


  ngOnInit(): void {

    this.experienceForm = this.fb.group({
      destination:[null],
      description:[null],
      formFile:[null],
      noteExperience:[null]
    })
  }

  saveExperience():void{
    this.es.addExperience(this.experienceForm.value).subscribe();
  }


}
