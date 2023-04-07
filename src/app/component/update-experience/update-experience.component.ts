import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from 'src/app/model/ville.model';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {

listeVille!:Observable<Ville[]>;
v!:Observable<Ville>;
idE!:number;

constructor(private vs:VilleService){}

  ngOnInit(): void {
   this.listeVille=this.vs.getVille();
   this.v=this.vs.getVilleByIdE(this.idE);
  }


}
