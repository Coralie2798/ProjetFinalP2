import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-liste-experience-user',
  templateUrl: './liste-experience-user.component.html',
  styleUrls: ['./liste-experience-user.component.css']
})
export class ListeExperienceUserComponent implements OnInit {
iduser!:string|null
listeE$!:Observable<Experience[]>

constructor(private es:ExperienceService){}

  ngOnInit(): void {
    this.iduser=localStorage.getItem("currentUser")
    if(this.iduser){
      this.listeE$=this.es.getExperiencebyIdUser(parseInt(this.iduser))
  
    }
  }

}
