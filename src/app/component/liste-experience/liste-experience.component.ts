import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/model/experience.model';
import { Lieux } from 'src/app/model/lieux.model';
import { Restaurant } from 'src/app/model/restaurant';
import { ExperienceService } from 'src/app/service/experience.service';
import { LieuxService } from 'src/app/service/lieux.service';

@Component({
  selector: 'app-liste-experience',
  templateUrl: './liste-experience.component.html',
  styleUrls: ['./liste-experience.component.css']
})
export class ListeExperienceComponent implements OnInit {

  constructor(private es:ExperienceService, private router:Router, private ls:LieuxService, private ar:ActivatedRoute){this.id=ar.snapshot.params["id"]}
   
  exp$!:Observable<Experience>;
  id!:number;

  listeE$!: Observable<Experience[]>;
  listeR$!: Observable<Restaurant[]>;
  listeL$!:Observable<Lieux[]>;
  

 ngOnInit(): void {
   this.listeE$=this.es.getExperience();
   this.listeR$=this.es.getRestaurant();
   this.listeL$=this.ls.getLieux();
  }

nbEtoile(){

}


afficherExperience(id:number) {
  console.log(id)
  this.exp$=this.es.getExperienceById(id)
  // this.router.navigate(['experience/']);
}

}
