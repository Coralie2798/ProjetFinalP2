import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuideService } from '../service/guide.service';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';
import { VilleService } from '../service/ville.service';
import { Router } from '@angular/router';
import { Guide } from '../model/guide.model';

@Component({
  selector: 'app-formulaire-guide',
  templateUrl: './formulaire-guide.component.html',
  styleUrls: ['./formulaire-guide.component.css']
})
export class FormulaireGuideComponent {

  constructor(private fb:FormBuilder, private gs:GuideService, private router:Router, private vs:VilleService){ }
  creerVill=false
  updguide=false
  guideForm!:FormGroup;
  listeVille!:Ville[];
  v!:Ville;
  

  ngOnInit(): void {

    this.guideForm = this.fb.group({
      contenu:[null],
      listeVille: [null],
      v:[null]
    })
    this.vs.getVille().subscribe(data=>{this.listeVille=data})
  }

    

    saveGuide()
    {
      this.gs.addGuide(new Guide(0 ,this.guideForm.value.contenu, this.v)).subscribe();  
      this.guideForm.patchValue({ 
        contenu:''
        
      }); 
  
    }

   
    creerVille(){
      this.creerVill=!this.creerVill
      
    }
    
    villeselectionne(v:Ville){
      this.v = v;

    }
}
