import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-formulaire-ville',
  templateUrl: './formulaire-ville.component.html',
  styleUrls: ['./formulaire-ville.component.css']
})
export class FormulaireVilleComponent {
  
  constructor(private fb:FormBuilder, private vs:VilleService){ }

  villeForm!:FormGroup;

  ngOnInit(): void {

    this.villeForm = this.fb.group({
      nom:[null],
    })
  }
  saveVille()
  {
    this.vs.addVille(this.villeForm.value).subscribe();   
    this.villeForm.patchValue({
      nom:'',
    }); 
  }
}
