import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienceService } from '../service/experience.service';
import { Router } from '@angular/router';
import { UtilisateurService } from '../service/utilisateur.service';
import { Utilisateur } from '../model/utilisateur.model';
import { Observable, map } from 'rxjs';
import { Experience } from '../model/experience.model';
import { ExperienceComplet } from '../experience-complet';
import { Ville } from '../ville';
import { VilleService } from '../ville.service';
import { Trajet } from '../model/trajet.model';

@Component({
  selector: 'app-formulaire-experience-generale',
  templateUrl: './formulaire-experience-generale.component.html',
  styleUrls: ['./formulaire-experience-generale.component.css']
})
export class FormulaireExperienceGeneraleComponent {

  constructor (private fb:FormBuilder, private es:ExperienceService, private rout:Router, private us:UtilisateurService, private vs:VilleService) {}

  etape!:number //Etape dans le formulaire: - etape 1 : renseigner destination, description ...
                                            //-etape2 : renseigner les villes du voyage
                                            // etape 3 : renseigner les compagnies du voyage
  experienceForm1!:FormGroup;
  experienceForm2!:FormGroup;
  experienceForm3!:FormGroup;
  iduser!:string|null
  
  idCompagnies!:number[]
  payload!:ExperienceComplet
  villes$!:Observable<Ville[]>
  Ltrajets!:Trajet[]
  ngOnInit(): void {
    this.etape=1
    this.villes$=this.vs.getVilles()
    this.iduser=localStorage.getItem('currentUser')
    
   
    console.log(this.iduser)
    this.experienceForm1 = this.fb.group({
      destination:[null],
      description:[null],
      photo:[null],
      rating_moyen:[null]

    })
    this.experienceForm2 = this.fb.group({
      villes:[null],

    })



  }

  saveExperience():void{
    console.log(this.experienceForm2.value.villes)
    console.log(JSON.stringify(this.experienceForm2.value.villes))
    
    this.payload=new ExperienceComplet(this.experienceForm1.value.destination,this.experienceForm1.value.description,this.experienceForm1.value.photo,this.experienceForm1.value.rating_moyen,new Utilisateur(parseInt(this.iduser!),"","","","","","",""),this.Ltrajets[0],this.experienceForm2.value.villes)
    
    console.log(this.payload)
    //this.payload.setuser(new Utilisateur(parseInt(this.iduser!),"","","","","","",""))
    
    console.log(JSON.stringify(this.payload))
    //this.experienceFormCompl$=this.experienceForm.valueChanges.pipe(map(
     // formValue=>({
     //   ...formValue,
     //   u:{"id_U":this.iduser}})))
     //   console.log(this.experienceForm.value)


   this.es.addexpwithusertest(this.payload).subscribe();


    //this.rout.navigate(['trajet']);
  }

  back(){
    if(this.etape>1)
    this.etape=this.etape-1
  }

  continuer(){
    this.etape+=1
  }

  validerVilles(){
    this.continuer()
  }

  getTrajets(trajets:Trajet[]){
    this.Ltrajets=trajets
    console.log("composant parent: "+JSON.stringify(this.Ltrajets[0]))
    console.log(this.payload)
    this.saveExperience()
  }

}
