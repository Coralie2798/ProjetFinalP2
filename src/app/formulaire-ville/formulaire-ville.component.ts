import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VilleService } from '../service/ville.service';
import { Pays } from '../model/pays.model';
import { PaysService } from '../service/pays.service';
import { Router } from '@angular/router';
import { Ville } from '../model/ville.model';

@Component({
  selector: 'app-formulaire-ville',
  templateUrl: './formulaire-ville.component.html',
  styleUrls: ['./formulaire-ville.component.css']
})
export class FormulaireVilleComponent {
  
  constructor(private fb:FormBuilder, private vs:VilleService, private router:Router, private ps:PaysService){ }
  creerPay=false
  villeForm!:FormGroup;
  listePays!:Pays[];
  p!:Pays;

  ngOnInit(): void {

    this.villeForm = this.fb.group({
      nom:[null],
      listePays:[null],
      p:[null]
    })
    this.ps.getPays().subscribe(data=>{this.listePays=data})
  }
  saveVille()
  {
    this.vs.addVille(new Ville(0,this.villeForm.value.nom,this.p)).subscribe();   
    this.villeForm.patchValue({
      nom:'',
    }); 
  }
  creerPays(){
    this.creerPay=!this.creerPay
    
  }
  paysselectionne(p:Pays){
    this.p = p;

  }
}
