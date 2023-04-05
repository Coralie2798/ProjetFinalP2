import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { Utilisateur } from 'src/app/model/utilisateur.model';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-connexion-formulaire',
  templateUrl: './connexion-formulaire.component.html',
  styleUrls: ['./connexion-formulaire.component.css']
})
export class ConnexionFormulaireComponent implements OnInit {

  connexionForm!:FormGroup;
  userO!:Observable<Utilisateur>
  user!:Utilisateur

  constructor(private r:Router, private fb:FormBuilder, private us:UtilisateurService){}
  

  
  ngOnInit(): void {
     //On passe par une fonction
 
  this.connexionForm = this.fb.group({
    login: ['', Validators.required],
    mdp:['', Validators.required], 
    })

  }



  connexion()
    {


      
      try{
      this.us.getUserbyLogin(this.connexionForm.value.login).subscribe((u:Utilisateur)=>this.user=u)}
      catch(error)
      {

        console.log("pas d'user du login :"+this.connexionForm.value.login)

      }
      console.log(this.user)
      if (this.connexionForm.value.login == this.user.login && this.connexionForm.value.mdp == this.user.mdp)
      {
        
        this.us.user=this.user
        
        this.r.navigate(['listeExperiences']);
        
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
