import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompagnieService } from 'src/app/service/compagnie.service';

@Component({
  selector: 'app-compagnie-formulaire',
  templateUrl: './compagnie-formulaire.component.html',
  styleUrls: ['./compagnie-formulaire.component.css']
})
export class CompagnieFormulaireComponent {
  constructor(private cs:CompagnieService){}

  form=new FormGroup( {
      "nom": new FormControl(""),
      "type":new FormControl("")

  })

  submitForm(){
    
    
    this.cs.addCompagnie(this.form.value)
  }

}
