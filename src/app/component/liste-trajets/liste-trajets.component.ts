import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trajet } from 'src/app/model/trajet.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-liste-trajets',
  templateUrl: './liste-trajets.component.html',
  styleUrls: ['./liste-trajets.component.css']
})
export class ListeTrajetsComponent {
  listeT$!: Observable<Trajet[]>;
  constructor(private es:ExperienceService, private router:Router){}

  ngOnInit(): void {
    this.listeT$ = this.es.getTrajet();
  }

  supprimer(id_T:number)
  {
    this.es.delete(id_T).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['trajets']);
  }
}
