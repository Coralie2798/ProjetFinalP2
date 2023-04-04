import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompagnieService } from 'src/app/service/compagnie.service';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent {
  constructor(private fb:FormBuilder, private es: ExperienceService,private router:Router, private cs: CompagnieService){ }

  trajetForm!:FormGroup;
  listCompagnie!:Observable<any>
  ngOnInit(): void {

    this.trajetForm = this.fb.group({
     ville_depart:[null],
     ville_arrivee:[null],
      prix_t:[null],
      listeCompagnie:[null]
      
    })
    this.cs.getCompagnies().subscribe(data=>{this.listCompagnie=data})
  }

    

    saveTrajet()
    {
      this.es.addTrajet(this.trajetForm.value).subscribe();   
      console.log(this.listCompagnie)
      this.router.navigate(['compagnie']);
    }

}
