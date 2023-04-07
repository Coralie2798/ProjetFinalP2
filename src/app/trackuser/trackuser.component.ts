import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur.model';
import { UtilisateurService } from '../service/utilisateur.service';


@Component({
  selector: 'app-trackuser',
  templateUrl: './trackuser.component.html',
  styleUrls: ['./trackuser.component.css']
})
export class TrackuserComponent implements OnInit{

  iduser!:string|null
  user!:Utilisateur
  constructor(private rout:Router, private us:UtilisateurService){}

  

  ngOnInit(): void {
    this.iduser=localStorage.getItem('currentUser')
  }
  



  

}
