import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compagnie } from 'src/app/model/compagnie.model';
import { Experience } from 'src/app/model/experience.model';
import { Lieux } from 'src/app/model/lieux.model';
import { Restaurant } from 'src/app/model/restaurant';
import { Trajet } from 'src/app/model/trajet.model';
import { Utilisateur } from 'src/app/model/utilisateur.model';
import { CompagnieService } from 'src/app/service/compagnie.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { LieuxService } from 'src/app/service/lieux.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  
constructor(private es:ExperienceService, private router:Router, private ls:LieuxService,
  private cs:CompagnieService, private us:UtilisateurService, private ar:ActivatedRoute){this.idExperience = ar.snapshot.params['idExperience']; this.idResto = ar.snapshot.params['idResto']}



listeU$!:Observable<Utilisateur[]>;
listeT$!:Observable<Trajet[]>;
listeC$!:Observable<Compagnie[]>;
listeR$!: Observable<Restaurant[]>;
listeL$!:Observable<Lieux[]>;
idExperience!:number; //Récupération id de l'experience
idE!:number;
exp!:Observable<Experience>;
dest!:string;
idResto!:number;
resto!:Observable<Restaurant>;


comp!:Observable<Compagnie>;
tra!:Observable<Trajet>;


ngOnInit(): void {
  this.idExperience=this.es.idExp;
  this.listeR$=this.es.getRestaurant();
  this.listeL$=this.ls.getLieux();
  this.listeU$=this.us.getUtilisateur();
  this.listeC$=this.cs.getCompagnies();
  this.listeT$=this.es.getTrajet();
  this.exp=this.es.getExperienceById(this.idExperience);
  this.tra=this.es.getTrajetByExp();
  this.comp=this.cs.getCompagnieByExp()
  //this.resto=this.es.getRestoByid(this.idResto)
}



affE:boolean=false;
affT:boolean=true;
affA:boolean=true;

afficherE():void{
  console.log("afficherE")
  this.affE=false
  this.affT=true
  this.affA=true
}
afficherT():void{
  console.log("afficherT"+ this.idExperience)
  this.affE=true
  this.affT=false
  this.affA=true
}
afficherA():void{
  console.log("afficherA")
  this.affE=true
  this.affT=true
  this.affA=false
}



}
