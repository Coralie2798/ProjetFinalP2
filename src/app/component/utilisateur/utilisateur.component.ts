import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/model/utilisateur.model';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  listeU$!: Observable<Utilisateur[]>;
  constructor(private us:UtilisateurService, private router:Router){}

  ngOnInit(): void {
    this.listeU$ = this.us.getUtilisateur();
  }


  

}
