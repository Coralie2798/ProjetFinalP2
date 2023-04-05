import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Guide } from 'src/app/model/guide.model';
import { Ville } from 'src/app/model/ville.model';
import { GuideService } from 'src/app/service/guide.service';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit{
  
  listeG$!: Observable<Guide[]>;
  listeV$!:Observable<Ville[]>;
  listeGV$!:Observable<Guide[]>;
  v!:Ville;
  villechoisie:boolean=false;
  constructor(private gs:GuideService,private vs:VilleService, private router:Router){}

  ngOnInit(): void {
    this.listeG$ = this.gs.getGuide();
    this.listeV$ = this.vs.getVille();
   
  }

  supprimer(id_guide:number)
  {
    this.gs.delete(id_guide).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['guide']);
  }

  villeselectionne(v:Ville){

    this.v = v;
    this.listeG$= this.gs.getGuideIDV(v.id_ville);
    this.villechoisie=true;

  }


}
