import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compagnie } from 'src/app/model/compagnie.model';
import { Trajet } from 'src/app/model/trajet.model';
import { CompagnieService } from 'src/app/service/compagnie.service';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-liste-trajets',
  templateUrl: './liste-trajets.component.html',
  styleUrls: ['./liste-trajets.component.css']
})
export class ListeTrajetsComponent {
  listeT$!: Observable<Trajet[]>;
  listeC$!:Observable<Compagnie[]>
  constructor(private es:ExperienceService,private cs:CompagnieService, private router:Router){}

  ngOnInit(): void {
    this.listeT$ = this.es.getTrajet();
    
  }

  supprimer(id_t:number)
  {
    this.es.delete(id_t).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['trajets']);
  }
}
