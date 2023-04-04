import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompagnieService } from 'src/app/service/compagnie.service';

@Component({
  selector: 'app-compagnie-formulaire',
  templateUrl: './compagnie-formulaire.component.html',
  styleUrls: ['./compagnie-formulaire.component.css']
})
export class CompagnieFormulaireComponent {


  constructor(private cs:CompagnieService, private rout:Router){}

  form=new FormGroup( {
      "nom": new FormControl(""),
      "type":new FormControl("")

  })

  saveCompagnie(){
    
    
    this.cs.addCompagnie(this.form.value)
    this.rout.navigate(['resto'])
  }


  recupCompagnie() {
    console.log(this.cs.getCompagnies())
  }
  
}
