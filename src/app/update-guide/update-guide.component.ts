import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guide } from '../model/guide.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuideService } from '../service/guide.service';
import { Router } from '@angular/router';
import { VilleService } from '../service/ville.service';
import { Ville } from '../model/ville.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-guide',
  templateUrl: './update-guide.component.html',
  styleUrls: ['./update-guide.component.css']
})
export class UpdateGuideComponent {
  constructor(private fb:FormBuilder, private gs:GuideService, private router:Router, private vs:VilleService){ }
  creerVill=false
  guideForm!:FormGroup;
  listeVille!:Ville[];
  v!:Ville;
  g!:Guide;
  @Input() inputFromParent! : Guide;
  listeV$!:Observable<Ville[]>;

  ngOnInit(): void {

    this.guideForm = this.fb.group({
      contenu:this.inputFromParent.contenu,
      
      v:this.inputFromParent.ville,
      
    })
    this.listeV$ = this.vs.getVille(),
    this.vs.getVille().subscribe(data=>{this.listeVille=data})
  }

  villeselectionne(v:Ville){
    this.v = v;

  }
  update(g:Guide)
  {
    this.gs.updateGuide(g).subscribe(()=>{this.ngOnInit()});

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
    
    guideselectionne(g:Guide){
      this.g = g;

    }
}
