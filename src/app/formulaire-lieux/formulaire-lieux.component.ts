import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LieuxService } from '../service/lieux.service';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';
import { VilleService } from '../service/ville.service';
import { Router } from '@angular/router';

import { Lieux } from '../model/lieux.model';

@Component({
  selector: 'app-formulaire-lieux',
  templateUrl: './formulaire-lieux.component.html',
  styleUrls: ['./formulaire-lieux.component.css']
})
export class FormulaireLieuxComponent {

  constructor(private fb:FormBuilder, private ls:LieuxService, private router:Router, private vs:VilleService){ }

  lieuxForm!:FormGroup;
  creerVill=false
  listeVille!:Observable<Ville[]>;
  v!:Ville;
  ngOnInit(): void {

    this.lieuxForm = this.fb.group({
      prix_L:[null],
      nom_L:[null],
      listeVille: [null],
      ville:[null]
    })
    // this.listeVille=this.vs.getVilles();
    // this.vs.getVille().subscribe(data=>{this.listeVille=data})
    this.listeVille=this.vs.getVille();
  }
  
  saveLieux()
  {
    console.log("un message");
    this.ls.addLieux(new Lieux(0,this.lieuxForm.value.prix_L,this.lieuxForm.value.nom_L,this.lieuxForm.value.ville)).subscribe();   
    this.lieuxForm.patchValue({ 
      prix_L:0,
      nom_L:'',
    }); 
  }
  creerVille(){
    this.creerVill=!this.creerVill
    
  }
  villeselectionne(v:Ville){
    this.v = v;

  }
}
