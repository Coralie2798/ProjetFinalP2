import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-connexion-formulaire',
  templateUrl: './connexion-formulaire.component.html',
  styleUrls: ['./connexion-formulaire.component.css']
})
export class ConnexionFormulaireComponent {


  constructor(private r:Router, private fb:FormBuilder){};


  //On passe par une fonction
  connexionForm = this.fb.group({
    login: ['', Validators.required],
    mdp:['', Validators.required], 
    })


  
  connexion()
    {
      console.log(this.connexionForm.value)
      if (this.connexionForm.value.login == "admin" && this.connexionForm.value.mdp == "admin")
      {
        this.r.navigate(['utilisateur']);
      }
      else
      {

        this.connexionForm.patchValue({ // remettre les valeurs à 0
          login:"",
          mdp:""
        });
        this.r.navigate(['connexion']);
      }
    }

}
