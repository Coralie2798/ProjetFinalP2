import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent {
  constructor(private fb:FormBuilder, private es: ExperienceService,private router:Router){ }

  trajetForm!:FormGroup;


  ngOnInit(): void {

    this.trajetForm = this.fb.group({
     ville_depart:[null],
     ville_arrivee:[null],
      prix_t:[null],
      listeCompagnie:[null]
      
    })
  }

    

    saveTrajet()
    {
      this.es.addTrajet(this.trajetForm.value).subscribe();  
       
      
      this.router.navigate(['compagnie']);
    }

}
