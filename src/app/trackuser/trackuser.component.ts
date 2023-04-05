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

  constructor(private rout:Router, private us:UtilisateurService){}

  user!:Utilisateur

  ngOnInit(): void {
    this.user=this.us.user
  }
  



  

}
