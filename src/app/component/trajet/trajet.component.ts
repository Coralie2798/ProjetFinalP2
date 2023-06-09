import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Compagnie } from 'src/app/model/compagnie.model';
import { Trajet } from 'src/app/model/trajet.model';
import { Ville } from 'src/app/model/ville.model';
import { CompagnieService } from 'src/app/service/compagnie.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent {

  @Output() output=new EventEmitter<Trajet[]>()
  trajets: Trajet[]=[]
  constructor(private fb:FormBuilder, private es: ExperienceService,private router:Router, private cs: CompagnieService, private vs:VilleService){ }
  creerComp=false
  trajetForm!:FormGroup;
  listCompagnie!:Observable<Compagnie[]>
  listeVilles!:Observable<Ville[]>
  creerVill=false;

  ngOnInit(): void {

    this.trajetForm = this.fb.group({
      ville_depart:[null],
      ville_arrivee:[null],
      prix_t:[null],
      listeCompagnie:[null]
    })
    this.listCompagnie=this.cs.getCompagnies();
    this.listeVilles=this.vs.getVille();
  }

    saveTrajet()
    {
      this.es.addTrajet(this.trajetForm.value).subscribe();  

      console.log(this.listCompagnie)
      console.log(this.trajetForm.value)
      this.router.navigate(['resto']);
    }

    creerCompagnie(){
      this.creerComp=!this.creerComp
    }
    sendData(){
      
    }

    creerVille(){
      this.creerVill=!this.creerVill
      
    }
}
