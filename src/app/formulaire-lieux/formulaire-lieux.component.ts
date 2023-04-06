import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LieuxService } from '../service/lieux.service';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-formulaire-lieux',
  templateUrl: './formulaire-lieux.component.html',
  styleUrls: ['./formulaire-lieux.component.css']
})
export class FormulaireLieuxComponent {

  constructor(private fb:FormBuilder, private ls:LieuxService, private vs:VilleService){ }

  lieuxForm!:FormGroup;
  listeVille!:Observable<Ville[]>;
  ngOnInit(): void {

    this.lieuxForm = this.fb.group({
      prix_L:[null],
      nom_L:[null],
    })
    this.listeVille=this.vs.getVilles();
  }
  
  saveLieux()
  {
    this.ls.addLieux(this.lieuxForm.value).subscribe();   
    this.lieuxForm.patchValue({ // remettre les valeurs à 0
      prix_L:0,
      nom_L:'',
    }); 
  }

}
