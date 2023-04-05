import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LieuxService } from '../service/lieux.service';
import { Ville } from '../model/ville.model';
import { Router } from '@angular/router';
import { VilleService } from '../service/ville.service';
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
  listeVille!:Ville[];
  v!:Ville;
  ngOnInit(): void {

    this.lieuxForm = this.fb.group({
      prix_L:[null],
      nom_L:[null],
      listeVille: [null],
      v:[null]
    })
    this.vs.getVille().subscribe(data=>{this.listeVille=data})
  }
  saveLieux()
  {
    this.ls.addLieux(new Lieux(0,this.lieuxForm.value.prix_L,this.lieuxForm.value.nom_L,this.v)).subscribe();   
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
