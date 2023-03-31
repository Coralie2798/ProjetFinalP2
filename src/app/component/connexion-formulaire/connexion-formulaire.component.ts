import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-connexion-formulaire',
  templateUrl: './connexion-formulaire.component.html',
  styleUrls: ['./connexion-formulaire.component.css']
})
export class ConnexionFormulaireComponent implements OnInit {

  connexionForm!:FormGroup;

  constructor(private r:Router, private fb:FormBuilder){}
  

  
  ngOnInit(): void {
     //On passe par une fonction
 
  this.connexionForm = this.fb.group({
    login: ['', Validators.required],
    mdp:['', Validators.required], 
    })

  }



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
