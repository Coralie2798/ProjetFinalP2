import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

listeU$!:Observable<Utilisateur[]>;
listeT$!:Observable<Trajet[]>;
listeC$!:Observable<Compagnie[]>;
exp$!: Observable<Experience>;
listeR$!: Observable<Restaurant[]>;
listeL$!:Observable<Lieux[]>;


exp!:Observable<Experience>;



constructor(private es:ExperienceService, private router:Router, private ls:LieuxService,
  private cs:CompagnieService, private us:UtilisateurService){}

ngOnInit(): void {
  this.listeR$=this.es.getRestaurant();
  this.listeL$=this.ls.getLieux();
  this.listeU$=this.us.getUtilisateur();
  this.listeC$=this.cs.getCompagnies();
  // this.exp$=this.;
  this.listeT$=this.es.getTrajet();
}



affE:boolean=false;
affT:boolean=true;
affA:boolean=true;



afficherE():void{
  this.affE=!this.affE
}
afficherT():void{
  console.log("afficherT")
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
