import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LieuxService } from '../service/lieux.service';
import { Ville } from '../model/ville.model';
import { Router } from '@angular/router';
import { VilleService } from '../service/ville.service';

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
  ngOnInit(): void {

    this.lieuxForm = this.fb.group({
      prix_L:[null],
      nom_L:[null],
      listeVille: [null]
    })
    this.vs.getVille().subscribe(data=>{this.listeVille=data})
  }
  saveLieux()
  {
    this.ls.addLieux(this.lieuxForm.value).subscribe();   
    this.lieuxForm.patchValue({ // remettre les valeurs à 0
      prix_L:0,
      nom_L:'',
    }); 
  }
  creerVille(){
    this.creerVill=!this.creerVill
    
  }
}
