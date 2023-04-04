import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VilleService } from '../service/ville.service';
import { Pays } from '../model/pays.model';
import { PaysService } from '../service/pays.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {

    this.villeForm = this.fb.group({
      nom:[null],
      listePays:[null]
    })
    this.ps.getPays().subscribe(data=>{this.listePays=data})
  }
  saveVille()
  {
    this.vs.addVille(this.villeForm.value).subscribe();   
    this.villeForm.patchValue({
      nom:'',
    }); 
  }
  creerPays(){
    this.creerPay=!this.creerPay
    
  }
}
