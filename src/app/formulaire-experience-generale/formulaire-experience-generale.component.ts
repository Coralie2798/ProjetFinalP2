import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from '../service/experience.service';
import { Router } from '@angular/router';
import { UtilisateurService } from '../service/utilisateur.service';
import { Utilisateur } from '../model/utilisateur.model';
import { map } from 'rxjs';
import { Experience } from '../model/experience.model';
import { ExperienceComplet } from '../experience-complet';

@Component({
  selector: 'app-formulaire-experience-generale',
  templateUrl: './formulaire-experience-generale.component.html',
  styleUrls: ['./formulaire-experience-generale.component.css']
})
export class FormulaireExperienceGeneraleComponent {

  constructor (private fb:FormBuilder, private es:ExperienceService, private rout:Router, private us:UtilisateurService) {}

  experienceFormCompl$!:FormGroup;
  experienceForm!:FormGroup;
  iduser!:string|null

  payload!:ExperienceComplet

  ngOnInit(): void {

    this.iduser=localStorage.getItem('currentUser')
    
   
    console.log(this.iduser)
    this.experienceForm = this.fb.group({
      destination:[null],
      description:[null],
      photo:[null],
      rating_moyen:[null]
    })
  }

  saveExperience():void{

   
    this.payload=this.experienceForm.value
    
    console.log(this.payload)
    //this.payload.setuser(new Utilisateur(parseInt(this.iduser!),"","","","","","",""))
    console.log(Object.assign(this.experienceForm.value,new Utilisateur(parseInt(this.iduser!),"","","","","","","")))
    
    //this.experienceFormCompl$=this.experienceForm.valueChanges.pipe(map(
     // formValue=>({
     //   ...formValue,
     //   u:{"id_U":this.iduser}})))
     //   console.log(this.experienceForm.value)
    //this.es.addExperience(this.experienceForm.value).subscribe();
    this.rout.navigate(['trajet']);
  }


}
