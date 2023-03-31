import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/model/utilisateur.model';
import { UtilisateurService } from 'src/app/service/utilisateur.service';


@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent {

  constructor(private fb:FormBuilder, private us:UtilisateurService){ }

  utilisateurForm!:FormGroup;


  ngOnInit(): void {

    this.utilisateurForm = this.fb.group({
      nom:[null],
      prenom:[null],
      mail:[null],
      telephone:[null],
      login:[null],
      mdp:[null],
      abonne_nl:[null],
    })
  }

    

    saveUtilisateur()
    {
      this.us.addUtilisateur(this.utilisateurForm.value).subscribe();    
    }

  

}